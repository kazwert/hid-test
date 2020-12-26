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
const CountryPicker_1 = __importDefault(require("./CountryPicker"));
const Button_1 = __importDefault(require("./Button"));
const styles_1 = __importDefault(require("./styles"));
const themes_1 = require("../../themes");
const Context_1 = require("../../core/Context");
const helpers_1 = require("../../helpers");
function Form() {
    const { state, phoneNumber, setPhoneNumber, setLoginOTPVisible, setCountryCode, countryCode, loginOTPRequest } = react_1.useContext(Context_1.Context);
    react_1.useEffect(() => {
        var _a;
        if ((_a = state.loginOTPPayload) === null || _a === void 0 ? void 0 : _a.success) {
            setLoginOTPVisible(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.loginOTPPayload]);
    const handleChangeText = (text) => {
        if (isNaN(Number(text))) {
            return;
        }
        setPhoneNumber(text);
    };
    const handleCountrySelected = (item) => {
        setCountryCode(item.iso2);
    };
    const handleSubmit = () => {
        react_native_1.Keyboard.dismiss();
        loginOTPRequest({
            phone: phoneNumber,
            countryCode: helpers_1.getDialCode(countryCode)
        });
    };
    const isSubmitEnabled = () => {
        if (phoneNumber.length >= 9) {
            const phoneNumberLib = require('google-libphonenumber');
            const phoneUtil = phoneNumberLib.PhoneNumberUtil.getInstance();
            const currentCountry = helpers_1.getCountry(countryCode);
            const iso2 = currentCountry === null || currentCountry === void 0 ? void 0 : currentCountry.iso2;
            const phoneInfo = phoneUtil.parse(phoneNumber, iso2);
            return phoneUtil.isValidNumber(phoneInfo);
        }
        return false;
    };
    return (<react_native_1.View style={styles_1.default.containerForm}>
      <CountryPicker_1.default onSelected={handleCountrySelected}/>
      <react_native_1.TextInput style={styles_1.default.textInput} keyboardType="phone-pad" onChangeText={handleChangeText} value={phoneNumber} placeholder="Phone Number" placeholderTextColor={themes_1.colors.white} maxLength={15}/>
      <Button_1.default enabled={isSubmitEnabled()} onPress={handleSubmit}/>
    </react_native_1.View>);
}
exports.default = Form;
