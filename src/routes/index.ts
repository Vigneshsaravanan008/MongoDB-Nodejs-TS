import express from 'express';
import { users } from './user.js';
const router = express.Router();

router.use("/users",users);

export {router};