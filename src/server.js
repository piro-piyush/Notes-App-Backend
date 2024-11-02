// Importing dotenv to load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Construct MongoDB connection path using environment variables
const mongoDbPath = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ju8v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoDbPath)
  .then(function () {
    console.log("Connected to MongoDB!");

    // App routes
    app.get("/", function (req, res) {
      const response = { message: "Congratulations API Works Fine !!" };
      res.json(response);
    });

    const noteRouter = require("./routes/Route");
    app.use("/notes", noteRouter);
  })
  .catch(function (error) {
    console.error("Failed to connect to MongoDB:", error);
  });

// Starting the server on a PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server is running at PORT:", PORT);
  console.log(`\nClick here to view : http://localhost:${PORT}`);
});
