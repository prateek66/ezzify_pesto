"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsersDto = void 0;
var class_validator_1 = require("class-validator");
var UpdateUsersDto = /** @class */ (function () {
    function UpdateUsersDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "firstName", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "lastName", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "mobileNumber", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "profileImage", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "city", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "state", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "isActive", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "isEmaiVerified", void 0);
    __decorate([
        (0, class_validator_1.IsIn)(["user", "vendor"]),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], UpdateUsersDto.prototype, "roles", void 0);
    return UpdateUsersDto;
}());
exports.UpdateUsersDto = UpdateUsersDto;
