const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();
require("./config/database");
require("./config/passport");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(passport.initialize());

const authRoutes = require("./routes/auth.routes");

app.use("/api", authRoutes);

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
