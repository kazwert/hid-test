"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanIDProvider = exports.onCancel = exports.onSuccess = exports.onError = exports.logIn = exports.configureHumanID = void 0;
const eventManager_1 = require("./eventManager");
const options_1 = __importDefault(require("./options"));
const Provider_1 = __importDefault(require("./Provider"));
exports.HumanIDProvider = Provider_1.default;
const configureHumanID = (params) => {
    const { appName, clientId, clientSecret, Icon = null } = params;
    options_1.default.appName = appName;
    options_1.default.clientId = clientId;
    options_1.default.clientSecret = clientSecret;
    options_1.default.Icon = Icon;
};
exports.configureHumanID = configureHumanID;
const logIn = () => {
    var _a;
    (_a = Provider_1.default.ref) === null || _a === void 0 ? void 0 : _a.logIn();
};
exports.logIn = logIn;
const onCancel = (callback) => {
    eventManager_1.EventRegister.addEventListener(eventManager_1.ON_CANCEL, (cancel) => {
        if (cancel) {
            callback();
        }
    });
};
exports.onCancel = onCancel;
const onSuccess = (callback) => {
    eventManager_1.EventRegister.addEventListener(eventManager_1.ON_SUCCESS, (exchangeToken) => {
        if (exchangeToken) {
            callback(exchangeToken);
        }
    });
};
exports.onSuccess = onSuccess;
const onError = (callback) => {
    eventManager_1.EventRegister.addEventListener(eventManager_1.ON_ERROR, (message) => {
        if (message) {
            callback(message);
        }
    });
};
exports.onError = onError;
