import sharp from "sharp";
import path from "path";
import fs from "fs";

const resizeImage = (
  filename: string,
  width: string,
  height: string
): Promise<Buffer> => {
  const filepath = path.resolve(
    __dirname,
    `../../images/original/${filename}.jpg`
  );

  if (!fs.existsSync(filepath)) {
    console.log("Wrong filename entered. Rectify filename and try again.");
  }

  return sharp(filepath)
    .resize(parseInt(width), parseInt(height))
    .toFormat("jpeg")
    .toBuffer();
};

const resized_file_path = (filename: string, width: string, height: string) => {
  return path.resolve(
    __dirname,
    `../../images/resized/${filename}-${width}x${height}.jpg`
  );
};

export { resizeImage, resized_file_path };
