"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesDB = exports.Services = void 0;
var service_model_1 = require("./service.model");
Object.defineProperty(exports, "Services", { enumerable: true, get: function () { return __importDefault(service_model_1).default; } });
var services_db_1 = require("./services.db");
Object.defineProperty(exports, "ServicesDB", { enumerable: true, get: function () { return services_db_1.ServicesDB; } });
