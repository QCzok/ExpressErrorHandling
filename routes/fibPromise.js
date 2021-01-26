var express = require('express');
var router = express.Router();

/* Get fibonacci number */
router.get('/:number',  async function (req, res, next) {
  var fib = await getFibonacciRejected(req.params.number)
  res.send(fib);
});

function getFibonacciRejected(n) {
  return new Promise(reject => {
    setTimeout(() => {
      reject('not today');
    }, 2000);
  });
}

module.exports = router;