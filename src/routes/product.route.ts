import express,{ Router } from "express";
import { ProductList,ProductCreate } from "../controllers/Product/product.controller.js";

const product:Router=express.Router();

product.get("/",ProductList);
product.post("/store",ProductCreate);

export {product};