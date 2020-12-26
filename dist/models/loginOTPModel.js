"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginOTPAction = exports.LOGIN_OTP_CALLBACK = exports.LOGIN_OTP_REQUEST = void 0;
const network_1 = require("../network");
exports.LOGIN_OTP_REQUEST = 'LOGIN_OTP_REQUEST';
exports.LOGIN_OTP_CALLBACK = 'LOGIN_OTP_CALLBACK';
exports.loginOTPAction = {
    loginOTPRequest: (dispatch, params) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: 'LOGIN_OTP_REQUEST' });
        const response = yield network_1.postLoginOTP(params);
        dispatch({
            type: 'LOGIN_OTP_CALLBACK',
            payload: response
        });
    })
};
