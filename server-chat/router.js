const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "This is a Server Socket IO for Realtime Chat Application and is up and running." }).status(200);
});

module.exports = router;