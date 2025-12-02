import express,{ Router } from "express";
import { Login,Register } from "../controllers/Auth/login.controller.js";

const AuthUser=express.Router();

AuthUser.post("/login",Login);
AuthUser.post("/register",Register);

export {AuthUser};