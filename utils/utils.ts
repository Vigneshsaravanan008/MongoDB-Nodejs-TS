import jwt from "jsonwebtoken";
import User from "../src/models/User.js";
import dotenv from 'dotenv';
const saltRounds = 10;

dotenv.config();
const {JWT_SECRET,JWT_REAUTH_SECRET} =process.env;

async function tokenGenerator(getUser:any){

    const accessToken = jwt.sign(
        {
            _id:getUser._id,
            name:getUser.name,
            email:getUser.email
        },
        JWT_SECRET as string,
        {
        expiresIn: `1d`,
        }
    )

    const refreshToken=jwt.sign(
        {
            _id:getUser._id,
            name:getUser.name,
            email:getUser.email
        },
        JWT_REAUTH_SECRET as string,
        {
        expiresIn: `1d`,
        }
    );

    return {
        accessToken:accessToken,
        refreshToken:refreshToken
    }
}

async function returnResponse(res:any,status:number,message:string,data?:any){
    return res.json({
        status:status,
        message:message
    });
}

export {tokenGenerator,returnResponse};