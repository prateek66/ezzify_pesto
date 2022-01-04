import express from "express";
export declare class Logger {
    private response;
    private request;
    private statusCode;
    private status;
    private clientResponse;
    constructor(response: express.Response, request: express.Request, statusCode: string, status: number, clientResponse: any);
    private _createLog;
    private generateLogFile;
    private _insertLogInDB;
    private _insertErrorLogInDB;
}
