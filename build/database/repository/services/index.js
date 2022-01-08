"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteServiceProps = exports.DeleteServiceDto = exports.ServiceProps = exports.ServiceDto = exports.ServicesDB = exports.Services = void 0;
var service_model_1 = require("./service.model");
Object.defineProperty(exports, "Services", { enumerable: true, get: function () { return __importDefault(service_model_1).default; } });
var services_db_1 = require("./services.db");
Object.defineProperty(exports, "ServicesDB", { enumerable: true, get: function () { return services_db_1.ServicesDB; } });
var service_dto_1 = require("./createServices/service.dto");
Object.defineProperty(exports, "ServiceDto", { enumerable: true, get: function () { return service_dto_1.ServiceDto; } });
var services_props_1 = require("./createServices/services.props");
Object.defineProperty(exports, "ServiceProps", { enumerable: true, get: function () { return services_props_1.ServiceProps; } });
var deleteServic_dto_1 = require("./deleteService/deleteServic.dto");
Object.defineProperty(exports, "DeleteServiceDto", { enumerable: true, get: function () { return deleteServic_dto_1.DeleteServiceDto; } });
var deleteService_props_1 = require("./deleteService/deleteService.props");
Object.defineProperty(exports, "DeleteServiceProps", { enumerable: true, get: function () { return deleteService_props_1.DeleteServiceProps; } });