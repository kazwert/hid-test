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
const react_1 = __importStar(require("react"));
const ModalLogin_1 = __importDefault(require("./ModalLogin"));
const Login_1 = __importDefault(require("./Login"));
const OTP_1 = __importDefault(require("./OTP"));
const Context_1 = require("../core/Context");
const helpers_1 = require("../helpers");
const useGlobalState_1 = __importDefault(require("../core/useGlobalState"));
const rootReducer_1 = __importDefault(require("../models/rootReducer"));
const rootState_1 = __importDefault(require("../models/rootState"));
const loginModel_1 = require("../models/loginModel");
const loginOTPModel_1 = require("../models/loginOTPModel");
const MainComponent = (props, ref) => {
    helpers_1.checkClient();
    const [state, dispatch] = react_1.useReducer(rootReducer_1.default, rootState_1.default);
    const { phoneNumber, setPhoneNumber, countryCode, setCountryCode, permissionVisible, setPermissionVisible, permissionIsContinue, setPermissionIsContinue, loginVisible, setLoginVisible, loginOTPVisible, setLoginOTPVisible, clearState } = useGlobalState_1.default();
    const loginRequest = (params) => __awaiter(void 0, void 0, void 0, function* () {
        yield loginModel_1.loginAction.loginRequest(dispatch, params);
    });
    const loginOTPRequest = (params) => __awaiter(void 0, void 0, void 0, function* () {
        yield loginOTPModel_1.loginOTPAction.loginOTPRequest(dispatch, params);
    });
    const resetReducer = () => {
        dispatch({
            type: 'RESET'
        });
    };
    react_1.default.useImperativeHandle(ref, () => ({
        logIn: () => setPermissionVisible(true)
    }));
    return (<Context_1.Context.Provider value={{
        state,
        loginRequest,
        loginOTPRequest,
        resetReducer,
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
        clearState
    }}>
      <ModalLogin_1.default />
      <Login_1.default />
      <OTP_1.default />
    </Context_1.Context.Provider>);
};
exports.default = react_1.default.forwardRef(MainComponent);
