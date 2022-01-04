"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./../config");
var MONGO_CONNECTION_STRING = config_1.config.MONGO_CONNECTION_STRING, MONGO_PASSWORD = config_1.config.MONGO_PASSWORD;
// @ts-ignore
var db = MONGO_CONNECTION_STRING === null || MONGO_CONNECTION_STRING === void 0 ? void 0 : MONGO_CONNECTION_STRING.replace("<PASSWORD>", MONGO_PASSWORD);
// Connecting to the database
var connectDB = function () {
    mongoose_1.default
        // @ts-ignore
        .connect(db)
        .then(function () {
        console.log("DB connection successful!");
    })
        .catch(function (err) {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });
};
exports.default = connectDB;
