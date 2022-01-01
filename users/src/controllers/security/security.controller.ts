import express from "express";
import { SuccessResponse } from "../../core/apiResponse.core";
import { Security } from "../../core/security.core";
import { DecryptionDTO } from "../../database/repository/security/decryption/decryption.dto";
import { DecryptionModel } from "../../database/repository/security/decryption/decryption.model";

import Controller from "../../interfaces/controller.interface";
import sanitizeBody from "../../middlewares/sanitize.middleware";
import validationMiddleware from "../../middlewares/validation.middleware";
import { BaseController } from "../base.controller";

export class SecurityController extends BaseController implements Controller {
  public path = "/security";
  public router = express.Router();

  constructor() {
    super();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}/encryption`, this._encryption);
    this.router.post(`${this.path}/decryption`, validationMiddleware(DecryptionDTO), this._decryption);
  };

  private _encryption = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // 1. Encrypt Request Body
    const encryptedData = Security.encryption(req.body);

    // 2. Sending Encrypted Data to Client
    new SuccessResponse("data encrypted", encryptedData).send(res);
  });

  private _decryption = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // 1. Sanitizing Request Body
    req.body = sanitizeBody(DecryptionModel, req.body);

    // 2. Decrypt Request Body
    const { data } = req.body;
    const decryptedData = Security.decryption(data);

    // 3. Sending Encrypted Data to Client
    new SuccessResponse("data decrypted", decryptedData).send(res);
  });
}
