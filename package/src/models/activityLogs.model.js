"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ActivityLogsSchema = new mongoose_1.default.Schema({
    activityDateTime: {
        type: String,
        required: true,
    },
    deviceDetails: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    endPoint: {
        type: String,
        required: true,
    },
    status: {
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
    transactionsDetails: {
        type: String,
        required: true,
    },
});
var ActivityLogsModel = mongoose_1.default.model("activity_logs", ActivityLogsSchema);
exports.default = ActivityLogsModel;
