import express,{ Router } from "express";
import { ProductCategoryList } from "../controllers/ProductCategory/product-category.controller.js";

const productCategory:Router=express.Router();

productCategory.get("/",ProductCategoryList);

export {productCategory};