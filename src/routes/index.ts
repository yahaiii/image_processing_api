import express from "express";
import images from "./api/images";

const routes = express.Router();

// routes.get("/", (res: express.Response) => {
//   res.send("You're on track, next: input your resize parameters");
// });

routes.use("/images", images);

export default routes;
