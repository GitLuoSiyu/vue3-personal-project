/**
 * @login & register
 */
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const gravatar = require("gravatar");
const User = require("../../models/User");

// 访问localhost:5000/api/users/test 即可拿到msg
// $route GET api/users/test
// @desc 返回请求的json数据
// @access public 
router.get("/test", (req, res) => {
  res.json({ msg:"Login works"})
})

// 可以使用postman检测
router.post("/register", (req, res) => {
  // console.log(req.body)
  // 查询数据库中是否拥有邮箱
  User.findOne({email: req.body.email})
      .then( user => {
        if(user) {
          return res.status(400).json('邮箱已被注册')
        } else {
          // mm 是 gravatar 是默认的登陆头像  pg 是 头像格式
          const avatar = gravatar.url(req.body.email, {s: "200", r:"pg", d:"mm"});

          const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            avatar,
            password:req.body.password
          })

          // 加密，加盐
          // bcrypt.genSalt(saltRounds, function(err, salt) {
          //   bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
          //     // Stroe hash in your password DB
          //   })
          // })
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              // hash 是加盐后的密码
              newUser.password = hash;

              // 我的服务器到期了，现在post过去看不到效果
              // 正常情况，数据会存入到 数据库中
              newUser.save()
                     .then(user => res.json(user))
                     .catch(err => console.log(err))
            })
          });

        }
      })
})

// $route POST api/users/login
// @desc 返回 token jwt passport
// @access public

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // 查询数据库
  User.findOne({email: email})
      .then(user => {
        if(!user) {
          return res.status(404).json({email:"用户不存在"});
        } else {

          // 密码匹配
          // bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
          //   // res === true
          // })
          bcrypt.compare(password, user.password)
                .then(isMatch => {
                  if(isMatch) {
                    res.json({msg: "Success"})
                    // 真正应该返回的是一个token
                  } else {
                    return res.status(400).json({password: "密码错误"})
                  }
                })
        }
      })
})

module.exports = router;