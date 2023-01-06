"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var _resizeImage_1 = __importDefault(require("../utils/_resizeImage"));
var routes = express_1.default.Router();
routes.get("/", _resizeImage_1.default);
exports.default = routes;
