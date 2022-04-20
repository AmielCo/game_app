import express from "express";
import userController from "../controllers/userController.js";
("../controllers/authController.js");
import { encryptPassword } from "../middlewares/encryptPassword.js";
import { inputValidation } from "../middlewares/inputValidation.js";
import { emailAndPasswordValidation } from "../middlewares/emailAndPasswordValidation.js";

const router = express.Router();

// .put(noteIdValidation, noteValidation, noteController.updateNote);

router.post(
  "/signup",
  encryptPassword,
  userController.signup
);
router.post(
  "/login",
  inputValidation,
  emailAndPasswordValidation,
  userController.login
);

export default router;
