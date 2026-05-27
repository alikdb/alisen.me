import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";

vi.hoisted(() => {
  vi.stubEnv("VITE_SPOTIFY_CLIENT_ID", "test-client-id");
  vi.stubEnv("VITE_SPOTIFY_CLIENT_SECRET", "test-client-secret");
  vi.stubEnv("VITE_SPOTIFY_REFRESH_TOKEN", "test-refresh-token");
});

import SpotifyNowPlaying from "./SpotifyNowPlaying";

// --- factories ---

const NOW_PLAYING = {
  is_playing: true,
  item: {
    name: "Akış",
    artists: [{ name: "Bağzıları" }, { name: "Hidra" }],
    external_urls: {
      spotify: "https://open.spotify.com/track/31qOmA3XGq0ZNDK4zfyenr",
    },
  },
};

const RECENT = {
  items: [
    {
      track: {
        name: "Sen Kimsin",
        artists: [{ name: "KAVAK" }, { name: "BAKAN" }],
        external_urls: {
          spotify: "https://open.spotify.com/track/6jaJ8mluPhNu7nvSUYdT98",
        },
      },
    },
  ],
};

function mockToken(overrides = {}) {
  return { access_token: "mock-token", ...overrides };
}

function mockResponse(body, status = 200) {
  return {
    status,
    ok: status >= 200 && status < 300,
    json: async () => body,
  };
}

const ROUTES = {
  token: "/api/spotify-auth/api/token",
  nowPlaying: "/api/spotify/me/player/currently-playing",
  recent: "/api/spotify/me/player/recently-played?limit=1",
};

function setupFetch({ token, nowPlaying, recentlyPlayed } = {}) {
  const t = token ?? mockToken();
  const np = nowPlaying !== undefined ? nowPlaying : NOW_PLAYING;
  const rp = recentlyPlayed ?? RECENT;

  return vi.spyOn(globalThis, "fetch").mockImplementation(async (url) => {
    const key = typeof url === "string" ? url : url.url;
    switch (key) {
      case ROUTES.token:
        return mockResponse(t, t?.status ?? 200);
      case ROUTES.nowPlaying:
        return mockResponse(np, np?.status ?? 200);
      case ROUTES.recent:
        return mockResponse(rp, rp?.status ?? 200);
      default:
        return mockResponse({}, 404);
    }
  });
}

async function renderAndFlush(ui) {
  const result = render(ui);
  await act(async () => {
    await Promise.resolve();
  });
  return result;
}

// --- tests ---

describe("SpotifyNowPlaying", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // — playing —
  describe("when a track is currently playing", () => {
    beforeEach(() => {
      setupFetch();
    });

    it("shows the track name and artists", async () => {
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(
          screen.getByText("Akış — Bağzıları, Hidra")
        ).toBeInTheDocument();
      });
    });

    it('shows "Dinleniyor" label', async () => {
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(screen.getByText("Dinleniyor")).toBeInTheDocument();
      });
    });

    it("links to the Spotify track with target=_blank", async () => {
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute(
          "href",
          "https://open.spotify.com/track/31qOmA3XGq0ZNDK4zfyenr"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });
    });
  });

  // — recently played —
  describe("when nothing is currently playing", () => {
    it("falls back to recently played when response is null", async () => {
      setupFetch({ nowPlaying: null });
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(
          screen.getByText("Sen Kimsin — KAVAK, BAKAN")
        ).toBeInTheDocument();
      });
    });

    it("falls back to recently played when is_playing is false", async () => {
      setupFetch({ nowPlaying: { is_playing: false, item: null } });
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(
          screen.getByText("Sen Kimsin — KAVAK, BAKAN")
        ).toBeInTheDocument();
      });
    });

    it("falls back to recently played on 204 status", async () => {
      setupFetch({ nowPlaying: mockResponse(null, 204) });
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(
          screen.getByText("Sen Kimsin — KAVAK, BAKAN")
        ).toBeInTheDocument();
      });
    });

    it('shows "Son dinlenen" label', async () => {
      setupFetch({ nowPlaying: null });
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(screen.getByText("Son dinlenen")).toBeInTheDocument();
      });
    });
  });

  // — null / error states —
  describe("when there is no data", () => {
    it("renders nothing before the first fetch completes", () => {
      setupFetch();
      const { container } = render(<SpotifyNowPlaying />);
      expect(container.firstChild).toBeNull();
    });

    it("renders nothing when neither playing nor recent data exists", async () => {
      setupFetch({ nowPlaying: null, recentlyPlayed: { items: [] } });
      const { container } = render(<SpotifyNowPlaying />);
      await act(async () => {
        await Promise.resolve();
      });
      expect(container.firstChild).toBeNull();
    });

    it("renders nothing when token request throws", async () => {
      vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("fail"));
      const { container } = render(<SpotifyNowPlaying />);
      await act(async () => {
        await Promise.resolve();
      });
      expect(container.firstChild).toBeNull();
    });

    it("falls back to recently played when currently-playing returns 401", async () => {
      setupFetch({ nowPlaying: mockResponse(null, 401) });
      render(<SpotifyNowPlaying />);
      await waitFor(() => {
        expect(screen.getByText("Son dinlenen")).toBeInTheDocument();
      });
    });
  });

  // — polling —
  describe("polling", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("calls fetch again after 15 seconds", async () => {
      const spy = setupFetch();
      render(<SpotifyNowPlaying />);

      await vi.advanceTimersByTimeAsync(0);
      await act(async () => {
        await Promise.resolve();
      });

      const firstCount = spy.mock.calls.length;
      expect(firstCount).toBeGreaterThanOrEqual(2); // token + nowPlaying

      await vi.advanceTimersByTimeAsync(15_000);
      await act(async () => {
        await Promise.resolve();
      });

      expect(spy.mock.calls.length).toBeGreaterThan(firstCount);
    });

    it("stops polling on unmount", async () => {
      const spy = setupFetch();
      const { unmount } = render(<SpotifyNowPlaying />);

      await vi.advanceTimersByTimeAsync(0);
      await act(async () => {
        await Promise.resolve();
      });

      const callsBeforeUnmount = spy.mock.calls.length;
      unmount();

      await vi.advanceTimersByTimeAsync(15_000);
      await act(async () => {
        await Promise.resolve();
      });

      expect(spy.mock.calls.length).toBe(callsBeforeUnmount);
    });
  });
});
