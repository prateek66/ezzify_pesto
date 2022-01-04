import express from "express";
import mongoose from "mongoose";
export declare abstract class BaseController {
    /**
     * wrapper function to handle catch condition on all async functions
     * @param fn any
     * @returns fn
     */
    protected catchAsyn: (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    /**
     * A generic function to create a document using model
     * @param postData data to be saved in the collection
     * @param Model schema of the object
     * @param res response
     * @returns newly created document
     */
    protected createDocument: (postData: any, Model: mongoose.Model<mongoose.Document<any, any, any>, {}, {}, {}>, res: express.Response) => Promise<(mongoose.Document<any, any, any> & {
        _id: any;
    }) | undefined>;
}
