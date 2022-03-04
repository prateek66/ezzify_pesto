"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = void 0;
// move to common package ,,   its genrating random 4 digits
var generateOtp = function () {
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    if (seq.toString().length !== 4) {
        (0, exports.generateOtp)();
    }
    return seq;
};
exports.generateOtp = generateOtp;
