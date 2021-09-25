const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const parsedURL = new URL(req.url, `http://${req.headers.host}/`);
  console.log(parsedURL);

  const pathName = parsedURL.pathname;

  switch (pathName) {
    case "/":
      fs.readFile("./Pages/index.html", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;

    case "/about":
      fs.readFile("./Pages/about.html", (err, data) => {
        if (err) {
          console.error(err);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;

    case "/contact-me":
      fs.readFile("./Pages/contact-me.html", (err, data) => {
        if (err) {
          console.error(err);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;

    case "/Styles/styles.css":
      fs.readFile("./Styles/styles.css", (err, data) => {
        if (err) {
          console.error(err);
        }

        res.writeHead(200, { "Content-Type": "css" });
        res.write(data);
        res.end();
      });
      break;

    default:
      fs.readFile("./Pages/404.html", (err, data) => {
        if (err) {
          console.error(err);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;
  }
});

server.listen(port, () => {
  console.log("listening at port 8080");
});
