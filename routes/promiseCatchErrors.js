var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    Promise.resolve().then(function () {
      throw new Error('BROKEN')
    }).catch(next) // Errors will be passed to Express.
  })

  module.exports = router;