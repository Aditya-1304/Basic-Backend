const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

const schema = zod.array(zod.number());
//Example of different type of zod schemas
//{email : string => email
//password : 8 letters
//country : "IN", "US"}

const schema1 = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8).max(8),
  country: zod.literal("IN").or(zod.literal("US")),
});
app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(404).json({
      msg: "Input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000);
