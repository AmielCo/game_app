/* import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

async function signup(req, res, next) {
  try {
    const user = await userModel.signup(req.body);
    res.status(201).send({ user: user });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  res.status(201).send({ user: req.body });
}

export default { signup, login };
 */

import userModel from "../models/userModel.js";

async function signup(req, res) {
  const response = await userModel.signup(req.body);
  if (response.status === "ok") res.send(response);
  else res.status(401).json(response);
}

async function login(req, res) {
  res.status(201).send(req.body);
}

async function logout(req, res) {
  console.log("logOut");
}

export default { signup, login, logout };