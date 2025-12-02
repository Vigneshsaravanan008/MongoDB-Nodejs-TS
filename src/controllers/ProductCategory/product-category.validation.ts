import type { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ValidatorFunc } from "../../../utils/Validation.js";

export const TaskSchema = async (req:Request) => {
    const productCategorySchema=Joi.object({
        name: Joi.string().min(3).required(),
        slug: Joi.string().min(3).required(),
    });
    return await ValidatorFunc(req, productCategorySchema);
};