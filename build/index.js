"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var app = (0, express_1.default)();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Server is working");
});
app.get("/health", function (req, res) {
    res.sendStatus(200);
});
app.use("/api", index_1.default);
app.listen(port, function () {
    var resized_path = path_1.default.resolve(__dirname, "../images/resized");
    //TO-DO: Write tests to check for resized_path
    if (!fs_1.default.existsSync(resized_path)) {
        fs_1.default.mkdirSync(resized_path);
    }
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
