var express = require('express');
var router = express.Router();

/* No number was given. Throws exception */
router.get('/', function (req, res, next) {
  var e = new Error('No number was given');
  e.status = 400;
  next(e);
});

/* Get fibonacci number */
router.get('/:number',  async function (req, res, next) {
  // var fib = await getFibonacciResolved(req.params.number)
  var fib = await getFibonacciRejected(req.params.number);
  res.send(fib);
});

function getFibonacciResolved(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('happy to answer today');
    }, 2000);
  });
}

function getFibonacciRejected(n) {
  return new Promise(reject => {
    setTimeout(() => {
      reject('not today');
    }, 2000);
  });
}

module.exports = router;