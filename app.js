import express from "express";
const app = express();

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => console.log(`Server is running on port 8000 `));
