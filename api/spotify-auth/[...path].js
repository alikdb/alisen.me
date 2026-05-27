function readBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => resolve(body));
  });
}

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const path = req.query.path.join("/");
  const body = req.method === "POST" ? await readBody(req) : undefined;

  const response = await fetch(`https://accounts.spotify.com/${path}`, {
    method: req.method,
    headers: {
      "Content-Type": req.headers["content-type"] || "application/x-www-form-urlencoded",
      Authorization: req.headers.authorization || "",
    },
    ...(body ? { body } : {}),
  });

  const data = await response.text();
  res.status(response.status);
  res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
  res.send(data);
}
