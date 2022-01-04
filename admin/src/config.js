"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalApis = exports.ErrorType = exports.ResponseStatus = exports.StatusCode = exports.PATH = exports.ENVIRONMENT = void 0;
exports.ENVIRONMENT = "DEV";
exports.PATH = "/ezzify/api/v1";
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "10000";
    StatusCode["FAILURE"] = "10001";
    StatusCode["RETRY"] = "10002";
    StatusCode["INVALID_ACCESS_TOKEN"] = "10003";
    StatusCode["INVALID_ENCRYPTED_INPUT"] = "10004";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["SUCCESS"] = 200] = "SUCCESS";
    ResponseStatus[ResponseStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ResponseStatus[ResponseStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ResponseStatus[ResponseStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["BAD_TOKEN"] = "BadTokenError";
    ErrorType["TOKEN_EXPIRED"] = "TokenExpiredError";
    ErrorType["UNAUTHORIZED"] = "AuthFailureError";
    ErrorType["ACCESS_TOKEN"] = "AccessTokenError";
    ErrorType["INTERNAL"] = "InternalError";
    ErrorType["NOT_FOUND"] = "NotFoundError";
    ErrorType["NO_ENTRY"] = "NoEntryError";
    ErrorType["NO_DATA"] = "NoDataError";
    ErrorType["BAD_REQUEST"] = "BadRequestError";
    ErrorType["FORBIDDEN"] = "ForbiddenError";
    ErrorType["DB_ERROR"] = "DBError";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
var ExternalApis;
(function (ExternalApis) {
    ExternalApis["ACTIVITY_LOG"] = "http://localhost:4200/ezzify/api/v1/logs/activityLogs";
    ExternalApis["ERROR_LOG"] = "http://localhost:4200/ezzify/api/v1/logs/errorActivityLogs";
})(ExternalApis = exports.ExternalApis || (exports.ExternalApis = {}));
