import express from 'express';
import { users } from './user.js';
import { productCategory } from './product-category.route.js';
import { product } from './product.route.js';
import { AuthUser } from './auth.js';
const router = express.Router();

router.use("/users",users);
router.use("/product-category",productCategory);
router.use("/product",product);
router.use("/",AuthUser);

router.get("/test-error", (req, res, next) => {
  next(new Error("Test error triggered"));
});

export {router};