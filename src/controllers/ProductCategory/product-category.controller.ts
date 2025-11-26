import { Router, type NextFunction,type Response,type Request } from "express";
import { asyncHandler } from "../../../utils/ErrorHandler.js";
import ProductCategory from "../../models/ProductCategory.js";

// const productCategoryRoute:Router=express.Router();

export const ProductCategoryList=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
   const getProductCategory=await ProductCategory.find().sort({_id:-1});
    // const {name,slug}=req.body;
    res.status(200).json({
        status:200,
        productCategory:getProductCategory
    });
});