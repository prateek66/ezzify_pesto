import express from "express";
import { SuccessResponse } from "../../core/apiResponse.core";

import Controller from "../../interfaces/controller.interface";
import { BaseController } from "../base.controller";

export class SampleController extends BaseController implements Controller {
  public path = "/sample";
  public router = express.Router();

  constructor() {
    super();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}`, this._sample);
  };

  private _sample = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // 1. Sending Response to Client
    const result = {
      name: "Harshit",
      age: 22,
    };

    new SuccessResponse("success", result).send(res);
  });
}
