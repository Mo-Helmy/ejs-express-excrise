const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home Page", path: "/" });
});

router.post("/", (req, res) => {
  users.push({ username: req.body.username });
  console.log(users);
  res.redirect("/users");
});


exports.homePage = router;
exports.users = users;
