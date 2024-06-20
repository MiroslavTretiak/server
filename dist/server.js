"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app_js_1.app.listen(process.env.PORT, () => {
    console.log("Express server launched on port: " + process.env.PORT);
});
