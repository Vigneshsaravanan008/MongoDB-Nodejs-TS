import express from 'express';
import { users } from './user.js';
import { productCategory } from './product-category.route.js';
const router = express.Router();

router.use("/users",users);
router.use("/product-category",productCategory);

export {router};