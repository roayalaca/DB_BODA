const { check, validationResult } = require("express-validator");


const confirmValidator = [
  check("completename", "Error con el campo completeName")
    .exists()
    .withMessage("Falta enviar el completeName")
    .notEmpty()
    .withMessage("El campo completeName no debe de estar vacío")
    .isString()
    .withMessage("El campo title debe ser un string")
    .isLength({ max: "100" })
    .withMessage("El completeName debe tener máximo 100 caracteres"),
  check("attendance", "Error con el campo attendance")
    .exists()
    .withMessage("Falta enviar el attendance")
    .notEmpty()
    .withMessage("El campo attendance no debe de estar vacío"),
  check("phone", "Error con el campo completeName")
    .exists()
    .withMessage("Falta enviar el phone")
    .notEmpty()
    .withMessage("El campo phone no debe de estar vacío")
    .isString()
    .withMessage("El campo phone debe ser un string")
    .isLength({ max: "20" })
    .withMessage("El phone debe tener máximo 20 caracteres"),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(400).json(error);
    }
  },
];

module.exports = { confirmValidator };
