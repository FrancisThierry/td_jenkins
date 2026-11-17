const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const page = path.join(__dirname, "index.html");

http.createServer((request, response) => {
  if (request.url !== "/" && request.url !== "/index.html") {
    response.writeHead(404);
    response.end("Page introuvable");
    return;
  }

  fs.readFile(page, (error, html) => {
    if (error) {
      response.writeHead(500);
      response.end("Impossible de charger la page");
      return;
    }

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(html);
  });
}).listen(3000, () => {
  console.log("Page disponible sur http://localhost:3000");
});
