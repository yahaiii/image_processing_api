"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
// const resize = (filename: string, width: number, height: number): Promise<Buffer>  => 
// {
//     const image_path = path.resolve(__dirname,`/images/original/${filename}.jpg`);
//     return sharp(image_path).resize(width, height).toBuffer()
// };
var _resizeImage = function (filename, width, height) {
    return (0, sharp_1.default)(path_1.default.resolve("/images/original/".concat(filename, ".jpg"))).resize(width, height).toBuffer();
};
exports.default = _resizeImage;
// import sharp from 'sharp';
// import { Request, Response } from 'express';
// import { existsSync} from 'fs';
// import path from 'path';
// const resizeImage = async (req: Request, res: Response): Promise<void | string> => {
//     try {
//         const width: string | undefined = req.query.width as string;
//         const height: string | undefined = req.query.height as string;
//         const file_name: string = req.query.filename as string;
//         const image_path = path.join(__dirname,`../../images/original/${file_name}.jpg`);
//         const resized_path = path.join(__dirname, `../../images/resized/${file_name}-${width}x${height}.jpg`);
//         if (existsSync(resized_path)){
//             return resized_path;
//         }
//         await sharp(image_path)
//         .resize(parseInt(width), parseInt(height))
//         .toFormat('jpeg')
//         .toFile(resized_path)
//         return resized_path;
//         res.send('Resize successful!')
//     } catch (error) {
//         console.log(error);
//     }
// };
// export default resizeImage;
