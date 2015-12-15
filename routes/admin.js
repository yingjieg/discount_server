var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/create', function(req, res, next) {
  res.render('create_discount');
});

module.exports = router;
