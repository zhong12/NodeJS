var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var tests = require('../models/test').tests;
var tests1 = require('../models/test').tests1;
mongoose.connect('mongodb://zj:123456@localhost:27017/test');
mongoose.connection.on("error", function (error) {  console.log("数据库连接失败：" + error); });
mongoose.connection.on("open", function () {  console.log("------数据库连接成功！------"); });

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'index' });
});

/*login*/
router.get('/login', function(req, res) {
    res.render('login', { title: 'login' });
});

/*logout*/
router.get('/logout', function(req, res) {
    res.render('logout', { title: 'logout' });
});

/*queryList*/
router.get('/queryList', function(req, res) {
    var query_doc = {id: req.body.id,name: req.body.name,age: req.body.age};
    tests.find(function(error,result){
        if(error){
            console.log(query_doc.name + "报错了" + new Date());
        }else{
            res.render('home', {
                title : '列表',
                testlist : result
            });
        }
    });
});


/*delete*/
router.get('/delete', function(req, res) {
    var id = req.query.id;
    var id1 = req.params.id;
    tests1.remove({id:req.query.id},function(err,docs){
        res.redirect('queryList');
    });
});


/*hompage*/
router.post('/homepage', function(req, res) {
    var t = new tests1();

    t.id = req.body.id;
    t.name = req.body.name;
    t.age = req.body.age;
    t.save(function(err){
        if(err){
            console.log("失败了");
            res.redirect('/');
        }else{
            console.log("成功了");
            res.redirect('queryList');
        }
    });
});

module.exports = router;