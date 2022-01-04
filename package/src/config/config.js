"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var _a = process.env, MONGO_CONNECTION_STRING = _a.MONGO_CONNECTION_STRING, MONGO_PASSWORD = _a.MONGO_PASSWORD, PORT = _a.PORT, ENCRYPTION_KEY = _a.ENCRYPTION_KEY, ENVIRONMENT = _a.ENVIRONMENT;
var config = {
    MONGO_CONNECTION_STRING: MONGO_CONNECTION_STRING,
    MONGO_PASSWORD: MONGO_PASSWORD,
    PORT: PORT,
    ENCRYPTION_KEY: ENCRYPTION_KEY,
    ENVIRONMENT: ENVIRONMENT,
};
exports.default = config;
