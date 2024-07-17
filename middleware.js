const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  const { username, password } = req.headers;
  if (username != "aditya" || password != "pass") {
    res.status(403).json({
      msg: "User does not exist",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const { kidneyId } = req.query;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Invalid kidney ID",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your health is fine",
  });
});
app.get("/Kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your kidney is fine",
  });
});
app.get("/heart-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your heart is healthy",
  });
});
app.listen(3000);
