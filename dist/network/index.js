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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.postLoginOTP = void 0;
const xhr_1 = __importDefault(require("./xhr"));
const eventManager_1 = require("../core/eventManager");
const defaultError = (e) => ({
    success: false,
    code: 'FAILURE',
    message: `Something wrong while requesting network ${e}`,
    data: null
});
const catchErrorMessage = (e) => {
    return (e === null || e === void 0 ? void 0 : e.message) || e;
};
function postLoginOTP(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield xhr_1.default('/users/login/request-otp', params);
            return Object.assign({}, response);
        }
        catch (e) {
            eventManager_1.EventRegister.emitEvent(eventManager_1.ON_ERROR, catchErrorMessage(e));
            return defaultError(catchErrorMessage(e));
        }
    });
}
exports.postLoginOTP = postLoginOTP;
function postLogin(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield xhr_1.default('/users/login', params);
            return Object.assign({}, response);
        }
        catch (e) {
            eventManager_1.EventRegister.emitEvent(eventManager_1.ON_ERROR, catchErrorMessage(e));
            return defaultError((catchErrorMessage(e)));
        }
    });
}
exports.postLogin = postLogin;
