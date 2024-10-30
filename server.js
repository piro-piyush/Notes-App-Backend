
// Initialization
const express = require('express');
const app = express();

// App routes
app.get("/", function(req, res){
    res.send("This is home page");
});

app.get("/", function(req, res){
    res.send("This is home page");
});

// Starting the server on a PORT
app.listen(5000, function(){
    console.log("Server is running at PORT : 5000");
});