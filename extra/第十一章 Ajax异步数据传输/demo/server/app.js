var express = require('express');
var util = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var app = express();
var arr = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.end('success');
});

app.post('/', function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.end('success');
});

app.post('/img', function (req, res) {
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = path.join(__dirname, '/public');
  form.keepExtensions = true;
  form.parse(req, function (err, fields, files) {
    arr.push({
      ...fields,
      img: files.img.path.split('public\\')[1],
    });
    console.log(arr);
    res.end('suceess');
  });
});

app.use(function (err, req, res, next) {
  res.status(500).send('Something broke');
});
app.listen(3000);
