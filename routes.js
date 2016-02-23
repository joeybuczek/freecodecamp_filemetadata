// vars
var express = require('express');
var router = express.Router();

// multer
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

// main route
router.get('/', function (req, res) {
    res.send(htmlForm);
});

// post route
router.post('/', upload.single('fileUpload'), function (req, res) {
    // output metadata
    res.json({originalname: req.file.originalname, mimetype: req.file.mimetype, filesize: req.file.size});
});

// html
var htmlForm = "<html><head><title>File Metadata Microservice</title></head><body>" + 
               "<form method='post' enctype='multipart/form-data' action='/'>" +
               "<p>Upload a file to see the metadata:</p>" +
               "<p><input type='file' name='fileUpload'></p>" +
               "<p><input type='submit'></p>" +  
               "</form></body></html>";

// export
module.exports = router;