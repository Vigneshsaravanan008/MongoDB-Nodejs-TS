import { Router, type NextFunction,type Response,type Request } from "express";
import { asyncHandler } from "../../../utils/ErrorHandler.js";
import ProductCategory from "../../models/ProductCategory.js";
import {TaskSchema} from "./product-category.validation.js";

// const productCategoryRoute:Router=express.Router();

export const ProductCategoryList=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
   const getProductCategory=await ProductCategory.find().sort({_id:-1});
    res.status(200).json({
        status:200,
        productCategory:getProductCategory
    });
});

export const ProductCategoryCreate=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const validate = await TaskSchema(req);
    if(validate.status==200)
    {
        const {name,slug}=req.body;
        const status=1;
        const exist=await ProductCategory.findOne({slug:req.body.slug});
        if(!exist)
        {
            const productCategory=new ProductCategory({
                name,
                slug,
                status
            });
            productCategory.save();
            res.status(200).json({
                status:200,
                message:"ProductCategory Added Successfully"
            });
        }else{
            res.status(400).json({
                status:400,
                message:"ProductCategory Slug Already Exit"
            });
        }
    }else{
        res.status(400).json({
            status:400,
            message:validate.message
        });
    }
});