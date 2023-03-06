const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde express, prueba");
});

app.listen(5000);
console.log("Server run in server 5000");
