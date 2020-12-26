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
const Button_1 = __importDefault(require("./Button"));
const TermsOfService_1 = __importDefault(require("./TermsOfService"));
const styles_1 = __importDefault(require("./styles"));
const AppName_1 = __importDefault(require("./AppName"));
const Logo_1 = __importDefault(require("./Logo"));
const Context_1 = require("../../core/Context");
function ModalLogin() {
    const { permissionVisible, setPermissionVisible, permissionIsContinue, setPermissionIsContinue, setLoginVisible } = react_1.useContext(Context_1.Context);
    const hideSelf = () => {
        setPermissionVisible(false);
    };
    const handleContinue = () => {
        setPermissionIsContinue(true);
        hideSelf();
    };
    const handleWillHide = () => {
        if (permissionIsContinue) {
            setLoginVisible(true);
        }
    };
    return (<react_native_modal_1.default useNativeDriver={true} style={styles_1.default.modal} isVisible={permissionVisible} backdropOpacity={0.3} onBackButtonPress={hideSelf} onBackdropPress={hideSelf} onModalHide={handleWillHide}>
      <react_native_1.View style={styles_1.default.container}>
        <Logo_1.default />
        <AppName_1.default />
        <Button_1.default onPress={handleContinue}/>
        <TermsOfService_1.default />
      </react_native_1.View>
    </react_native_modal_1.default>);
}
exports.default = ModalLogin;
