"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var axios_1 = __importDefault(require("axios"));
var getmac_1 = __importDefault(require("getmac"));
var moment = require("moment");
var ExternalApis;
(function (ExternalApis) {
    ExternalApis["ACTIVITY_LOG"] = "http://localhost:4200/ezzify/api/v1/logs/activityLogs";
    ExternalApis["ERROR_LOG"] = "http://localhost:4200/ezzify/api/v1/logs/errorActivityLogs";
})(ExternalApis || (ExternalApis = {}));
var Logger = /** @class */ (function () {
    function Logger(response, request, statusCode, status, clientResponse) {
        var _this = this;
        this.response = response;
        this.request = request;
        this.statusCode = statusCode;
        this.status = status;
        this.clientResponse = clientResponse;
        this._createLog = function () { return __awaiter(_this, void 0, void 0, function () {
            var formatted_date, method, url, status, duration, transactionsDetails, activityLogDetails, transactionsDetails, errorLogDetails;
            return __generator(this, function (_a) {
                formatted_date = moment(new Date()).format("YYYY-MM-DD kk:mm:ss.SSS");
                method = this.request.method;
                url = this.request.protocol + "://" + this.request.get("host") + this.request.originalUrl;
                status = this.statusCode;
                duration = Date.now() - +this.response.get("start");
                if (this.status.toString().startsWith("2")) {
                    transactionsDetails = {
                        body: this.request.body,
                        query: this.request.query,
                    };
                    activityLogDetails = {
                        activityDateTime: formatted_date,
                        deviceDetails: (0, getmac_1.default)(),
                        method: method,
                        endPoint: url,
                        status: +status,
                        statusCode: +this.status,
                        responseTime: "".concat(duration, "ms"),
                        transactionsDetails: JSON.stringify(transactionsDetails),
                    };
                    if (this.request.originalUrl !== "/ezzify/api/v1/logs/activityLogs" && this.request.originalUrl !== "/ezzify/api/v1/logs/errorActivityLogs") {
                        // await this._insertLogInDB(activityLogDetails);
                    }
                }
                if (!this.status.toString().startsWith("2")) {
                    transactionsDetails = {
                        body: this.request.body,
                        query: this.request.query,
                    };
                    errorLogDetails = {
                        activityDateTime: formatted_date,
                        deviceDetails: (0, getmac_1.default)(),
                        errorMethod: method,
                        endPoint: url,
                        errorCode: +status,
                        statusCode: +this.status,
                        responseTime: "".concat(duration, "ms"),
                        errorDetails: this.clientResponse.message,
                        transactionsDetails: JSON.stringify(transactionsDetails),
                    };
                    if (this.request.originalUrl !== "/ezzify/api/v1/logs/activityLogs" && this.request.originalUrl !== "/ezzify/api/v1/logs/errorActivityLogs") {
                        // await this._insertErrorLogInDB(errorLogDetails);
                    }
                }
                return [2 /*return*/];
            });
        }); };
        this._insertLogInDB = function (log) {
            return new Promise(function (resolve, reject) {
                axios_1.default
                    .post(ExternalApis.ACTIVITY_LOG, log)
                    .then(function (response) {
                    resolve(response);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        this._insertErrorLogInDB = function (log) {
            return new Promise(function (resolve, reject) {
                axios_1.default
                    .post(ExternalApis.ERROR_LOG, log)
                    .then(function (response) {
                    resolve(response);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        this._createLog();
    }
    return Logger;
}());
exports.Logger = Logger;
