export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const path = req.query.path.join("/");
  const { path: _, ...queryParams } = req.query;
  const query = new URLSearchParams(queryParams).toString();
  const apiPath = `${path}${query ? `?${query}` : ""}`;

  const response = await fetch(`https://api.spotify.com/v1/${apiPath}`, {
    method: req.method,
    headers: {
      Authorization: req.headers.authorization || "",
      "Content-Type": req.headers["content-type"] || "application/json",
    },
  });

  const data = await response.text();
  res.status(response.status);
  res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
  res.send(data);
}
