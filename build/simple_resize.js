"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var filePath = path_1.default.resolve(__dirname, '../images/original/fjord.jpg');
var _resizeImage = fs_1.default.readFile(filePath, function (err, data) {
    if (err)
        throw err;
    (0, sharp_1.default)(data)
        .resize(200, 200)
        .toFormat('jpeg')
        .toBuffer(function (err, buffer) {
        if (err)
            throw err;
        fs_1.default.writeFile(path_1.default.resolve(__dirname, '../images/resized-image.jpg'), buffer, function (err) {
            if (err)
                throw err;
            console.log('Image resized and saved successfully!');
        });
    });
});
exports.default = _resizeImage;
