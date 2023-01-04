import fs from 'fs';
import sharp from 'sharp';
import express from 'express';
import path from 'path';

const resizeImage = async (req: express.Request, res: express.Response) => {
  try {

    const { promises: fsPromises } = fs;

    //get filename and dimension params from the url
    const height = req.query.height as string;
    const width = req.query.width as string;
    const fileName = req.query.filename as string;
    const filePath = path.resolve(__dirname,`../images/original/${fileName}.jpg`);

    //read image data from the file path
    const data = await fsPromises.readFile(filePath);

    //resize image, push data to buffer
    const resizedImage = await sharp(data)
      .resize(parseInt(width), parseInt(height))
      .toFormat('jpeg')
      .toBuffer();

    //create path to resized image
    const resizedFilePath = path.resolve(__dirname, `../images/resized/${fileName}-${width}x${height}.jpg`);

    //create resized image at the resized directory
    await fsPromises.writeFile(resizedFilePath, resizedImage);

    //send resized image to client
    res.sendFile(resizedFilePath);
    console.log('Image resized and saved successfully!');

  } catch (error) {
    console.error(error);
  }
};

export default resizeImage;


// import sharp from 'sharp';
// import path from 'path';
// import { promises as fsPromises } from 'fs';



// const filePath = path.resolve(__dirname,'../images/original/palmtunnel.jpg');

// const _resizeImage = async fsPromise.readFile(filePath, (err, data): Promise<Buffer> => {
//   if (err) throw err;

//   await sharp(data)
//     .resize(200, 200)
//     .toFormat('jpeg')
//     .toBuffer((err, buffer) => {
//       if (err) throw err;

//       fs.writeFile(path.resolve(__dirname, '../images/resized/resized-image.jpg'), buffer, (err) => {
//         if (err) throw err;
//         console.log('Image resized and saved successfully!');
//       });
//     });
// });

// export default _resizeImage;

// import fs from 'fs';
// import sharp from 'sharp';
// import path from 'path';

// const filePath = path.resolve(__dirname,'../images/original/santamonica.jpg');

// const _resizeImage = async () => {
//   try {
//     const { promises: fsPromises } = fs;
//     const data = await fsPromises.readFile(filePath);

//     const resizedImage = await sharp(data)
//       .resize(200, 200)
//       .toFormat('jpeg')
//       .toBuffer();

//     await fsPromises.writeFile('/path/to/resized-image.jpg', resizedImage);
//     console.log('Image resized and saved successfully!');
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default _resizeImage;
