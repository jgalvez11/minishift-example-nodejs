const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, err => {
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