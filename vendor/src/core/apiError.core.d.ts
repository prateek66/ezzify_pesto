import "dotenv/config";
import { Response } from "express";
import { ErrorType } from "../config";
export declare abstract class ApiError extends Error {
    type: ErrorType;
    message: string;
    constructor(type: ErrorType, message?: string);
    static handle(err: ApiError, res: Response): Response;
}
export declare class AuthFailureError extends ApiError {
    constructor(message?: string);
}
export declare class InternalError extends ApiError {
    constructor(message?: string);
}
export declare class BadRequestError extends ApiError {
    constructor(message?: string | any);
}
export declare class NotFoundError extends ApiError {
    constructor(message?: string);
}
export declare class ForbiddenError extends ApiError {
    constructor(message?: string);
}
export declare class NoEntryError extends ApiError {
    constructor(message?: string);
}
export declare class BadTokenError extends ApiError {
    constructor(message?: string);
}
export declare class TokenExpiredError extends ApiError {
    constructor(message?: string);
}
export declare class NoDataError extends ApiError {
    constructor(message?: string);
}
export declare class AccessTokenError extends ApiError {
    constructor(message?: string);
}
export declare class DBValidationError extends ApiError {
    constructor(message?: string);
}
