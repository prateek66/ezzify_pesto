import { BaseController, Controller } from "@ezzify_pesto/common/build";
export declare class SecurityController extends BaseController implements Controller {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    private _initializeRoutes;
    private _encryption;
    private _decryption;
}
