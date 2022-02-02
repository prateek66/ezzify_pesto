import express from "express";
export declare class UsersDB {
    signupUser: (email: string, role: string, SENDGRID_API_KEY: string, SENDGRID_SENDER_EMAIL: string, res: express.Response) => Promise<unknown>;
    verifyOtpService: (data: any, res: express.Response) => Promise<unknown>;
}
