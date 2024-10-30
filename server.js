// Initialization
const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://piyush:72717272@cluster0.ju8v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    // App routes
    app.get("/", function (req, res) {
      res.send("This is home page");
    });

    app.get("/", function (req, res) {
      res.send("This is home page");
    });
  });

// Starting the server on a PORT
app.listen(5000, function () {
  console.log("Server is running at PORT : 5000");
});
