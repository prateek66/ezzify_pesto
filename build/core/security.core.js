"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var crypto_js_1 = __importDefault(require("crypto-js"));
var config_1 = require("./../config");
var ENVIRONMENT = config_1.config.ENVIRONMENT, ENCRYPTION_KEY = config_1.config.ENCRYPTION_KEY;
var StatusCode;
(function (StatusCode) {
    StatusCode["INVALID_ENCRYPTED_INPUT"] = "10004";
})(StatusCode || (StatusCode = {}));
var Security = /** @class */ (function () {
    function Security() {
    }
    Security.encryption = function (body) {
        // @ts-ignore
        return crypto_js_1.default.AES.encrypt(JSON.stringify(body), ENCRYPTION_KEY).toString();
    };
    Security.decryption = function (body) {
        try {
            // @ts-ignore
            var bytes = crypto_js_1.default.AES.decrypt(body, ENCRYPTION_KEY);
            return JSON.parse(bytes.toString(crypto_js_1.default.enc.Utf8));
        }
        catch (err) {
            return StatusCode.INVALID_ENCRYPTED_INPUT;
        }
    };
    return Security;
}());
exports.default = Security;
