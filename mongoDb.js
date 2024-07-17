const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:OuVDH5ZdY0l82xMO@cluster0.ku4wnda.mongodb.net/newuserapp"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("username already exist");
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user.save();
  res.json({
    msg: "user created successfully",
  });
});
app.listen(3000);
