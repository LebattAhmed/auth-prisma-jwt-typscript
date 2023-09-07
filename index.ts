import express from "express";
const userRoute = require("./src/User");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server on ${port}`);
});
