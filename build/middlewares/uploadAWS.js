"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var multer_1 = __importDefault(require("multer"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var config_1 = require("../config");
// common package
aws_sdk_1.default.config.update({
    accessKeyId: config_1.config.ACCESS_KEY_S3,
    secretAccessKey: config_1.config.SECRET_KEY_S3,
    region: config_1.config.AWS_REGION,
});
var s3 = new aws_sdk_1.default.S3();
exports.upload = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: s3,
        bucket: config_1.config.AWS_BUCKET,
        key: function (req, file, cb) {
            cb(null, file.originalname);
        },
    }),
});
