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
const OTPInput_1 = __importDefault(require("./OTPInput"));
const react_native_1 = require("react-native");
const styles_1 = __importDefault(require("./styles"));
const Context_1 = require("../../core/Context");
const helpers_1 = require("../../helpers");
const react_native_device_info_1 = require("react-native-device-info");
const eventManager_1 = require("../../core/eventManager");
const themes_1 = require("../../themes");
function Form() {
    var _a, _b, _c, _d;
    const { state, loginRequest, loginOTPRequest, phoneNumber, countryCode, clearState, resetReducer } = react_1.useContext(Context_1.Context);
    const otpRef = react_1.useRef(null);
    const timerRef = react_1.useRef();
    const [timer, setTimer] = react_1.useState((_d = (_c = (_b = (_a = state.loginOTPPayload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.nextResendDelay) !== null && _d !== void 0 ? _d : 60);
    const clearTimer = () => clearTimeout(timerRef.current);
    react_1.useEffect(() => {
        return () => clearTimer();
    }, []);
    react_1.useEffect(() => {
        if (timer === 0) {
            return;
        }
        function countdown() {
            setTimer(timer - 1);
        }
        timerRef.current = setTimeout(countdown, 1000);
        return () => clearTimer();
    }, [timer]);
    react_1.useEffect(() => {
        var _a, _b, _c, _d;
        if (timer === 0) {
            setTimer((_d = (_c = (_b = (_a = state.loginOTPPayload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.nextResendDelay) !== null && _d !== void 0 ? _d : 60);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.loginOTPPayload]);
    react_1.useEffect(() => {
        var _a, _b;
        if ((_a = state.loginPayload) === null || _a === void 0 ? void 0 : _a.success) {
            const { exchangeToken } = state.loginPayload.data;
            eventManager_1.EventRegister.emitEvent(eventManager_1.ON_SUCCESS, exchangeToken);
            clearState();
            resetReducer();
        }
        else if (!((_b = state.loginPayload) === null || _b === void 0 ? void 0 : _b.success)) {
            setTimeout(() => {
                var _a;
                (_a = otpRef.current) === null || _a === void 0 ? void 0 : _a.bringUpKeyBoardIfNeeded();
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.loginPayload]);
    const handleOnCodeFilled = (code) => {
        loginRequest({
            phone: phoneNumber,
            countryCode: helpers_1.getDialCode(countryCode),
            verificationCode: code,
            deviceId: react_native_device_info_1.getUniqueId()
        });
    };
    const handleResendCode = () => {
        loginOTPRequest({
            phone: phoneNumber,
            countryCode: helpers_1.getDialCode(countryCode)
        });
    };
    return (<react_native_1.View style={styles_1.default.formContainer}>
      <OTPInput_1.default ref={otpRef} pinCount={4} style={styles_1.default.otpView} codeInputFieldStyle={styles_1.default.otpFieldStyle} codeInputHighlightStyle={styles_1.default.otpHighlightStyle} keyboardType="phone-pad" autoFocusOnLoad={true} onCodeFilled={handleOnCodeFilled} editable={!state.loginFetching}/>
      {state.loginOTPFetching ? (<react_native_1.ActivityIndicator size="small" color={themes_1.colors.gray}/>) : (<react_native_1.Text style={styles_1.default.resendCode} onPress={timer === 0 ? handleResendCode : () => null}>
          {timer !== 0
        ? `Resend code in ${timer}`
        : 'Click here to resend code'}
        </react_native_1.Text>)}
    </react_native_1.View>);
}
exports.default = Form;
