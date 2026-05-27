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
  const body = await readBody(req);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": req.headers["content-type"] || "application/x-www-form-urlencoded",
      Authorization: req.headers.authorization || "",
    },
    body,
  });

  const data = await response.text();
  res.status(response.status);
  res.setHeader("Content-Type", "application/json");
  res.send(data);
}
