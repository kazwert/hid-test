"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const react_1 = __importDefault(require("react"));
function useGlobalState() {
    const [phoneNumber, handlePhoneNumber] = react_1.default.useState('');
    const [countryCode, handleCountryCode] = react_1.default.useState('id');
    const [permissionVisible, handlePermissionVisible] = react_1.default.useState(false);
    const [permissionIsContinue, handlePermissionIsContinue] = react_1.default.useState(false);
    const [loginVisible, handleLoginVisible] = react_1.default.useState(false);
    const [loginOTPVisible, handleLoginOTPVIsible] = react_1.default.useState(false);
    const clearState = () => {
        if (loginOTPVisible) {
            handlePhoneNumber('');
            handleLoginOTPVIsible(false);
        }
        setTimeout(() => {
            handlePhoneNumber('');
            handleCountryCode('id');
            handlePermissionVisible(false);
            handlePermissionIsContinue(false);
            handleLoginVisible(false);
        }, loginOTPVisible ? 500 : 0);
    };
    const setPhoneNumber = (number) => {
        handlePhoneNumber(number);
    };
    const setCountryCode = (country) => {
        handleCountryCode(country);
    };
    const setPermissionVisible = (visible) => {
        handlePermissionVisible(visible);
    };
    const setPermissionIsContinue = (isContinue) => {
        handlePermissionIsContinue(isContinue);
    };
    const setLoginVisible = (visible) => {
        handleLoginVisible(visible);
    };
    const setLoginOTPVisible = (visible) => {
        handleLoginOTPVIsible(visible);
    };
    return {
        phoneNumber,
        setPhoneNumber,
        countryCode,
        setCountryCode,
        permissionVisible,
        setPermissionVisible,
        permissionIsContinue,
        setPermissionIsContinue,
        loginVisible,
        setLoginVisible,
        loginOTPVisible,
        setLoginOTPVisible,
        clearState,
    };
}
exports.default = useGlobalState;
