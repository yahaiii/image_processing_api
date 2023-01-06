import express from "express";
import resizeImage from "../utils/_resizeImage";

const routes = express.Router();

routes.get("/", resizeImage);

export default routes;
