"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resized_file_path = exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var resizeImage = function (filename, width, height) {
    var filepath = path_1.default.resolve(__dirname, "../../images/original/".concat(filename, ".jpg"));
    return (0, sharp_1.default)(filepath)
        .resize(parseInt(width), parseInt(height))
        .toFormat("jpeg")
        .toBuffer();
};
exports.resizeImage = resizeImage;
var resized_file_path = function (filename, width, height) {
    return path_1.default.resolve(__dirname, "../../images/resized/".concat(filename, "-").concat(width, "x").concat(height, ".jpg"));
};
exports.resized_file_path = resized_file_path;
