"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRefreshResponse = exports.AccessTokenErrorResponse = exports.SuccessResponse = exports.FailureMsgResponse = exports.SuccessMsgResponse = exports.InternalErrorResponse = exports.BadRequestResponse = exports.ForbiddenResponse = exports.NotFoundResponse = exports.AuthFailureResponse = void 0;
require("dotenv/config");
var config_1 = require("../config");
var security_core_1 = require("./security.core");
var logger_core_1 = require("./logger.core");
var ENVIRONMENT = process.env.ENVIRONMENT;
var ApiResponse = /** @class */ (function () {
    function ApiResponse(statusCode, status, message) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
    }
    ApiResponse.prototype.prepare = function (res, response) {
        var clientResponse = ApiResponse.sanitize(response, res.req.url);
        new logger_core_1.Logger(res, res.req, this.statusCode, this.status, clientResponse);
        return res.status(this.status).json(clientResponse);
    };
    ApiResponse.prototype.send = function (res) {
        return this.prepare(res, this);
    };
    ApiResponse.sanitize = function (response, url) {
        var clone = {};
        Object.assign(clone, response);
        // @ts-ignore
        delete clone.status;
        for (var i in clone)
            if (typeof clone[i] === "undefined")
                delete clone[i];
        if (ENVIRONMENT === "PROD" &&
            // @ts-ignore
            clone["data"] &&
            // @ts-ignore
            !clone["data"]["token"] &&
            url !== "/security/encryption" &&
            url !== "/security/decryption") {
            // @ts-ignore
            clone["data"] = security_core_1.Security.encryption(clone["data"]);
        }
        return clone;
    };
    return ApiResponse;
}());
var AuthFailureResponse = /** @class */ (function (_super) {
    __extends(AuthFailureResponse, _super);
    function AuthFailureResponse(message) {
        if (message === void 0) { message = "Authentication Failure"; }
        return _super.call(this, config_1.StatusCode.FAILURE, config_1.ResponseStatus.UNAUTHORIZED, message) || this;
    }
    return AuthFailureResponse;
}(ApiResponse));
exports.AuthFailureResponse = AuthFailureResponse;
var NotFoundResponse = /** @class */ (function (_super) {
    __extends(NotFoundResponse, _super);
    function NotFoundResponse(message) {
        if (message === void 0) { message = "Not Found"; }
        return _super.call(this, config_1.StatusCode.FAILURE, config_1.ResponseStatus.NOT_FOUND, message) || this;
    }
    NotFoundResponse.prototype.send = function (res) {
        var _a;
        this.url = (_a = res.req) === null || _a === void 0 ? void 0 : _a.originalUrl;
        return _super.prototype.prepare.call(this, res, this);
    };
    return NotFoundResponse;
}(ApiResponse));
exports.NotFoundResponse = NotFoundResponse;
var ForbiddenResponse = /** @class */ (function (_super) {
    __extends(ForbiddenResponse, _super);
    function ForbiddenResponse(message) {
        if (message === void 0) { message = "Forbidden"; }
        return _super.call(this, config_1.StatusCode.FAILURE, config_1.ResponseStatus.FORBIDDEN, message) || this;
    }
    return ForbiddenResponse;
}(ApiResponse));
exports.ForbiddenResponse = ForbiddenResponse;
var BadRequestResponse = /** @class */ (function (_super) {
    __extends(BadRequestResponse, _super);
    function BadRequestResponse(message) {
        if (message === void 0) { message = "Bad Parameters"; }
        return _super.call(this, config_1.StatusCode.FAILURE, config_1.ResponseStatus.BAD_REQUEST, message) || this;
    }
    return BadRequestResponse;
}(ApiResponse));
exports.BadRequestResponse = BadRequestResponse;
var InternalErrorResponse = /** @class */ (function (_super) {
    __extends(InternalErrorResponse, _super);
    function InternalErrorResponse(message) {
        if (message === void 0) { message = "Internal Error"; }
        return _super.call(this, config_1.StatusCode.FAILURE, config_1.ResponseStatus.INTERNAL_ERROR, message) || this;
    }
    return InternalErrorResponse;
}(ApiResponse));
exports.InternalErrorResponse = InternalErrorResponse;
var SuccessMsgResponse = /** @class */ (function (_super) {
    __extends(SuccessMsgResponse, _super);
    function SuccessMsgResponse(message) {
        return _super.call(this, config_1.StatusCode.SUCCESS, config_1.ResponseStatus.SUCCESS, message) || this;
    }
    return SuccessMsgResponse;
}(ApiResponse));
exports.SuccessMsgResponse = SuccessMsgResponse;
var FailureMsgResponse = /** @class */ (function (_super) {
    __extends(FailureMsgResponse, _super);
    function FailureMsgResponse(message) {
        return _super.call(this, config_1.StatusCode.FAILURE, config_1.ResponseStatus.SUCCESS, message) || this;
    }
    return FailureMsgResponse;
}(ApiResponse));
exports.FailureMsgResponse = FailureMsgResponse;
var SuccessResponse = /** @class */ (function (_super) {
    __extends(SuccessResponse, _super);
    function SuccessResponse(message, data) {
        var _this = _super.call(this, config_1.StatusCode.SUCCESS, config_1.ResponseStatus.SUCCESS, message) || this;
        _this.data = data;
        return _this;
    }
    SuccessResponse.prototype.send = function (res) {
        return _super.prototype.prepare.call(this, res, this);
    };
    return SuccessResponse;
}(ApiResponse));
exports.SuccessResponse = SuccessResponse;
var AccessTokenErrorResponse = /** @class */ (function (_super) {
    __extends(AccessTokenErrorResponse, _super);
    function AccessTokenErrorResponse(message) {
        if (message === void 0) { message = "Access token invalid"; }
        var _this = _super.call(this, config_1.StatusCode.INVALID_ACCESS_TOKEN, config_1.ResponseStatus.UNAUTHORIZED, message) || this;
        _this.instruction = "refresh_token";
        return _this;
    }
    AccessTokenErrorResponse.prototype.send = function (res) {
        res.setHeader("instruction", this.instruction);
        return _super.prototype.prepare.call(this, res, this);
    };
    return AccessTokenErrorResponse;
}(ApiResponse));
exports.AccessTokenErrorResponse = AccessTokenErrorResponse;
var TokenRefreshResponse = /** @class */ (function (_super) {
    __extends(TokenRefreshResponse, _super);
    function TokenRefreshResponse(message, accessToken, refreshToken) {
        var _this = _super.call(this, config_1.StatusCode.SUCCESS, config_1.ResponseStatus.SUCCESS, message) || this;
        _this.accessToken = accessToken;
        _this.refreshToken = refreshToken;
        return _this;
    }
    TokenRefreshResponse.prototype.send = function (res) {
        return _super.prototype.prepare.call(this, res, this);
    };
    return TokenRefreshResponse;
}(ApiResponse));
exports.TokenRefreshResponse = TokenRefreshResponse;
