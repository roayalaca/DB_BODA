const { Router } = require("express");
const router = Router();
const {getConfirmation, createConfirmation, deleteUser, deleteAll} = require("../controllers/confirmation.controllers");
const { confirmValidator } = require("../validators/confirmation.validators");


router.get("/invitados", getConfirmation);
router.post("/invitados", createConfirmation);
router.delete("/invitados/delete/:id", deleteUser);
router.delete("/invitados/delete/", deleteAll);
 
 

module.exports = router;
 