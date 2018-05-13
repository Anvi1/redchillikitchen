var express = require('express');
var router = express.Router();

router.get('/menu', function (req, res, next) {
  res.send('Menu ')
});

module.exports = router;