import express from "express";
const app = express();
import indexRouter from "./routes/index.js";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/", indexRouter);

export default app ;

