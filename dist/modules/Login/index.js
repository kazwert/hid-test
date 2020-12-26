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
const Illustration_1 = __importDefault(require("./Illustration"));
const Description_1 = __importDefault(require("./Description"));
const TermsDescription_1 = __importDefault(require("./TermsDescription"));
const styles_1 = __importDefault(require("./styles"));
const themes_1 = require("../../themes");
const Form_1 = __importDefault(require("./Form"));
const Context_1 = require("../../core/Context");
const eventManager_1 = require("../../core/eventManager");
function Login() {
    const { loginVisible, setLoginVisible, clearState, resetReducer } = react_1.useContext(Context_1.Context);
    const hideSelf = () => {
        setLoginVisible(false);
    };
    const handleOnCancel = () => {
        eventManager_1.EventRegister.emitEvent(eventManager_1.ON_CANCEL, true);
        resetReducer();
        clearState();
    };
    return (<react_native_modal_1.default useNativeDriver={true} avoidKeyboard={false} animationInTiming={500} animationOut="fadeOut" animationOutTiming={500} isVisible={loginVisible} onBackButtonPress={hideSelf} backdropOpacity={1} backdropColor={themes_1.colors.primary} coverScreen={true}>
      <react_native_1.KeyboardAvoidingView style={styles_1.default.keyboardAvoid} behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : 'height'}>
        <react_native_1.SafeAreaView style={styles_1.default.container}>
          <Illustration_1.default />
          <Description_1.default />
          <Form_1.default />
          <TermsDescription_1.default />
          <react_native_1.Text style={styles_1.default.btnCancel} onPress={handleOnCancel}>
            Cancel
          </react_native_1.Text>
        </react_native_1.SafeAreaView>
      </react_native_1.KeyboardAvoidingView>
    </react_native_modal_1.default>);
}
exports.default = Login;
