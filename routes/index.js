var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testlog', function (req, res) {
  console.log("testlog");
  res.send("done testing log");
});

router.post('/testlogpost', function (req, res) {
  console.log("testlogpost");
  res.send("done testing post log");
});

module.exports = router;
