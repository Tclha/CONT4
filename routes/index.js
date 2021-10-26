var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var util = require('util');

const nocache = require('nocache');

router.use(nocache());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_forum'
})
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/html');

  connection.query("select * from post", function (err, rows) {
    if (err) throw err

    var string = "";
    for (let i = 0; i < rows.length; i++) {
      string += "<h2>";
      string += rows[i].Poster;
      string += "</h2>";
      string += "<p>";
      string += rows[i].Post;
      string += "</p>";
    }
    res.send(new Buffer('<!DOCTYPE html><html><head><title>webapp</title><link rel="stylesheet" href="stylesheets/style.css"></head><body><h2>Post a comment</h2><form action="/post-comment" method="POST"><label for="name">Name:</label><br><input type="text" name="name"><br><label for="comment">Comment:</label><br><textarea rows="5" cols="80" name="comment"></textarea><br><input type="submit" value="Submit"></form>' + string + '</body></html>'));
  })
});

router.post('/post-comment', function(req, res, next) {

  connection.query("insert into post values ('"+ req.body.name + "', '" + req.body.comment + "');", function (err, rows) {
    if (err) throw err

    console.log(rows)
  })

  res.redirect('/');
})

module.exports = router;
