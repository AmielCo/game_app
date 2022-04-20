import express from "express";
import userController from "../controllers/userController.js";
("../controllers/authController.js");
import { encryptPassword } from "../middlewares/encryptPassword.js";
import { emailAndPasswordValidation } from "../middlewares/emailAndPasswordValidation.js";
import { emailValidator } from "../middlewares/emailvalidator.js";

const router = express.Router();

// .put(noteIdValidation, noteValidation, noteController.updateNote);

router.post("/signup", encryptPassword, emailValidator, userController.signup);
router.post("/login", emailAndPasswordValidation, userController.login);

export default router;
