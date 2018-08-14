// dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(process.cwd() + "/public"));

// parse application

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// connect to DB

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Memphis40",
    database: "burgers_2"
});
// Import routes/server access
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

// Listener

app.listen(port);