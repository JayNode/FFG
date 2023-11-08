const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/userData/:a", async (req, res) => {
  const { name, email, password } = req.body;
  const action = req.params.a;
  const user = schemas.User;

  switch (action) {
    case "send":
      const userData = {
        name: name,
        email: email,
        password: password,
      };

      const newEmailExists = await user.findOne({ email: email });

      if (!newEmailExists) {
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
        console.log("logged in");
      } else {
        console.log("email or password are incorrect");
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
