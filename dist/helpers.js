"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountry = exports.getDialCode = exports.registerRef = exports.checkClient = void 0;
const options_1 = __importDefault(require("./core/options"));
const Provider_1 = __importDefault(require("./core/Provider"));
const countries = require('./assets/json/countries.json');
function checkClient() {
    var _a, _b, _c;
    if (options_1.default.clientId === null ||
        !((_a = options_1.default.clientId) === null || _a === void 0 ? void 0 : _a.length) ||
        options_1.default.clientSecret === null ||
        !((_b = options_1.default.clientSecret) === null || _b === void 0 ? void 0 : _b.length)) {
        return new Error('ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.');
    }
    else if (options_1.default.appName === null || !((_c = options_1.default.appName) === null || _c === void 0 ? void 0 : _c.length)) {
        return new Error('HumanID need your application name, please fill your application name');
    }
    else if (options_1.default.Icon === null) {
        return new Error('HumanID need your application logo, please fill your application logo');
    }
}
exports.checkClient = checkClient;
function registerRef(ref) {
    Provider_1.default.ref = ref;
}
exports.registerRef = registerRef;
function getDialCode(countryCode) {
    var _a;
    return (_a = countries[countryCode]) === null || _a === void 0 ? void 0 : _a.dialCode;
}
exports.getDialCode = getDialCode;
function getCountry(countryCode) {
    return countries[countryCode];
}
exports.getCountry = getCountry;
