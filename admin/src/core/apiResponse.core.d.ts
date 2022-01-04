import "dotenv/config";
import { Response } from "express";
import { ResponseStatus, StatusCode } from "../config";
declare abstract class ApiResponse {
    protected statusCode: StatusCode;
    protected status: ResponseStatus;
    protected message: string;
    constructor(statusCode: StatusCode, status: ResponseStatus, message: string);
    protected prepare<T extends ApiResponse>(res: Response, response: T): Response;
    send(res: Response): Response;
    private static sanitize;
}
export declare class AuthFailureResponse extends ApiResponse {
    constructor(message?: string);
}
export declare class NotFoundResponse extends ApiResponse {
    private url;
    constructor(message?: string);
    send(res: Response): Response;
}
export declare class ForbiddenResponse extends ApiResponse {
    constructor(message?: string);
}
export declare class BadRequestResponse extends ApiResponse {
    constructor(message?: string);
}
export declare class InternalErrorResponse extends ApiResponse {
    constructor(message?: string);
}
export declare class SuccessMsgResponse extends ApiResponse {
    constructor(message: string);
}
export declare class FailureMsgResponse extends ApiResponse {
    constructor(message: string);
}
export declare class SuccessResponse<T> extends ApiResponse {
    private data;
    constructor(message: string, data: T);
    send(res: Response): Response;
}
export declare class AccessTokenErrorResponse extends ApiResponse {
    private instruction;
    constructor(message?: string);
    send(res: Response): Response;
}
export declare class TokenRefreshResponse extends ApiResponse {
    private accessToken;
    private refreshToken;
    constructor(message: string, accessToken: string, refreshToken: string);
    send(res: Response): Response;
}
export {};
