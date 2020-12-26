"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themes_1 = require("../../themes");
const styles_1 = __importDefault(require("./styles"));
function Button(props) {
    const { onPress } = props;
    return (<react_native_1.TouchableOpacity onPress={onPress}>
      <react_native_1.Image style={styles_1.default.imgButton} source={themes_1.images.buttonBackground}/>
    </react_native_1.TouchableOpacity>);
}
exports.default = Button;
