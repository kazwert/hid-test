"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const loginModel_1 = require("./loginModel");
const loginOTPModel_1 = require("./loginOTPModel");
const rootState_1 = __importDefault(require("./rootState"));
const RESET = 'RESET';
const rootReducer = (state = rootState_1.default, action) => {
    switch (action.type) {
        case loginModel_1.LOGIN_REQUEST:
            return Object.assign(Object.assign({}, state), { loginFetching: true, loginPayload: null });
        case loginModel_1.LOGIN_CALLBACK:
            return Object.assign(Object.assign({}, state), { loginFetching: false, loginPayload: action.payload });
        case loginOTPModel_1.LOGIN_OTP_REQUEST:
            return Object.assign(Object.assign({}, state), { loginOTPFetching: true, loginOTPPayload: null });
        case loginOTPModel_1.LOGIN_OTP_CALLBACK:
            return Object.assign(Object.assign({}, state), { loginOTPFetching: false, loginOTPPayload: action.payload });
        case RESET:
            return {
                loginFetching: false,
                loginPayload: null,
                loginOTPFetching: false,
                loginOTPPayload: null
            };
    }
};
exports.rootReducer = rootReducer;
exports.default = exports.rootReducer;
