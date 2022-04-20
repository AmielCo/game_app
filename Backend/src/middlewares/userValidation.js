import userModel from "../models/userModel.js";

async function userValidation(req, res, next) {
  let email = "";
  if (req.body.email) {
    email = req.body.email;
  } else if (req.query.userEmail) {
    email = req.query.userEmail;
  }

  const user = await userModel.getUserByEmail(email);
  if (user && user.length !== 0) {
    res.locals.user = user;
    next();
  } else {
    res.status(400).send({ status: "error", message: "user does not exist" });
  }
}

export { userValidation };
