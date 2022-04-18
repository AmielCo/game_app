import express from "express";
import "dotenv/config";
import knex from "knex";
import cors from "cors";
import bodyParser from "body-parser";
import logRoute from "./middlewares/logRoute.js";
/* import authRoutes from "./routes/authRoutes.js";
 */ import knexConfig from "./data/knexfile.js";

const gameappDb = knex(knexConfig);

const app = express();

app.use(logRoute);
app.use(express.json());
app.use(cors());

/* app.use("/auth", authRoutes);
 */

gameappDb.migrate
  .latest()
  .then((migration) => {
    if (migration) {
      console.log("connected to database", migration);
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
