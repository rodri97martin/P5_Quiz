var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
    res.render('credits', { name: 'Rodrigo Martín Martín' });
});

module.exports = router;
