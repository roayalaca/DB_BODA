const { Router } = require("express");
const router = Router();
const {
    getAbsence,
    createAbsence
} = require("../controllers/absence.controllers");
const { confirmValidator } = require("../validators/confirmation.validators");



router.get("/absences", getAbsence);
router.post("/absences", confirmValidator, createAbsence);


module.exports = router;
