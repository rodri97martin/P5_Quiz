var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = require('../models/index')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
    res.render('credits', { name: 'Rodrigo Martín Martín' });
});

router.get('/quizzes', function(req, res, next) {
    sequelize.models.quiz.findAll()
        .then(quizzes => {
            res.render('quizzes', {quizzes});
        })
        .catch(Sequelize.ValidationError, error => {
            console.log('El quiz es erróneo.');
            error.errors.forEach(({message}) => errorlog(message));
        })
        .catch(error => {
            console.log(error.message);
        })
});

module.exports = router;
