var express = require('express');
var router = express.Router();

/* No number was given. Throws exception */
router.get('/', function (req, res, next) {
    var e = new Error('No number was given');
    e.status = 400;
    next(e);
});

/* GET fibonacci number. */
router.get('/:number', function(req, res, next) {
    try {
        res.json([{
            number: req.params.number,
            fibonacci: fibonacci(req.params.number)
        }]);
    } catch (error) {
        next(new Error('Something went wrong'));
    }
});

function fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = router;