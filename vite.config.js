/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function spotifyAuthMiddleware() {
  return {
    name: "spotify-auth-middleware",
    configureServer(server) {
      // Proxy middleware runs before configureServer; prepend so we intercept first
      server.middlewares.stack.unshift({
        route: "",
        handle: async (req, res, next) => {
          if (req.url?.startsWith("/api/spotify-auth/api/token") && req.method === "POST") {
            const chunks = [];
            for await (const chunk of req) chunks.push(chunk);
            const body = Buffer.concat(chunks).toString();

            const response = await fetch("https://accounts.spotify.com/api/token", {
              method: "POST",
              headers: {
                "Content-Type": req.headers["content-type"] || "application/x-www-form-urlencoded",
                Authorization: req.headers.authorization || "",
              },
              body,
            });

            res.statusCode = response.status;
            res.setHeader("Content-Type", "application/json");
            res.end(await response.text());
            return;
          }
          next();
        },
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spotifyAuthMiddleware()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.js"],
  },
  server: {
    proxy: {
      "/api/spotify": {
        target: "https://api.spotify.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/spotify/, ""),
      },
      "/api/spotify-auth": {
        target: "https://accounts.spotify.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/spotify-auth/, ""),
      },
    },
  },
});
