const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const confirmation = require("./models/confirmation.models");
const confirmationrRoute = require("./routes/confirmation.routes");
const cors = require("cors");
const path = require("path");




confirmation;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Servidor trabajando OK");
});

app.use(confirmationrRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
