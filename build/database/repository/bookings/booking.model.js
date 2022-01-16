"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var config_1 = __importDefault(require("../../../config/config"));
var ENCRYPTION_KEY = config_1.default.ENCRYPTION_KEY;
var booking = new mongoose_1.default.Schema({
    serviceID: { type: mongoose_1.Schema.Types.ObjectId, ref: "Services" },
    vendorID: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
});
var BookingsSchema = new mongoose_1.default.Schema({
    userID: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    total_amount: { type: Number, default: 0 },
    bookings: [booking],
    status: { type: String, enum: ["active", "completed"], default: "active" }
}, {
    timestamps: true,
});
// BookingsSchema.plugin(require("mongoose-autopopulate"));
var Bookings = mongoose_1.default.model("Bookings", BookingsSchema);
exports.default = Bookings;
