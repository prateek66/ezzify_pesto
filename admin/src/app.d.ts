import "dotenv/config";
import express from "express";
import Controller from "./interfaces/controller.interface";
declare class App {
    app: express.Application;
    port: string | undefined;
    constructor(controllers: Controller[], port: string | undefined);
    private _connectToDatabase;
    /**
     * A generic function to attach global level middlewares
     */
    private _initalizeMiddlewares;
    /**
     * A generic function to attach all the controllers
     * @param controllers
     */
    private _initalizeControllers;
    /**
     * A generic function to handle errors at global level
     */
    private _initalizeErrorHandling;
    /**
     * Starting the server
     */
    listen(): void;
}
export default App;
