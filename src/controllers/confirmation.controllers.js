const Confirmation1 = require("../models/confirmation.models");
const ejs = require("ejs");
const transporter = require("../utils/mailer");

const getConfirmation = async (req, res, next) => {
  try {
    const confirmation = await Confirmation1.findAll();
    res.json(confirmation);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createConfirmation = async (req, res) => {
  try {
    const { completename, attendance, phone } = req.body;

    await Confirmation1.create({ completename, attendance, phone });
     res.status(201).send();
     transporter
       .sendMail({
         from: "alanayaca@gmail.com",
         to: "alanayaca@gmail.com",
         subject: "Registro de asistencias",
         text: `Buen día ${completename}`,
       })
       .then(() => console.log("mensaje enviado"))
       .catch((error) => console.log(error));
  
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await Confirmation1.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteAll = async (req, res, next) => {
  try {
    const confirmation = await Confirmation1.destroy();
    res.json(confirmation);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getConfirmation,
  createConfirmation,
  deleteUser,
  deleteAll,
};
