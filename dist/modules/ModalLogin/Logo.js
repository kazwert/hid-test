"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const options_1 = __importDefault(require("../../core/options"));
function Logo() {
    const { Icon } = options_1.default;
    if (Icon === null) {
        return null;
    }
    // @ts-ignore
    return <Icon />;
}
exports.default = Logo;
