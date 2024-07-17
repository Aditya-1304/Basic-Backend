const express = require("express");

const app = express();
app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  //   if (username != "aditya" && password != "pass") {
  //     res.status(403).json({
  //       msg: "User doesnt exist",
  //     });
  //     return;
  //   }

  //   if (kidneyId != 1 && kidneyId != 2) {
  //     res.status(411).json({
  //       msg: "Wrong inputs",
  //     });
  //     return;
  //   }
  //   res.send("Your heart is healthy");

  if (username != "aditya" || password != "pass") {
    res.status(403).json({
      msg: "Something is wrong with your inputs",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }

  res.json({
    msg: "Your kidney is fine",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
