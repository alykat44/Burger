// Denpendencies

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();
var methodOverride = require("method-override")
var burger = require("../models/burger.js")

// All routes


router.get("/", function (req, res) {
  res.redirect("/burgers");

});

router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {

    res.render("index", { burgers: data });
  });
});


router.post("/burgers/create", function (req, res) {

  console.log(req.body.name);
  burger.insertOne(

    ["burger_name", "devoured"], [req.body.name, 0], function (data) {
      res.redirect("/burgers");

    });

});

/* router.put("/burgers/update", function (req, res) {

  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne["burger_name", "devoured"], [req.params.id, 1], function (data) {
      res.redirect("/burgers");

  };
});  */



/* router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  }); */

/* router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
}); */


// Devour a Burger
/* router.post('/burgers/devoured/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
*/
// router.post('/:id', function (req, res) {
//   var condition = 'id = ' + req.params.id;
//   burger.updateOne({
//     devoured: true
//   }, condition, function (data) {
//     res.redirect('/');
//   });
// });

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});


module.exports = router;

