"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var configFile = "../.env";
dotenv_1.default.config({ path: configFile });
var config = {
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    MONGO_PASSWORD: "root",
    ENCRYPTION_KEY: "EZZIFY-PESTO",
    ENVIRONMENT: "DEV",
    SENDGRID_API_KEY: "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",
    SENDGRID_SENDER_EMAIL: "kawthekar56@gmail.com",
    ACCESS_KEY_S3: "AKIARZJEKPRNBYIF5LMJ",
    SECRET_KEY_S3: "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",
    AWS_REGION: "ap-south-1",
    AWS_BUCKET: "ezzifypesto"
};
exports.default = config;
