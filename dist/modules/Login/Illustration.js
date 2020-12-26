"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const themes_1 = require("../../themes");
function Illustration() {
    return <react_native_1.Image source={themes_1.images.logoOutline} style={styles_1.default.illustration}/>;
}
exports.default = Illustration;
