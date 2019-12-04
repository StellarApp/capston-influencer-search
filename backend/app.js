const express = require("express");
const path = require("path");
const db = require("./data");

const app = express();
const { Creator } = db.models;

// add assets folder and index
app.use("/assets", express.static(path.join(__dirname, "../frontend/assets")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

/* Subrouters for authorization */
app.use("/auth", require("./routes/auth"));

/* Subrouters for creators */
app.use("/api/creators", require("./routes/creators"));

app.use((err, req, res, next) => {
  if (err.errors) {
    message = err.errors[0].message;
  } else if (err.message) {
    message = err.message;
  }
  if (err) {
    res.status(err.status || 500).send({ message });
  }
});

module.exports = app;
