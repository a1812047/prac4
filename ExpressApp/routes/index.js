/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-var */
/* eslint-disable camelcase */
/* eslint-disable spaced-comment */
var express = require('express');
const app = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('index', {title: 'Express'});
});

let last_visit = 0;
router.get('/last.txt', function(_req, res, _next) { 
  res.send(
      String(last_visit),
  );
  last_visit = new Date();
});


// red, yellow, green, blue.
const colors = ['red', 'yellow', 'green', 'blue'];
let i = 0;
router.get('/color.html', (req, res, next) =>{
  res.send(`<h1 style = "color: ${colors[i%4]}">${colors[i%4]}</h1>`);
  i++;
});


//task 3.3.
const timeStamps = [];
router.get('/log.html', (req, res, next)=>{
  const now = new Date();
  timeStamps.push(JSON.stringify(now));
  res.send(`<html>
  <head> <script>
  function renderList(){
    let list = document.getElementById("1");
    for(let i = 0; i < [${timeStamps}].length; i++){
      let listObj = document.createElement("LI");
      console.log(${timeStamps}[i]);
      listObj.innerHTML = ${timeStamps}[i].value;
      list.appendChild(listObj);
    }
  }
  
</script>
</head>
  <body onload = "renderList()">
      <ul id = "1"></ul>   
  </body>
</html>`);
});
module.exports = router;
