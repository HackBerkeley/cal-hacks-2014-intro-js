var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.resolve(__dirname + '/../playground')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var posts = [];

app.post('/posts', function(req, res){
  var author = req.param('author');
  var msg = req.param('msg');
  if (!msg || !author || msg.length > 500 || author.length > 100) {
    res.status(400).end();
  }
  else {
    var post = {
      msg: msg,
      author: author
    };
    posts.push(post);
    res.status(200).json(posts).end();
  }
});

app.get('/posts', function(req, res){
  res.status(200).json(posts).end();
});

var port = process.env.port || 3000;
app.listen(port);
console.log('Server started on port:', port);