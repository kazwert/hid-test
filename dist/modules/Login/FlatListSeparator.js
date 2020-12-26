"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
function FlatListSeparator() {
    return <react_native_1.View style={styles_1.default.separator}/>;
}
exports.default = FlatListSeparator;
