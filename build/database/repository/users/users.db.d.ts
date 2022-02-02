import express from "express";
export declare class UsersDB {
    signupUser: (email: string, role: string, SENDGRID_API_KEY: any, SENDGRID_SENDER_EMAIL: any, res: express.Response) => Promise<unknown>;
    verifyOtpService: (data: any, res: express.Response) => Promise<unknown>;
}
