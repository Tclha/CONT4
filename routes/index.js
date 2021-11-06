var express = require('express');
var router = express.Router();
var mysql = require('mariadb');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cont4',
  database: 'db_forum'
});
pool.getConnection();

/* GET home page. */
router.get('/', function(req, res, next) {
});

/* GET home page. */
router.get('/get-comment', async function(req, res, next) {
  res.set('Content-Type', 'text/html');
  var rows = await pool.query("select * from post");
  var string = "";
  for (let i = 0; i < rows.length; i++) {
    string += "<h2>";
    string += rows[i].Poster;
    string += "</h2>";
    string += "<p>";
    string += rows[i].FavFood;
    string += "</p>";
    string += "<p>";
    string += rows[i].Post;
    string += "</p>";
  }
  res.send(string);
});

router.post('/post-comment', function(req, res, next) {
  
  var request = "insert into post values ('"+ req.body.name + "', '" + req.body.favfood + "', '" + req.body.comment + "');"
  
  pool.query(request, function (err, rows) {
    if (err) throw err
  })

  res.redirect('/');
})

module.exports = router;
