import fs from "fs";
import express from "express";
import { resizeImage, resized_file_path } from "../../utils/resizeImage";

const images = express.Router();

images.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      //create fsPromises to handle buffer returned from resizeImage()
      const { promises: fsPromises } = fs;

      //get params from the url
      const height = req.query.height as string;
      const width = req.query.width as string;
      const filename = req.query.filename as string;

      //recreate path to resized image
      const resized_path = resized_file_path(filename, width, height);

      // check if parameters are supplied in url
      if (Object.keys(req.query).length === 0) {
        res
          .status(400)
          .send(
            "All parameters missing, the format is: /images?filename=[string]&width=[number]&height=[number]"
          );
      }

      if (!height) {
        res.status(400).send("invalid height parameter, check query");
      }

      if (!width) {
        res.status(400).send("invalid width parameter, check query");
      }

      if (!filename) {
        res.status(400).send("invalid filename parameter, check query");
      }

      //cache mechanism, check & serve resized image if already exists
      if (fs.existsSync(resized_path)) {
        res.sendFile(resized_path);
        console.log("...served image from cache");
      } else {
        //resize image, resizeImage() returns resized data in promise buffer
        const resized_image = await resizeImage(filename, width, height);

        //create resized image file at the resized path
        await fsPromises.writeFile(resized_path, resized_image);

        //send resized image to client
        res.sendFile(resized_path);
        console.log("Image resized and saved successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export default images;
