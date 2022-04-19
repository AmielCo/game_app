import express from "express";
import scoresController from "../controllers/scoresController.js";

const router = express.Router();

router.route("/").post(scoresController.addScore);
// .put(noteIdValidation, noteValidation, noteController.updateNote);
router.route("/highScore/:id").get(scoresController.getHighest);
router.route("/lastScore/:id").get(scoresController.getLastScore);

export default router;
