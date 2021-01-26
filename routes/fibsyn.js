var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var e = new Error('No number');
    next(e);
});


router.get('/:number', function (req, res, next) {
    res.send(fibonacci(req.params.number))
});

function fibonacci(n) {
    throw new Error('BROKEN') // Express will catch this on its own.
}

module.exports = router;
