import userModel from "../models/userModel.js";

async function emailAndPasswordValidation(req, res, next) {
  const { email, password } = req.body;
  const response = await userModel.login(email, password);
  if (response.status === "ok") {
    res.locals.response = response;
    next();
  } else {
    res.status(400).json(response);
  }
}

export { emailAndPasswordValidation };
