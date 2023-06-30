const Absence1 = require("../models/absences.models");
const transporter = require("../utils/mailer");
const ejs = require("ejs");

const getAbsence = async (req, res, next) => {
  try {
    const absence = await Absence1.findAll();
    res.json(absence);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createAbsence = async (req, res) => {
  try {
    const { completename, attendance, phone } = req.body;

    await Absence1.create({ completename, attendance, phone });

    res.status(201).send();

    transporter
      .sendMail({
        from: "alanayaca@gmail.com",
        to: "karenyluis.boda.2023@gmail.com" && "alanayaca@gmail.com",
        subject: "Registro de asistencia",
        text: `
         Nombre completo: ${completename}.
         Teléfono: ${phone}.
         Asistencia: ${attendance}`,
      })
      .then(() => console.log("mensaje enviado"))
      .catch((error) => console.log(error));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAbsence,
  createAbsence,
};
