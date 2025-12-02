import type { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ValidatorFunc } from "../../../utils/Validation.js";

export const authLoginSchema = async (req:Request) => {
    const schema = Joi.object({
        email: Joi.string().required().messages({
            'string.empty': `Email is a required field`,
            'any.required': `Email is a required field`
        }),
        password:Joi.string().min(4).required().messages({
            'any.required': `Password is a required field`,
            'string.empty': `Password is a required field`,
            'string.min': `Password is required minimum 4 characters`,
        })
    });
    return await ValidatorFunc(req,schema);
};

export const authRegisterSchema = async(req:Request)=>{
     const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': `Name is a required field`,
            'any.required': `Name is a required field`
        }),
        email: Joi.string().required().messages({
            'string.empty': `Email is a required field`,
            'any.required': `Email is a required field`
        }),
        password:Joi.string().min(4).alphanum().required().messages({
            'string.empty': `Email is a required field`,
            'min.required': `Password is required minimum 4 characters`,
            'string.alphanum': `Only letters and numbers are allowed`
        })
    });
    return await ValidatorFunc(req,schema);
}