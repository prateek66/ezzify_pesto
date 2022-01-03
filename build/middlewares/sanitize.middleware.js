"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filter properties from req.body by comparing an object
 * @param classModel any
 * @param body any
 */
var sanitizeBody = function (classModel, body) {
    Object.keys(body).forEach(function (key) {
        if (!classModel.hasOwnProperty(key)) {
            delete body[key];
        }
    });
    return body;
};
exports.default = sanitizeBody;
