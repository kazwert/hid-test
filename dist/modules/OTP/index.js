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
const react_native_modal_1 = __importDefault(require("react-native-modal"));
const Logo_1 = __importDefault(require("./Logo"));
const styles_1 = __importDefault(require("./styles"));
const Description_1 = __importDefault(require("./Description"));
const Form_1 = __importDefault(require("./Form"));
const Context_1 = require("../../core/Context");
function OTP() {
    const { loginOTPVisible, setLoginOTPVisible } = react_1.useContext(Context_1.Context);
    const hideSelf = () => {
        setLoginOTPVisible(false);
    };
    return (<react_native_modal_1.default useNativeDriver={true} style={styles_1.default.modal} isVisible={loginOTPVisible} backdropOpacity={0.3} onBackdropPress={hideSelf} onBackButtonPress={hideSelf}>
      <react_native_1.View style={styles_1.default.container}>
        <Logo_1.default />
        <Description_1.default />
        <Form_1.default />
      </react_native_1.View>
    </react_native_modal_1.default>);
}
exports.default = OTP;
