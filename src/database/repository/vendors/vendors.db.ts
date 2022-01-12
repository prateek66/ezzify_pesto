
import express from "express";
import { ApiError, BadRequestError } from "../../../core/apiError.core";


import User from "../users/users.model";

export class VendorDB {

    public updateVendor = (id:string, data: any, res: express.Response) => {
        return new Promise(async (resolve, reject) => {
            try {
                let Data = { ...data, profileImage: data.profileImage, adharCardImage: data.adharCardImage, panCardImage: data.panCardImage };
                                
                

                const user = await User.findByIdAndUpdate(id,Data,{new: true});
                resolve(user);
                
                     


                // });
                
                                

                
            } catch (err:any) {
                ApiError.handle(err, res);
            }
        })
    }
 
}
