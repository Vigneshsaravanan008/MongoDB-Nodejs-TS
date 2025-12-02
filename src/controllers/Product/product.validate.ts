import type { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ValidatorFunc } from "../../../utils/Validation.js";

export const TaskSchema = async (req:Request) => {
    const productSchema=Joi.object({
        name: Joi.string().min(3).required(),
        slug: Joi.string().min(3).required(),
        productCategoryId:Joi.string().required()
    });
    return await ValidatorFunc(req, productSchema);
};
