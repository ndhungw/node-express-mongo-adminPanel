var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
  });
  
  /* GET home page. */
  router.get('/index.html', function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
  });


module.exports = router;