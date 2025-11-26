import express from "express";
import User from "../models/User.js";
import {UserList,CreateUser} from "../controllers/User/UserController.js";

const users = express.Router();

users.get("/",UserList);
users.post("/create",CreateUser);

export {users};