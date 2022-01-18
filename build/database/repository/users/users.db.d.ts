import express from "express";
export declare class UsersDB {
    signupUser: (email: string, res: express.Response) => Promise<unknown>;
    verifyOtpService: (data: any, res: express.Response) => Promise<unknown>;
}
