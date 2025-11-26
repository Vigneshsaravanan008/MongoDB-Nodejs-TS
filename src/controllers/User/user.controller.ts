import express, { Router } from 'express';
import User from "../../models/User.js";

const users:Router = express.Router();

export const UserList =  users.get("/",async function(req:any,res:any,next:any){
    const Users=await User.find(); 
    return res.json({
        status:200,
        data:Users,
        message:"User list fetched successfully"
    });
});

export const CreateUser = users.post("/create",async  function(req:any,res:any,next:any){
    const {name,email,image}=req.body;
    const newUser=new User({
        name,
        email,
    });

    newUser.save();
    return res.json({
        status:200,
        message:"User Created Successfully",
        newUser:newUser
    });
});


