"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("../../../config/config"));
var ENCRYPTION_KEY = config_1.default.ENCRYPTION_KEY;
var ServicesSchema = new mongoose_1.default.Schema({
    name: { type: String, default: " ", required: true, unique: true },
    description: { type: String, default: " ", required: true },
    image: { type: String, default: " ", required: true },
}, {
    timestamps: true,
});
var Services = mongoose_1.default.model("Services", ServicesSchema);
exports.default = Services;
