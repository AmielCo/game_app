import { gameappDb } from "../index.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

async function signup(newUser) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(newUser.password, salt, async function (err, hash) {
      newUser.password = hash;
      try {
        const queryResult = await gameappDb.from("users").insert(newUser);
        console.log(queryResult);
        return queryResult;
      } catch (err) {
        console.log(err);
      }
    });
  });
}

async function login(email) {
  try {
    const queryResult = await gameappDb.from("users").where({ email });
    console.log(queryResult);
    return queryResult;
  } catch (err) {
    console.log(err);
  }

  console.log("maybe josh is right?");
}
export default { signup, login };
