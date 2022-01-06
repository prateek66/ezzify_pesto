
import express from "express";
import { ApiError, BadRequestError } from "../../../core/apiError.core";


import Services from "./service.model";

export class ServicesDB {

    public createServices = (data: any, res: express.Response) => {
        return new Promise(async (resolve, reject) => {
            try {
                const newService = await Services.create({ ...data });

                if (!newService) {
                    ApiError.handle(new BadRequestError("Service data provided not correct"), res);
                    return;
                }

                resolve(newService);
            } catch (err: any) {
                ApiError.handle(err, res);
            }
        })
    };

    public viewServices = (req: express.Request, res: express.Response) => {
        return new Promise(async (resolve, reject) => {
            try {
                
                const viewServices = await Services.find({});

                if (!viewServices) {
                    ApiError.handle(new BadRequestError("Failed to fetch services from database"), res);
                    return;
                }

                resolve(viewServices);
            } catch (err: any) {
                ApiError.handle(err, res);
            }
        })
    };

    public updateServices = (data: any, id: string, res: express.Response) => {
        return new Promise(async (resolve, reject) => {
            try {

                const updateService = await Services.findByIdAndUpdate(id, data, { new: true });
                
                if (!updateService) {
                    ApiError.handle(new BadRequestError("Cannot update service , something went wrong!"),res);
                    return;
                }

                resolve(updateService);
            } catch (err: any) {
                ApiError.handle(err, res);
            }
        })
    };


    public deleteService = (id: string, res: express.Response) => {
        return new Promise(async (resolve, reject) => {
            try {
                    
                const deleteService = await Services.findByIdAndDelete(id);

                if (!deleteService) {
                    ApiError.handle(new BadRequestError("Cannot delete the service, something went wrong"), res);
                    return;
                }
                resolve(deleteService);
            } catch (err: any) {
                ApiError.handle(err, res);
            }
        })
    };
  
}
