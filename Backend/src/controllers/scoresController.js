import scoreModel from "../models/scoreModel.js";

async function addScore(req, res, next) {
  try {
    const scores = scoreModel.addScore(req.query);
    res.status(201).send({ scores: req.query });
  } catch (err) {
    next(err);
  }
}

async function getHighest(req, res, next) {
    console.log(req.query)
    console.log(req.params.id)
    console.log(req.body)
  try {
    const scores = await scoreModel.getHighest(req.params.id);
    res.status(201).send(scores);
  } catch (err) {
    next(err);
  }
}

async function getLastScore(req, res, next) {
  console.log(req.query);
  console.log(req.params.id);
  console.log(req.body);
  try {
    const scores = await scoreModel.getLastScore(req.params.id);
    res.status(201).send(scores);
  } catch (err) {
    next(err);
  }
}
export default { addScore, getHighest, getLastScore};
