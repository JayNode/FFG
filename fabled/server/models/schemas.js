const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pfp: { type: String, required: false, default: "" },
  entryData: { type: Date, default: Date.now },
});

const User = mongoose.model("users", userSchema);
const mySchemas = { User: User };

module.exports = mySchemas;
