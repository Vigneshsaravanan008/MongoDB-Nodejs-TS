import User from "../src/models/User.js";

async function tokenGenerator(userId:string){
    const user=await User.findById(userId);
    if(!user){
        throw new Error("User not found");
    }
}

async function returnResponse(res:any,status:number,message:string,data?:any){
    return res.json({
        status:status,
        message:message
    });
}

export {tokenGenerator,returnResponse};