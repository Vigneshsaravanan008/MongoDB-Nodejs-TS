import { type NextFunction,type Response,type Request } from "express";
import { asyncHandler } from "../../../utils/ErrorHandler.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import { authLoginSchema,authRegisterSchema } from "./login.validate.js";
import { tokenGenerator } from "../../../utils/utils.js";
const saltRounds = 10;

export const Login=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const { email, password } = req.body;
    const validation:{status?:number,message?:string[]} | boolean =await authLoginSchema(req);
    if(validation.status==200)
    {
        const getUser:any|null=await User.findOne({email}).lean();
        if(!getUser)
        {
            return res.send({
                status:400,
                message:"User Not Found!"
            });
        }
        if(await bcrypt.compare(password,getUser.password)){
            const token:{accessToken:string,refreshToken:string} = await tokenGenerator(getUser)
    
            return res.send({
                status:200,
                user:getUser,
                accessToken:token.accessToken,
                refreshToken:token.refreshToken
            });
        }else{
            return res.send({
                status:400,
                message:"Password In Correct!"
            });
        }
    }else{
        res.send({
            status:400,
            messages:validation.message
        });
    }
    // const getProduct=await User.find().sort({_id:-1}).populate("productCategoryId","_id name slug");
    // res.status(200).json({
    //     status:200,
    //     product:getProduct
    // });
});

export const Register=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    let { name,email, password } = req.body;
    const validation:{status?:number,message?:string[]} | boolean =await authRegisterSchema(req);
    if(validation.status==200)
    {
        const getUser:any|null=await User.findOne({email});

        if(getUser)
        {
            return res.send({
                status:400,
                message:"User already register!"
            });
        }
        password = await bcrypt.hash(password, saltRounds);
        const newUser=new User({
            name,
            email,
            password
        });

        newUser.save();

       const token:{accessToken:string,refreshToken:string} = await tokenGenerator(newUser)

        return res.send({
            status:200,
            user:newUser,
            accessToken:token.accessToken,
            refreshToken:token.refreshToken
        });
    }else{
        return res.send({
            status:400,
            messages:validation.message
        });
    }
});