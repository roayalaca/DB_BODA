const { Router } = require("express");
const router = Router();
const {
    getAbsence,
    createAbsence
} = require("../controllers/absence.controllers");


router.get("/absences", getAbsence);
router.post("/absences", createAbsence);


module.exports = router;
