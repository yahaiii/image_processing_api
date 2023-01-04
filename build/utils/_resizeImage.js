"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var resizeImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fsPromises, height, width, fileName, filePath, data, resizedImage, resizedFilePath, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                fsPromises = fs_1.default.promises;
                height = req.query.height;
                width = req.query.width;
                fileName = req.query.filename;
                filePath = path_1.default.resolve(__dirname, "../images/original/".concat(fileName, ".jpg"));
                return [4 /*yield*/, fsPromises.readFile(filePath)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, (0, sharp_1.default)(data)
                        .resize(parseInt(width), parseInt(height))
                        .toFormat('jpeg')
                        .toBuffer()];
            case 2:
                resizedImage = _a.sent();
                resizedFilePath = path_1.default.resolve(__dirname, "../images/resized/".concat(fileName, "-").concat(width, "x").concat(height, ".jpg"));
                //create resized image at the resized directory
                return [4 /*yield*/, fsPromises.writeFile(resizedFilePath, resizedImage)];
            case 3:
                //create resized image at the resized directory
                _a.sent();
                //send resized image to client
                res.sendFile(resizedFilePath);
                console.log('Image resized and saved successfully!');
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = resizeImage;
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
