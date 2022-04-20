/* import { gameappDb } from "../index.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

async function signup(newUser) {
  bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
    console.log(newUser.password);
    console.log(err)
  console.log(hash);})
  try {
        const user = await gameappDb.from("users").insert(newUser);
        console.log(user);
        return user;
      } catch (err) {
        console.log(err);
      }
    }

async function login(email, password) {
  try {
    console.log(email);
    console.log(password);
    const user = await gameappDb.from("users").where({ email: email });
    if (user && user.length !== 0) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        return { status: success, user: user }
      } else {
        return { status: failure, user: "wrong password or email" }
      }
    } else return { status: failure, user: "wrong email - user not found" }
  } catch (err) {
    console.log(err);
  }

}
export default { signup, login };
 */

import { gameappDb } from "../index.js";
import bcrypt from "bcrypt";

async function signup(newUser) {
  try {
    const user = await gameappDb.from("users").insert(newUser);
    return { status: "ok", newUserId: user };
  } catch (err) {
    return { status: "error", message: err.sqlMessage };
  }
}

async function login(email, password) {
  try {
    const user = await gameappDb.from("users").where({ email: email });

    if (user && user.length !== 0) {
      const validPassword = await bcrypt.compare(password, user[0].password);
      console.log(validPassword)
      if (validPassword) {
        return { status: "success", user: user };
      } else {
        return { status: "error", user: "wrong password" };
      }
    } else return { status: "error", user: "wrong email - user not found" };
  } catch (err) {
    return err;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await gameappDb.from("users").where({ email: email });
    return user;
  } catch (err) {
    console.log(err);
  }
}

export default { login, signup, getUserByEmail };