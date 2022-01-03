"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ErrorActivityLogsSchema = new mongoose_1.default.Schema({
    activityDateTime: {
        type: String,
        required: true,
    },
    deviceDetails: {
        type: String,
        required: true,
    },
    errorMethod: {
        type: String,
        required: true,
    },
    endPoint: {
        type: String,
        required: true,
    },
    errorCode: {
        type: Number,
        required: true,
    },
    statusCode: {
        type: Number,
        required: true,
    },
    responseTime: {
        type: String,
        required: true,
    },
    errorDetails: {
        type: String,
        required: true,
    },
    transactionsDetails: {
        type: String,
        required: true,
    },
});
var ErrorActivityLogsModel = mongoose_1.default.model("error_activity_logs", ErrorActivityLogsSchema);
exports.default = ErrorActivityLogsModel;
