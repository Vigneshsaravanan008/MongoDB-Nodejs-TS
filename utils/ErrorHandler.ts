import type { Request, Response, NextFunction } from "express";

export function errorHandler(error:Error,req:Request,res:Response,next:NextFunction){
  return res.status(500).json({status:500,messages:error.message});
} 

export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => { //asynchandler accept the async fn that fn needs req,res,next, async return promise
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};