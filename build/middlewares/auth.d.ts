import express from "express";
declare const auth: (roles: any) => (req: any, res: express.Response, next: express.NextFunction) => Promise<express.Response<any, Record<string, any>> | undefined>;
export default auth;
