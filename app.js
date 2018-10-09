const express = require('express');
const app = express();
var bodyPerser = require("body-parser");

var router = require('./routes');
app.use(bodyPerser.json());
app.use(bodyPerser.urlencoded({extended: true}));

let server;

app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
    res.sendFile("index.html");
})

app.use('/task', router);

server = app.listen(9090)
console.log("server 9090 is running");