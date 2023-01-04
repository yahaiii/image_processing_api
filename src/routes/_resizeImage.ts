import fs from 'fs';
import sharp from 'sharp';
import express from 'express';
import path from 'path';

const routes = express.Router();

routes.get('/', async (req: express.Request, res: express.Response) => {
  try {

    const { promises: fsPromises } = fs;

    //get params from the url
    const height = req.query.height as string;
    const width = req.query.width as string;
    const filename = req.query.fileName as string;
    const filePath = path.resolve(__dirname,`../../images/original/${filename}.jpg`);

    if (!height) {
      res.status(400).send('height missing, check query');
    }

    if (!width) {
      res.status(400).send('width missing, check query');
    }

    if (!filename) {
      res.status(400).send('filename missing, check query');
    }

    //read image data from the file system

    const data = await fsPromises.readFile(filePath);

    //resize image, push data to buffer
    const resizedImage = await sharp(data)
      .resize(parseInt(width), parseInt(height))
      .toFormat('jpeg')
      .toBuffer();

    //create path to resized image
    const resizedFilePath = path.resolve(__dirname, `../../images/resized/${filename}-${width}x${height}.jpg`);

    //create resized image at the resized directory
    await fsPromises.writeFile(resizedFilePath, resizedImage);

    //send resized image to client
    res.sendFile(resizedFilePath);
    console.log('Image resized and saved successfully!');

  } catch (error) {
    console.error(error);
  }
});

export default routes;
