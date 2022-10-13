const express = require("express");

const homeData = require("./home");

const router = express.Router();

router.get("/users", (req, res) => {
  res.render("users", {
    pageTitle: "Users Page",
    path: "/users",
    users: homeData.users,
  });
});

module.exports = router;
