var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll(data => {
    var burgerData = {
      burgers: data
    };
    res.render("index", burgerData);
  });
});

router.post("/api/burger", (req, res) => {
  burger.insertOne(req.body.burger_name, data => {
    res.json({
      ok: true
    });
  });
});

router.put("/api/burger/:id", (req, res) => {
  var burgerID = req.params.id;
  burger.updateOne(burgerID, function (data) {
    res.json({
      ok: true
    });
  });

})
module.exports = router;