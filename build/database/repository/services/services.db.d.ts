import express from "express";
export declare class ServicesDB {
    createServices: (data: any, res: express.Response) => Promise<unknown>;
    viewServices: (req: express.Request, res: express.Response) => Promise<unknown>;
    updateServices: (data: any, id: string, res: express.Response) => Promise<unknown>;
    deleteService: (id: string, res: express.Response) => Promise<unknown>;
}
