const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  //   if (!kidneys) {
  //     res.json({
  //       msg: "Wrong inputs",
  //     });
  //   } else {
  // }
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + " kidneys");
});

//global catches
// app.use(function (err, req, res, next) {
//   res.json({
//     msg: "Sorry something happend with our server",
//   });
// });

app.listen(3000);
