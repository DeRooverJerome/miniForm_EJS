const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const data = [];

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  data.push(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("listening to port 3000");
});
