
import express from "express";
import { ApiError, BadRequestError } from "../../../core/apiError.core";


import User from "../users/users.model";

export class VendorDB {

    public updateVendor = (id:string, data: any, res: express.Response) => {
        return new Promise(async (resolve, reject) => {
            try {
                let Data = { ...data, profileImage: data.profileImage, adharCardImage: data.adharCardImage, panCardImage: data.panCardImage };
                //console.log(data);
                
                const updatedData = await data.services.forEach(async (service: any) => {

                    const updateVendor = await User.findByIdAndUpdate(
                        id,
                        {
                            Data,
                            $push: { services: { serviceID: service.serviceID, basePrice: service.basePrice } },
                        
                        },
                
                        { new: true }
                    );

                });
                
                console.log(updatedData);
                
                
                

                if (!updatedData) {
                    ApiError.handle(new BadRequestError("failed to update the vendor details"), res);
                    return;
                }

                resolve(updatedData);
            } catch (err:any) {
                ApiError.handle(err, res);
            }
        })
    }
 
}
