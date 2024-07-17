const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345678";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "aditya@gmail.com",
    password: "123",
    name: "aditya mandal",
  },
  {
    username: "soham@gmail.com",
    password: "1234",
    name: "soham shirke",
  },
  {
    username: "atharv@gmail.com",
    password: "1234",
    name: "atharv pardeshi",
  },
];

function userExists(username, password) {
  let userExists = false;
  for (i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(404).json({
      msg: "user does not exist in our memory db",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
  res.json({
    users: ALL_USERS.filter(function (value) {
      if (value.username == username) {
        return false;
      } else return true;
    }),
  });
});

app.listen(3000);
