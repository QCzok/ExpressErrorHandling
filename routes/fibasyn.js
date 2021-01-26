var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var e = new Error('No number');
    next(e);
});


router.get('/:number', async function (req, res, next) {
    try {
        res.json([{
            number: req.params.number,
            fibonacci: fibonacci(req.params.number)
        }]);
    } catch (error) {
        // We need to pass the error in the catch block
        next(new Error('Something went wrong'));
    }
});

function fibonacci(n) {
    throw new Error('BROKEN') // Express will not catch this error in the async function
}

module.exports = router;