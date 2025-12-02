import mongoose, { Model } from "mongoose";

interface Product extends mongoose.Document{
    name:string,
    slug:string,
    status:boolean,
    productCategoryId:mongoose.Schema.Types.ObjectId
    isDeleted:Date,
    deletedAt:Date,
}

const ProductSchema= new mongoose.Schema<Product>(
    {
        name:{
            type:String,
            required:true
        },
        productCategoryId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "ProductCategory",
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
        status:{
            type:Boolean,
            required:true,
        },
        isDeleted:{
            type:Date,
            required:false
        },
        deletedAt:{
            type:Date,
            required:false
        }
    },
    {
        timestamps:true
    }
);

const Product:Model<Product>=mongoose.models.Product || mongoose.model<Product>("Product",ProductSchema);

export default Product;