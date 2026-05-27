export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
  const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played${query}`, {
    method: "GET",
    headers: {
      Authorization: req.headers.authorization || "",
    },
  });

  const data = await response.text();
  res.status(response.status);
  res.setHeader("Content-Type", "application/json");
  res.send(data);
}
