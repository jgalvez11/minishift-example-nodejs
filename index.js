const express = require("express");
const http = require("http");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  const greeting = { content: "Hola, Mundo REST!" };

  response.write(JSON.stringify(greeting));
  response.end();
});

app.listen(8080, "0.0.0.0", err => {
  if (err) {
    return console.log("ERROR Listenning server");
  }

  return console.log("SUCCESS Listenning server");
});

app.get("/", (req, res) => {
  res.send({ status: "OK", message: "Servicio Rest de prueba" });
  res.end();
});

module.exports = app;
