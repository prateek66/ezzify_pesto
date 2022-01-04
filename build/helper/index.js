"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.generateOtp = void 0;
var genrate_otp_1 = require("./genrate_otp");
Object.defineProperty(exports, "generateOtp", { enumerable: true, get: function () { return genrate_otp_1.generateOtp; } });
var sendgrid_1 = require("./sendgrid");
Object.defineProperty(exports, "sendMail", { enumerable: true, get: function () { return sendgrid_1.sendMail; } });
