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
exports.loginAction = exports.LOGIN_CALLBACK = exports.LOGIN_REQUEST = void 0;
const network_1 = require("../network");
exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
exports.LOGIN_CALLBACK = 'LOGIN_CALLBACK';
exports.loginAction = {
    loginRequest: (dispatch, params) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: 'LOGIN_REQUEST' });
        const response = yield network_1.postLogin(params);
        dispatch({
            type: 'LOGIN_CALLBACK',
            payload: response
        });
    })
};
