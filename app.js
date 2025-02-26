const fs = require("node:fs");
const http = require("node:http");
const https = require("node:https");
const hsts = require("hsts");
const express = require("express");
const router = require("./router");
const app = express();

const PORT_HTTP = process.env.PORT_HTTP || 3000;
const PORT_HTTPS = process.env.PORT_HTTPS || 3443;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  "/static",
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.set("Cache-Control", "max-age=86400");
        // res.set("Cache-Control", "no-store");
      }
      if (path.endsWith(".jpg") || path.endsWith(".png")) {
        res.set("Cache-Control", "max-age=2592000");
      }
    },
  })
);

// main router
app.use("/", router);

// error handling
app.use((req, res, next) => {
  res.status(404).render("pages/404", { title: "404 Page not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Uh Oh, Server Error");
});

http.createServer(app).listen(PORT_HTTP, () => {
  console.log(`HTTP Server running at http://localhost:${PORT_HTTP}`);
});

// HTTPS Server
const hstsOptions = {
  maxAge: 31536000,
  includeSubDomains: true,
  preload: true,
};

const options = {
  key: fs.readFileSync("./private-key.pem"),
  cert: fs.readFileSync("./certificate.pen"),
};

httpsServer = https.createServer(options, (req, res) => {
  hsts(hstsOptions)(req, res, () => {
    app(req, res);
  });
});

httpsServer.listen(PORT_HTTPS, () => {
  console.log(`HTTPS Server running at https://localhost:${PORT_HTTPS}`);
});
