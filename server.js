// dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

// Look in the public folder

app.use(express.static("/public"));

// parse application

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



// Import routes/server access
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Listener

app.listen(PORT);