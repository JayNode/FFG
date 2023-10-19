const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.get("/user", (req, res) => {
  const { name, username, email, password } = req.body;

  const userData = {
    name: name,
    username: username,
    email: email,
    password: password,
  };
  const newUser = new schemas.User(userData);
  const saveUser = newUser.save();
  if (saveUser) {
    res.send("User Created!");
  }

  res.end();
});

module.exports = router;
