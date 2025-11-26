import {returnResponse} from "../utils/utils.js";

async function Validation(req:any,res:any,next:any){
    const token:string=req.headers.authorization;
    if(!token){
        await returnResponse(res,400,"Authorization token missing");
    }
}