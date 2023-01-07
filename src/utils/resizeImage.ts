import sharp from "sharp";
import path from "path";

const resizeImage = (
  filename: string,
  width: string,
  height: string
): Promise<Buffer> => {
  const filepath = path.resolve(
    __dirname,
    `../../images/original/${filename}.jpg`
  );
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
