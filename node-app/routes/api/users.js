/**
 * @login & register
 */
const express = require("express");
const router = express.Router();


// 访问localhost:5000/api/users/test 即可拿到msg
// $route GET api/users/test
// @desc 返回请求的json数据
// @access public 
router.get("/test", (req, res) => {
  res.json({ msg:"Login works"})
})

module.exports = router;