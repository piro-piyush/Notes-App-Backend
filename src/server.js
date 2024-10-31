// Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose
  .connect(
    "mongodb+srv://piyush:72717272@cluster0.ju8v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {

    // App routes
    app.get("/", function (req, res) {
      const response = {message: "Congratulations API Works Fine !!"};
      res.json(response);
    });

    const noteRouter = require("./routes/Route");
    app.use("/notes", noteRouter);
  });

// Starting the server on a PORT
app.listen(5000, function () {
  console.log("Server is running at PORT : 5000");
  console.log("\nClick here to view : http://localhost:5000");
});
