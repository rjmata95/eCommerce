const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  //   _id: Schema.ObjectId,
});

const model = mongoose.model("product", schema);

module.exports = model;
