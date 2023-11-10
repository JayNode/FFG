const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/userData/:a", async (req, res) => {
  const { name, username, email, password, pfp } = req.body;
  const action = req.params.a;
  const user = schemas.User;

  switch (action) {
    case "send":
      const userData = {
        name: name,
        username: username,
        email: email,
        password: password,
        pfp: pfp,
      };

      const newUsernameExists = await user.findOne({ username: username });
      const newEmailExists = await user.findOne({ email: email });

      if (!newEmailExists || !newUsernameExists) {
        const newUser = new user(userData);
        const saveUser = await newUser.save();

        if (saveUser) {
          res.send("New User Created!");
        } else {
          res.send("Cannot create new user!");
        }
      } else {
        res.send("Email already in use");
      }
      break;

    case "check":
      const checkData = {
        email: email,
        password: password,
      };

      const emailExists = await user.findOne({ email: email });
      const passwordExists = await user.findOne({ password: password });

      if (emailExists && passwordExists) {
        res.send("logged in");
      } else {
        res.send("email and/or password are incorrect");
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
