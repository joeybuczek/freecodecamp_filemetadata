// vars
var express = require('express');
var router = express.Router();

// routes
router.get('/', function (req, res) {
    res.send('This is the home page!' + '\n' + process.env.AUTH_CODE);
});

// export
module.exports = router;