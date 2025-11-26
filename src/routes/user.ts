import express from "express";
import {UserList,CreateUser} from "../controllers/User/user.controller.js";

const users = express.Router();

users.get("/",UserList);
users.post("/create",CreateUser);

export {users};