import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

async function signup(req, res, next) {
  try {
    const user = await userModel.signup(req.query);
    res.status(201).send({ user: user });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.query;

    const user = await userModel.login(email);

    /*   if (user.length === 0) {
            res.status(401).send("invalid username or password");
            return;
          } */
    console.log(password);
    console.log(user[0].password);
    const validPassword =  bcrypt.compare(
      password,
      user[0].password,
      function (err, result) {
        // result == true
      }
    );
    if (user) {
      if (validPassword) {
        res.send(user);
      } else {
        res.status(401).send("invalid username or password");
      }
    }
  } catch (err) {
    next(err);
    }
}

export default { signup, login };
