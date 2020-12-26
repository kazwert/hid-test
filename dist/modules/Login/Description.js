"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const options_1 = __importDefault(require("../../core/options"));
const styles_1 = __importDefault(require("./styles"));
function Description() {
    return (<react_native_1.View style={styles_1.default.centerContent}>
      <react_native_1.Text style={styles_1.default.desc}>
        HumanID confirms your phone number without sharing it with {options_1.default.appName}
      </react_native_1.Text>
      <react_native_1.Text style={[styles_1.default.desc, styles_1.default.textSpace]}>
        Your data is permanently deleted after verification.
      </react_native_1.Text>
    </react_native_1.View>);
}
exports.default = Description;
