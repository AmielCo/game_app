import express from 'express';
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import logRoute from "./middlewares/logRoute.js";


const app = express();

app.use(logRoute);
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});