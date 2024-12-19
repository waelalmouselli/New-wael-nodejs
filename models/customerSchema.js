const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  Name: String,
  Email: String,
  Message: String,
});

const Customer = mongoose.model("newCustomer", customerSchema);

module.exports = Customer;
