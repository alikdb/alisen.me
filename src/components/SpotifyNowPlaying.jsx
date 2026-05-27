import { useState, useEffect } from "react";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

console.log("Spotify Client ID:", CLIENT_ID);
console.log("Spotify Refresh Token:", REFRESH_TOKEN ? "Present" : "Missing");
console.log("Spotify Client Secret:", CLIENT_SECRET ? "Present" : "Missing");


async function getAccessToken() {
	console.log("Fetching Spotify access token...");
  const res = await fetch("/api/spotify-auth/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });
	console.log("Spotify token response:", res);
	console.log("Spotify token response status:", REFRESH_TOKEN);
  const data = await res.json();
  return data.access_token;
}

async function fetchNowPlaying(token) {
  const res = await fetch("/api/spotify/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status === 204 || res.status === 401) return null;
  return res.json();
}

async function fetchRecentlyPlayed(token) {
  const res = await fetch("/api/spotify/me/player/recently-played?limit=1", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.items?.[0]?.track || null;
}

const SpotifyNowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function poll() {
      try {
        const token = await getAccessToken();
        if (!alive) return;

        const nowPlaying = await fetchNowPlaying(token);
        if (!alive) return;

        if (nowPlaying && nowPlaying.is_playing) {
          setTrack(nowPlaying.item);
          setIsPlaying(true);
        } else {
          const recent = await fetchRecentlyPlayed(token);
          if (!alive) return;
          setTrack(recent);
          setIsPlaying(false);
        }
      } catch {
        // silently fail
				console.log('Error fetching Spotify data');
      } finally {
				console.log('Finished fetching Spotify data');
        if (alive) setLoading(false);
      }
    }

    poll();
    const interval = setInterval(poll, 15000);
    return () => {
      alive = false;
      clearInterval(interval);
    };
  }, []);


  if (loading) return (
    <span className="inline-flex items-center gap-3 animate-pulse">
      <span className="w-5 h-5 rounded-full bg-neutral-800 shrink-0" />
      <span className="min-w-0 space-y-1.5">
        <span className="block w-16 h-3 bg-neutral-800 rounded" />
        <span className="block w-40 h-3.5 bg-neutral-800 rounded" />
      </span>
    </span>
  );

  if (!track) return null;

  const spotifyUrl = track.external_urls?.spotify || "#";
  const label = isPlaying ? "Dinleniyor" : "Son dinlenen";

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 text-neutral-400 hover:text-green-400 transition-colors group"
    >
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
      <div className="text-sm min-w-0">
        <span className="text-neutral-600 text-xs block">{label}</span>
        <span className="truncate block group-hover:text-green-400 transition-colors">
          {track.name} — {track.artists.map((a) => a.name).join(", ")}
        </span>
      </div>
    </a>
  );
};

export default SpotifyNowPlaying;
