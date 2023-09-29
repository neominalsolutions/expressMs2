var express = require('express');
var router = express.Router();
const amqp = require('amqplib');

/* GET home page. */
router.get('/', async function(req, res, next) {


res.render('index', {title:'index'})

});

module.exports = router;
