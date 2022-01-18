import express from "express";
export declare class UsersDB {
    signupUser: (email: string, res: express.Response) => Promise<unknown>;
    verifyOtpService: (data: any, roles: string, res: express.Response) => Promise<unknown>;
}
