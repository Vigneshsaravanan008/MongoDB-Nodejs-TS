import express,{ Router } from "express";
import { ProductCategoryList,ProductCategoryCreate } from "../controllers/ProductCategory/product-category.controller.js";

const productCategory:Router=express.Router();

productCategory.get("/",ProductCategoryList);
productCategory.post("/store",ProductCategoryCreate);

export {productCategory};