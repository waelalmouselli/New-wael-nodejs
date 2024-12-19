const express = require("express");
const router = express.Router();
const Customer = require("../models/customerSchema");
const customerController = require("../controllers/customerController");

router.get("/", customerController.index_get);
router.post("/views/index.ejs", customerController.index_post);

module.exports = router;
