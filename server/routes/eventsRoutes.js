const express = require("express");

const { getEvents } = require("../controllers/eventsController");

const router = express.Router();

router.get("/", getEvents);

module.exports = router;
