import mongoose, { Error } from "mongoose";
import router from "./src/router";
import logger from "./src/logger";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const { host, port, mongodb_uri } = process.env;

mongoose.connect(mongodb_uri!);

mongoose.connection.on("error", (err) => {
  logger.error(`MongoDB connection error: ${err}`);
});
mongoose.connection.on("open", () => {
  logger.info("MongoDB connected");
});

app.use(express.json());
app.use(router);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).send("Internal server error");
  }
);

app.listen(port!, () => {
  logger.info(`Server running at http://${host!}:${port!}`);
});

// clientes en una clinica
