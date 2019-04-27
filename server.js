const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const app = express();

// users.js
const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// connect to mongodb
mongoose.connect(db)
        .then( () => console.log("MongoDB connected"))
        .catch( err => console.log("MogoDB connect Error:",err));

// 初始化password
app.use(passport.initialize())

require("./config/passport")(passport)

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// })

// 使用routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})