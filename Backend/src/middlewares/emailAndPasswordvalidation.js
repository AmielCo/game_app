import userModel from "../models/userModel.js";

async function emailAndPasswordValidation(req, res, next) {
  const response = await userModel.login(req.body);

  if (response.status === "success") {
    res.locals.response = response;

    next();
  } else {
    res.status(400).json(response);
  }
}

export { emailAndPasswordValidation };
