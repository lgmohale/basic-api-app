var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/show', function(req, res){
  db.find()
  .then(data=>{
    res.send(data);
    console.log("abjucts will dispaly here");
  })
});


router.post('/add', function(req, res){
  var obj = req.body;
  db.create(obj)
  .then(newTask=>{
    res.send("New task added successfully");
    console.log(obj);
  })
});

router.delete('/delete', function(req, res){
  db.remove(req.body)
  .then(data=>{
    res.send("delete succefully");
    console.log("delete succefully");
  })
});

router.get('/update', function(req, res){
  db.update({name:"var"}, {$set:{name: "const"}}, {multi: false})
  .then(data=>{
    res.send("update succefully");
    console.log("update succefully");
  })
});
  
module.exports = router;