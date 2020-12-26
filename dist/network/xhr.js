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
const options_1 = __importDefault(require("../core/options"));
const baseURL = 'https://core.human-id.org/v0.0.3/mobile';
function xhr(url, params) {
    return __awaiter(this, void 0, void 0, function* () {
        url = baseURL + url;
        const xhrOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'client-secret': options_1.default.clientSecret,
                'client-id': options_1.default.clientId
            },
            body: JSON.stringify(params)
        };
        const response = yield fetch(url, xhrOptions);
        try {
            response.parsedBody = yield response.json();
        }
        catch (_a) { }
        if (!response.ok && response.parsedBody) {
            throw new Error(response.parsedBody.message);
        }
        return response.parsedBody;
    });
}
exports.default = xhr;
