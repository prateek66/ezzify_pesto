"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = exports.sanitizeBody = void 0;
var sanitize_middleware_1 = require("./sanitize.middleware");
Object.defineProperty(exports, "sanitizeBody", { enumerable: true, get: function () { return __importDefault(sanitize_middleware_1).default; } });
var validation_middleware_1 = require("./validation.middleware");
Object.defineProperty(exports, "validationMiddleware", { enumerable: true, get: function () { return __importDefault(validation_middleware_1).default; } });
