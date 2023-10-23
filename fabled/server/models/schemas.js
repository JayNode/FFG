const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  entryData: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema, "user_info");
const mySchemas = { User: User };

module.exports = mySchemas;
