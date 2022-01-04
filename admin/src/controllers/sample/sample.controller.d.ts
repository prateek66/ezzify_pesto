import Controller from "../../interfaces/controller.interface";
import { BaseController } from "../base.controller";
export declare class SampleController extends BaseController implements Controller {
    path: string;
    router: import("express-serve-static-core").Router;
    constructor();
    private _initializeRoutes;
    private _sample;
}
