import { type NextFunction,type Response,type Request } from "express";
import { asyncHandler } from "../../../utils/ErrorHandler.js";
import Product from "../../models/Product.js";
import { TaskSchema } from "./product.validate.js";

export const ProductList=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
   const getProduct=await Product.find().sort({_id:-1}).populate("productCategoryId","_id name slug");
    res.status(200).json({
        status:200,
        product:getProduct
    });
});

export const ProductCreate=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const validate = await TaskSchema(req);
    if(validate.status==200)
    {
        const {name,slug,productCategoryId}=req.body;
        const status=1;
        const exist=await Product.findOne({slug:req.body.slug});
        if(!exist)
        {
            const newProduct=new Product({
                name,
                slug,
                status,
                productCategoryId
            });
            newProduct.save();
            res.status(200).json({
                status:200,
                message:"Product Added Successfully"
            });
        }else{
            res.status(400).json({
                status:400,
                message:"Product Slug Already Exit"
            });
        }
    }else{
        res.status(400).json({
            status:400,
            message:validate.message
        });
    }
});
