const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  id: { type: String },
  cart: [{ type: Schema.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("user", schema);
