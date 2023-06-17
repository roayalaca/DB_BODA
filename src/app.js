const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const confirmation = require("./models/confirmation.models");
const absence = require("./models/absences.models");
const confirmationrRoute = require("./routes/confirmation.routes");
const absenceRoute = require("./routes/absences.routes")
const cors = require("cors");
const transporter = require("./utils/mailer");

transporter
   .sendMail({
     from: "alanayaca@gmail.com",
     to: "alanayaca@gmail.com",
     subject: `Lista de asistencia`,
     text: `Probanding`,
   })
   .then(() => console.log("mensaje enviado"))
   .catch((error) => console.log(error));

confirmation;
absence;

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
app.use(absenceRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
