export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
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
