const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const confirmation = require("./models/confirmation.models");
const absence = require("./models/absences.models");
const confirmationrRoute = require("./routes/confirmation.routes");
const absenceRoute = require("./routes/absences.routes");
const cors = require("cors");




confirmation;
absence;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.DB_PORT || 8000;

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Servidor trabajando OK");
});

app.use(confirmationrRoute);
app.use(absenceRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
