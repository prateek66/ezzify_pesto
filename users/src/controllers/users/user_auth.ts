import express from "express";
import { BaseController, Controller, validationMiddleware, sanitizeBody, Security, SuccessResponse } from "@ezzify/common/build";

import { signupUserService,verifyOtpService } from "../../services/user_services";

export class UserController extends BaseController implements Controller {
  public path = "/user";
  public router = express.Router();

  constructor() {
    super();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}/signup`, this.signupUser);
      this.router.post(`${this.path}/verify`, this.verifyUser);
  };

    private signupUser = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const signup = await signupUserService(req.body.email);
        new SuccessResponse("senddd", signup).send(res);
    });

      private verifyUser = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const verify = await verifyOtpService(req.body.id,req.body.otp);
         new SuccessResponse("senddd", verify).send(res);
  })

//   private _decryption = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     // 1. Sanitizing Request Body
//     req.body = sanitizeBody(DecryptionModel, req.body);

//     // 2. Decrypt Request Body
//     const { data } = req.body;
//     const decryptedData = Security.decryption(data);

//     // 3. Sending Encrypted Data to Client
//     new SuccessResponse("data decrypted", decryptedData).send(res);
//   });
}
