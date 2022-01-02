import express from "express";
import { SuccessResponse } from "../../core/apiResponse.core";

import ActivityLogsModel from "../../database/repository/appLogs/acitivityLogs/acitivityLogs.model";
import { ActivityLogsDTO } from "../../database/repository/appLogs/acitivityLogs/activityLogs.dto";
import { ActivityLogsInterface } from "../../interfaces/appLogs/activityLogs.interface";

import { ErrorActivityLogsDTO } from "../../database/repository/appLogs/errorActivityLogs/errorActivityLogs.dto";

import Controller from "../../interfaces/controller.interface";
import validationMiddleware from "../../middlewares/validation.middleware";
import { BaseController } from "../base.controller";
import { ErrorActivityLogsInterface } from "../../interfaces/appLogs/errorActivityLogs.interface";
import ErrorActivityLogsModel from "../../database/repository/appLogs/errorActivityLogs/errorActivityLogs.model";

export class AppLogsController extends BaseController implements Controller {
  public path = "/logs";
  public router = express.Router();

  constructor() {
    super();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}/activityLogs`, validationMiddleware(ActivityLogsDTO), this._activityLogs);
    this.router.post(`${this.path}/errorActivityLogs`, validationMiddleware(ErrorActivityLogsDTO), this._errorActivityLogs);
  };

  private _activityLogs = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // 1. Sanitizing Body
    const postData: ActivityLogsInterface = req.body;

    // 2. Creating Document
    const result = await this.createDocument(postData, ActivityLogsModel, res);

    // 3. Sending Response to Client
    new SuccessResponse("success", result).send(res);
  });

  private _errorActivityLogs = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // 1. Sanitizing Body
    const postData: ErrorActivityLogsInterface = req.body;

    // 2. Creating Document
    const result = await this.createDocument(postData, ErrorActivityLogsModel, res);

    // 3. Sending Response to Client
    new SuccessResponse("success", result).send(res);
  });
}
