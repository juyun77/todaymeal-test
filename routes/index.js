const express = require("express");
const controller = require("../controller/Cindex.js");
const router = express.Router();

// GET
router.get("/", controller.main); // main
router.get("/loading", controller.loading); // loading

// POST

module.exports = router;
