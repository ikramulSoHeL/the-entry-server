const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();
require("./config/database");
require("./config/passport");

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.use((err, res, req, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: err.message,
    error: err,
  });
});

module.exports = app;
