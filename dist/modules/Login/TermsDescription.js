"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
function TermDescription() {
    return (<react_native_1.View>
      <react_native_1.Text style={styles_1.default.termsText}>
        humanID gives you back control over your privacy. The non profit
        organization authenticates you without sharing your data or retaning
        your data.
      </react_native_1.Text>
      <react_native_1.Text style={[styles_1.default.learnMoreText, styles_1.default.textSpace]}>Learn More</react_native_1.Text>
    </react_native_1.View>);
}
exports.default = TermDescription;
