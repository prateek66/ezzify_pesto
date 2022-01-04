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
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var express_useragent_1 = __importDefault(require("express-useragent"));
var build_1 = require("@ezzify_pesto/common/build");
var config_1 = require("./config");
var ENVIRONMENT = build_1.config.ENVIRONMENT;
var App = /** @class */ (function () {
    function App(controllers, port) {
        var _this = this;
        this._connectToDatabase = function () {
            (0, build_1.connectDB)();
        };
        /**
         * A generic function to attach global level middlewares
         */
        this._initalizeMiddlewares = function () {
            // SETTING REQUEST START TIME
            _this.app.use(function (req, res, next) {
                res.set("start", "".concat(Date.now()));
                next();
            });
            _this.app.use(express_1.default.json());
            _this.app.use((0, cors_1.default)());
            _this.app.use((0, helmet_1.default)());
            _this.app.use(express_useragent_1.default.express());
            _this.app.use(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    if (ENVIRONMENT === "PROD" &&
                        req.url !== "".concat(config_1.PATH, "/security/saltEncryption") &&
                        req.url !== "".concat(config_1.PATH, "/security/encryption") &&
                        req.url !== "".concat(config_1.PATH, "/security/decryption") &&
                        req.url !== "".concat(config_1.PATH, "/logs/activityLogs") &&
                        req.url !== "".concat(config_1.PATH, "/logs/errorActivityLogs")) {
                        result = build_1.Security.decryption(req.body.data);
                        if (result === config_1.StatusCode.INVALID_ENCRYPTED_INPUT) {
                            build_1.ApiError.handle(new build_1.BadRequestError("Invalid Encrpted String"), res);
                            return [2 /*return*/];
                        }
                        else {
                            req.body = result;
                        }
                    }
                    next();
                    return [2 /*return*/];
                });
            }); });
        };
        /**
         * A generic function to attach all the controllers
         * @param controllers
         */
        this._initalizeControllers = function (controllers) {
            controllers.forEach(function (controller) {
                _this.app.use(config_1.PATH, controller.router);
            });
        };
        /**
         * A generic function to handle errors at global level
         */
        this._initalizeErrorHandling = function () {
            // catch 404 and forward to error handler
            _this.app.use(function (req, res, next) {
                return build_1.ApiError.handle(new build_1.NotFoundError(), res);
            });
            _this.app.use(function (err, req, res, next) {
                if (err instanceof build_1.ApiError) {
                    return build_1.ApiError.handle(err, res);
                }
                else {
                    if (ENVIRONMENT === "DEV") {
                        return res.status(500).send(err.message);
                    }
                    return build_1.ApiError.handle(new build_1.InternalError(), res);
                }
            });
        };
        this.app = (0, express_1.default)();
        this.port = port;
        this._connectToDatabase();
        this._initalizeMiddlewares();
        this._initalizeControllers(controllers);
        this._initalizeErrorHandling();
    }
    /**
     * Starting the server
     */
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the port ".concat(_this.port, " in ").concat(ENVIRONMENT, " env"));
        });
    };
    return App;
}());
exports.default = App;
