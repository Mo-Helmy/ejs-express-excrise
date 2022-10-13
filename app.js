const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const homeData = require("./routes/home");
const usersPage = require("./routes/users");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeData.homePage);
app.use(usersPage);

app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
  console.log("server started at http://localhost:3000/users");
});
