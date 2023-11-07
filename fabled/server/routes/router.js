const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/newUser/:a", async (req, res) => {
  const { name, username, email, password } = req.body;
  const action = req.params.a;

  switch (action) {
    case "send":
      const userData = {
        name: name,
        username: username,
        email: email,
        password: password,
      };

      const newUser = new schemas.User(userData);
      const saveUser = await newUser.save();

      if (saveUser) {
        res.send("New User Created!");
      } else {
        res.send("Cannot create new user!");
      }
      break;

    default:
      res.send("Invalid Request");
      break;
  }

  res.end();
});

router.get("/users", async (req, res) => {
  const user = schemas.User;
  const userData = await user.find({}).exec();
  if (userData) {
    res.send(JSON.stringify(userData));
  }
});

module.exports = router;
