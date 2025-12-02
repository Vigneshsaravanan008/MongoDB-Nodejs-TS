import type {  Request } from "express";

export const ValidatorFunc = async (req:Request, schema:any) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };

    const { error, value } = await schema.validate(req.body, options);
    var messageDetails = [];
    if (error) {
        if((error.details).length>0){
            for (const errorData of error.details) {
                messageDetails.push(errorData.message)
            }
        }
        return {
            status:500,
            message:messageDetails
        };
    } else {
        return {
            status:200
        };
    }
};
