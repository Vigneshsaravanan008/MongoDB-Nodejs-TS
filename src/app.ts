import {connect} from "../config/database.js";
import cors from "cors";
import express from "express";
import {router} from "../src/routes/index.js";
import path from "path";
import formData from "express-form-data";

connect();
const app =express();

app.use(cors({
    origin: '*'
})); 

app.use(express.json()); //Parse JSON body
app.use(express.urlencoded({extended:false})); // Parse form URL-encoded body name=John&age=30
app.use(express.static('public')); // public/logo.png → http://localhost:5000/logo.png
// app.use(express.static(path.join(__dirname,'..','public')));

app.use(formData.parse());  // parse form data like  req.body = { name: "Vignesh", age: "25" } and req.files = { file1: {...}}
app.use(formData.format()); //converts the file objects to standard format like this { active: "false", age: "28", premium: "true" }
app.use(formData.stream()); // allows you to upload it somewhere (AWS S3, cloud storage, etc.)
app.use(formData.union()); // make the req.body and req.files merge to one object req.body = { name: "Vignesh", age: "25",file1: {...} }

app.get("/app",function(req:any,res:any,next:any){
    return res.json({
        status:200,
        message:"Hello World"
    });
});

app.use("/api",router);

export {app};