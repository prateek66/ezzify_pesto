"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var app_1 = __importDefault(require("./app"));
var security_controller_1 = require("./controllers/security/security.controller");
var PORT = '4003';
// ATTACHING ALL THE CONTROLLERS
var app = new app_1.default([new security_controller_1.SecurityController()], PORT);
// STARTING THE SERVER
app.listen();
