const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  entryData: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users", userSchema, "users");
const mySchemas = { Users: Users };

module.exports = mySchemas;
