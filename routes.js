// vars
var express = require('express');
var router = express.Router();

// routes
router.get('/', function (req, res) {
    res.send('This is the home page!');
});

// export
module.exports = router;