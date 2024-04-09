var express = require('express');
var router = express.Router();
var contactModel = require('../model/contact.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

router.get('/dangky', function(req, res, next) {
  res.render('dangky', { title: 'Đăng ký tài khoản CV online' });
});

router.get('/thu_vien_CV', function(req, res, next) {
  res.render('thu_vien_CV', { title: 'Thư viện CV' });
});

router.get('/menu_CV', function(req, res, next) {
  res.render('menu_CV', { title: 'Mẫu CV dành cho Developer' });
});

router.get('/dev1', function(req, res, next) {
  res.render('dev1', { title: 'Mẫu CV Dev 1' });
});

router.get('/dev2', function(req, res, next) {
  res.render('dev2', { title: 'Mẫu CV Dev 2' });
});

router.get('/huong_dan1', function(req, res, next) {
  res.render('huong_dan1', { title: 'Hướng dẫn viết CV' });
});

router.post('/dangky', function(req, res, next) {
  var phantu =  {
  name: req.body.fullname,
  email: req.body.email,
  password:req.body.password
  }
  var dulieu = new contactModel(phantu);
  dulieu.save();
  var alert = "Đăng kí thành công";
  console.log(alert);
  res.redirect('/dangnhap');
  });

router.get('/dangnhap', function(req, res, next) {
  res.render('dangnhap', { title: 'Đăng nhập tài khoản CV online' });
});

router.get('/quen_mat_khau', function(req, res, next) {
  res.render('quen_mat_khau', { title: 'Quên mật khẩu' });
});

router.get('/resume',function(req,res,next){
    res.render('resume',{title:'Tạo CV theo mẫu'})
})

module.exports = router;
