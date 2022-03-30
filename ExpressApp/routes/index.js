var express = require('express');
const app = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'Express' });
});

var last_visit = 0;
router.get('/last.txt', function(_req, res, _next) { 
  res.send(
    String(last_visit)
  );
  last_visit = new Date();
});


// red, yellow, green, blue.
const colors = ["red", "yellow", "green", "blue"];
let i = 0;
router.get('/color.html', (req, res, next) =>{
  res.send(`<h1 style = "color: ${colors[i%4]}">${colors[i%4]}</h1>`);
  i++;
});


//task 3.3.
let timeStamps = []; 
router.get('/log.html', (req, res, next)=>{
  var now = new Date(); 
  timeStamps.push(now);
  res.send(`<ul>${timeStamps}</ul>`);
});
module.exports = router;
