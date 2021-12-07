var express = require('express');
var router = express.Router();
const mysql = require('mysql');
//var:全域
//let:變數
//const:常數，在宣告他會給他一個初始值 之後就不會變
/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.query('SELECT * FROM user WHERE id = 1', function(err, rows, fields) {
    if (err) throw err;
    console.log('SELECT Result: ', rows[0]['id']);
    console.log('SELECT Result: ', rows[0].username);
    console.log('SELECT Result: ', rows[0].password);
    //render:渲染>找叫這名字的檔案
    // let data={
    //    title:'軟功'
    //    username:rows[0].username
    // }
    //res.render('index',data);
    res.render('index', { title: '軟工', username: rows[0].username});
  });
});

module.exports = router;
