var express = require('express');
var router = express.Router();
var contactModel = require('../model/contact.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang Chu' });
});
router.get('/dangky', function(req, res, next) {
  res.render('dangky', { title: 'Dang ky' });
});
router.post('/dangky', function(req, res, next) {
  var phantu =  {
  name: req.body.fullname,
  email: req.body.email,
  password:req.body.password
  }
  var dulieu = new contactModel(phantu);
  dulieu.save();
  res.redirect('/dangnhap');
  });
router.get('/dangnhap', function(req, res, next) {
  res.render('dangnhap', { title: 'Dang nhap' });
});
router.get('/taocv',function(req,res,next){
    res.render('resume',{title:'Tao CV'})
})
module.exports = router;
