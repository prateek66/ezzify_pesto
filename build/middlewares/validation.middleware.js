"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var apiError_core_1 = require("../core/apiError.core");
function validationMiddleware(type, skipMissingProperties) {
    if (skipMissingProperties === void 0) { skipMissingProperties = false; }
    return function (req, res, next) {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req.body), { skipMissingProperties: skipMissingProperties }).then(function (errors) {
            if (errors.length > 0) {
                var message = errors.map(function (error) {
                    var _a;
                    return _a = {},
                        _a[error.property] = Object.values(error.constraints).join(". "),
                        _a;
                });
                return apiError_core_1.ApiError.handle(new apiError_core_1.BadRequestError(message), res);
            }
            else {
                next();
            }
        });
    };
}
exports.default = validationMiddleware;
