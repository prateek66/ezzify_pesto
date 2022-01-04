import express from "express";
import { ApiError, BadRequestError,SuccessResponse,BaseController,Controller } from "@ezzify/common/build";

export class SampleController extends BaseController implements Controller {
  public path = "/sample";
  public router = express.Router();

  constructor() {
    super();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}`, this._sample);
        this.router.get(`${this.path}`, this._getSample);

  };

  private _sample = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.body.name !== "Harshit") return ApiError.handle(new BadRequestError("Harshit not found"), res);
    // 1. Sending Response to Client
    const result = {
      name: "Harshit",
      age: 22,
    };

    new SuccessResponse("success", result).send(res);
  });

  private _getSample = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
     // 1. Sending Response to Client
    const result = {
      name: "Harshit",
      age: 22,
    };

    new SuccessResponse("success", result).send(res);
  });
}

