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
var mongoose_1 = __importStar(require("mongoose"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // should be remove and move to common package
var genrate_otp_1 = require("../../../helper/genrate_otp");
var config_1 = __importDefault(require("../../../config/config"));
var ENCRYPTION_KEY = config_1.default.ENCRYPTION_KEY;
var Service = new mongoose_1.default.Schema({
    serviceID: { type: mongoose_1.Schema.Types.ObjectId, ref: "Services" },
    basePrice: { type: Number, default: 0 }
});
var UserSchema = new mongoose_1.default.Schema({
    firstName: { type: String, default: " " },
    lastName: { type: String, default: " " },
    mobileNumber: { type: Number, default: 0 },
    address: { type: String, default: " " },
    profileImage: { type: String, default: "https://ezzifypesto.s3.ap-south-1.amazonaws.com/user.png" },
    adharCardImage: { type: String, default: " " },
    panCardImage: { type: String, default: " " },
    email: { type: String, default: "" },
    otpVerify: { type: String, trim: true, default: " " },
    isEmaiVerified: { type: Boolean, default: false },
    city: { type: String, default: " " },
    state: { type: String, default: " " },
    roles: { type: String, enum: ["admin", "user", "vendor"], default: "user" },
    amount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    services: [Service],
    availabaleDate: { type: String, default: " " },
    availableTime: { type: String, default: " " },
    tokens: [
        {
            token: {
                type: String,
            },
            device_token: {
                type: String,
            },
        },
    ],
}, {
    timestamps: true,
});
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    delete userObject.tokens;
    return userObject;
};
/**
 * To generate auth tokens for users
 */
UserSchema.methods.generateAuthToken = function () {
    return __awaiter(this, void 0, void 0, function () {
        var user, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = this;
                    token = jsonwebtoken_1.default.sign({ _id: user._id.toString() }, ENCRYPTION_KEY);
                    // @ts-ignore
                    user.tokens = user.tokens.concat({ token: token });
                    return [4 /*yield*/, user.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
};
/**
 * [x] Create new user if not existing and send otp to user's email
 * [x] Send otp to existing user's email
 *
 * @param email email of the user
 * @returns user object with otpVerify property
 */
UserSchema.statics.findByCredentials = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var user, otp, newUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User.findOne({ email: email })];
            case 1:
                user = _a.sent();
                otp = (0, genrate_otp_1.generateOtp)();
                if (!!user) return [3 /*break*/, 3];
                newUser = new User({ email: email, otpVerify: otp });
                // await sendMail(otp, email);
                return [4 /*yield*/, newUser.save()];
            case 2:
                // await sendMail(otp, email);
                _a.sent();
                return [2 /*return*/, newUser];
            case 3:
                user.otpVerify = otp;
                // await sendMail(otp, email);
                return [4 /*yield*/, user.save()];
            case 4:
                // await sendMail(otp, email);
                _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
/**
 * [x] find user with given otp to verify otp
 *
 * @param id object id of user object
 * @param otp otp sent to that user
 * @returns user object with otpVerify as empty string
 */
UserSchema.statics.userOtpVerify = function (id, otp) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User.findOne({ _id: id, otpVerify: otp })];
            case 1:
                user = _a.sent();
                if (!user)
                    throw new Error("Invalid OTP");
                user.otpVerify = "";
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
var User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
