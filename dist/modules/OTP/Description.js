"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const Context_1 = require("../../core/Context");
const helpers_1 = require("../../helpers");
function Description() {
    const { phoneNumber, countryCode } = react_1.useContext(Context_1.Context);
    return (<react_native_1.View style={styles_1.default.containerDescription}>
      <react_native_1.Text style={[styles_1.default.title, styles_1.default.textSpace]}>Verification Number</react_native_1.Text>
      <react_native_1.Text style={[styles_1.default.description, styles_1.default.textSpace]}>
        We just sent a text to (+{helpers_1.getDialCode(countryCode)}) {phoneNumber}. We will not save or forward this
        number after the verification
      </react_native_1.Text>
      <react_native_1.Text style={styles_1.default.description}>
        Please enter the 4 digit code you received via SMS to
        <react_native_1.Text style={styles_1.default.phoneNumber}> (+{helpers_1.getDialCode(countryCode)}) {phoneNumber}</react_native_1.Text>
      </react_native_1.Text>
    </react_native_1.View>);
}
exports.default = Description;
