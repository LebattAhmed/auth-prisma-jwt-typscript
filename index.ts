import express, { Express, Request, Response, Application } from "express";
const app: Application = express();
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server on ${port}`);
});
