import fs from 'fs';
import sharp from 'sharp';
import express from 'express';
import path from 'path';

const resizeImage = async (req: express.Request, res: express.Response): Promise<void> => {
  try {

    const { promises: fsPromises } = fs;

    //get params from the url
    const height = req.query.height as string;
    const width = req.query.width as string;
    const filename = req.query.filename as string;

    //create paths to original & resized image
    const file_path = path.resolve(__dirname,`../../images/original/${filename}.jpg`);
    const resized_file_path = path.resolve(__dirname, `../../images/resized/${filename}-${width}x${height}.jpg`);

    // check all parameters
    if (Object.keys(req.query).length === 0) {
      res.status(400).send('All parameters missing, the format is: /resize?filename=[string]&width=[number]&height=[number]');
    }

    if (!height) {
      res.status(400).send('invalid height parameter, check query');
    }

    if (!width) {
      res.status(400).send('invalid width parameter, check query');
    }

    if (!filename) {
      res.status(400).send('invalid filename parameter, check query');
    }

    //cache mechanism, check & serve resized image if already exists
    if (fs.existsSync(resized_file_path)) {
      res.sendFile(resized_file_path);
      console.log('...served image from cache');
    }
    else {
      //read image data from the file system
          const data = await fsPromises.readFile(file_path);

      //resize image, push resized data to buffer
      const resized_image = await sharp(data)
        .resize(parseInt(width), parseInt(height))
        .toFormat('jpeg')
        .toBuffer();

      //create resized image at the resized directory
      await fsPromises.writeFile(resized_file_path, resized_image);

      //send resized image to client
      res.sendFile(resized_file_path);
      console.log('Image resized and saved successfully!');   

    }
  } catch (error) {
    console.error(error);
  }
};

export default resizeImage;

