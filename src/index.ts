import express from "express";
import routes from "./routes/index";
// import path from 'path';
// import fs from 'fs';

const app = express();
const port = 3000;

app.get("/", (req, res): void => {
  res.send("Server is working");
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.use("/resize", routes);

app.listen(port, (): void => {
  // const resized_path = path.resolve(__dirname, '../images/resized');

  // //TO-DO: Write tests to check for resized_path
  // if(!fs.existsSync(resized_path)) {
  //     fs.mkdirSync(resized_path);
  // }
  console.log(`server started at localhost:${port}`);
});

export default app;
