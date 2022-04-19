import { gameappDb } from "../index.js";

async function addScore(req) {
  console.log(req);
  try {
    const queryResult = await gameappDb.from("scores").insert(req);

    console.log(queryResult);
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function getHighest(id) {
  console.log(id);
  try {
    const queryResult = await gameappDb
      .from("scores")
      .select("score")
      .where({ userId: id })
      .orderBy("score", "desc")
      .limit(1);
    console.log(queryResult);
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function getLastScore(id) {
  console.log(id);
  try {
    const queryResult = await gameappDb
      .from("scores")
      .select("score")
      .where({ userId: id })
      .orderBy("created_at", "desc")
      .limit(1);
    console.log(queryResult);
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

export default { addScore, getHighest, getLastScore };
