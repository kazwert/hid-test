"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const react_1 = __importDefault(require("react"));
const rootState_1 = __importDefault(require("../models/rootState"));
const Context = react_1.default.createContext({
    state: rootState_1.default,
    loginRequest: () => { },
    loginOTPRequest: () => { },
    phoneNumber: '',
    setPhoneNumber: () => { },
    countryCode: 'id',
    setCountryCode: () => { },
    permissionVisible: false,
    setPermissionVisible: () => { },
    permissionIsContinue: false,
    setPermissionIsContinue: () => { },
    loginVisible: false,
    setLoginVisible: () => { },
    loginOTPVisible: false,
    setLoginOTPVisible: () => { },
    clearState: () => { },
    resetReducer: () => { }
});
exports.Context = Context;
