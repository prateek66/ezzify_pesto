"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ServicesDB = void 0;
var apiError_core_1 = require("../../../core/apiError.core");
var service_model_1 = __importDefault(require("./service.model"));
var ServicesDB = /** @class */ (function () {
    function ServicesDB() {
        var _this = this;
        this.createServices = function (data, res) {
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var newService, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, service_model_1.default.create(__assign({}, data))];
                        case 1:
                            newService = _a.sent();
                            if (!newService) {
                                apiError_core_1.ApiError.handle(new apiError_core_1.BadRequestError("Service data provided not correct"), res);
                                return [2 /*return*/];
                            }
                            resolve(newService);
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            apiError_core_1.ApiError.handle(err_1, res);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        this.viewServices = function (req, res) {
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var viewServices, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, service_model_1.default.find({})];
                        case 1:
                            viewServices = _a.sent();
                            if (!viewServices) {
                                apiError_core_1.ApiError.handle(new apiError_core_1.BadRequestError("Failed to fetch services from database"), res);
                                return [2 /*return*/];
                            }
                            resolve(viewServices);
                            return [3 /*break*/, 3];
                        case 2:
                            err_2 = _a.sent();
                            apiError_core_1.ApiError.handle(err_2, res);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        this.updateServices = function (data, id, res) {
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var updateService, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, service_model_1.default.findByIdAndUpdate(id, data, { new: true })];
                        case 1:
                            updateService = _a.sent();
                            if (!updateService) {
                                apiError_core_1.ApiError.handle(new apiError_core_1.BadRequestError("Cannot update service , something went wrong!"), res);
                                return [2 /*return*/];
                            }
                            resolve(updateService);
                            return [3 /*break*/, 3];
                        case 2:
                            err_3 = _a.sent();
                            apiError_core_1.ApiError.handle(err_3, res);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        this.deleteService = function (id, res) {
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var deleteService, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, service_model_1.default.findByIdAndDelete(id)];
                        case 1:
                            deleteService = _a.sent();
                            if (!deleteService) {
                                apiError_core_1.ApiError.handle(new apiError_core_1.BadRequestError("Cannot delete the service, something went wrong"), res);
                                return [2 /*return*/];
                            }
                            resolve(deleteService);
                            return [3 /*break*/, 3];
                        case 2:
                            err_4 = _a.sent();
                            apiError_core_1.ApiError.handle(err_4, res);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
    }
    return ServicesDB;
}());
exports.ServicesDB = ServicesDB;
