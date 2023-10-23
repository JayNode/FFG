const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  entryData: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema, "user_info");
const mySchemas = { User: User };

module.exports = mySchemas;
