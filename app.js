import express from "express";
const app = express();
import indexRouter from "./routes/index.js";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(8000, () => console.log(`Server is running on port 8000 `));
