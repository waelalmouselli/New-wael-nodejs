const Customer = require("../models/customerSchema");

const index_get = (req, res) => {
  res.render("index");
};

const index_post = (req, res) => {
  Customer.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { index_get, index_post };
