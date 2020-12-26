"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainComponent_1 = __importDefault(require("../modules/MainComponent"));
const helpers_1 = require("../helpers");
const Provider = () => {
    return <MainComponent_1.default ref={helpers_1.registerRef}/>;
};
Provider.ref = null;
exports.default = Provider;
