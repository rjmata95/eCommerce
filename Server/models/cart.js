const { Schema } = require("mongoose");
// const Schema = mongoose.Schema;

const schema = new Schema({
  user: String,
  products: [{ type: Schema.ObjectId, ref: "Product" }],
  order: String,
});

const model = mongoose.model("cart", schema);

module.exports = model;
