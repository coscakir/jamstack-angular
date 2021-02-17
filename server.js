const express = require("express");
const http = require("http");
const compression = require("compression");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8687;
const buildLocation = "dist/static";

app.use(compression());
app.use(express.static(buildLocation));
app.use((req, res, next) => {
  if (!req.originalUrl.includes(buildLocation)) {
    res.sendFile(`${__dirname}/${buildLocation}/index.html`);
  } else {
    next();
  }
});

const server = http.createServer(app);

server.listen(port, (error) => {
  if (error) {
    console.log(error);
    return process.exit(1);
  } else {
    console.log("Application listening on port " + port);
  }
});
