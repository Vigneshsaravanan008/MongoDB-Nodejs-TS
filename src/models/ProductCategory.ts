import mongoose, { Model } from "mongoose";

interface ProductCategory extends mongoose.Document{
    name:string,
    slug:string,
    status:boolean,
    isDeleted?:boolean,
    deletedAt?:Date,
}

const ProductCategorySchema = new mongoose.Schema<ProductCategory>(
    {
        name: {
            type:String,
            required:true
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
        timestamps: true,
    }
);

const ProductCategory:Model<ProductCategory>=mongoose.models.ProductCategory || mongoose.model<ProductCategory>("ProductCategory",ProductCategorySchema);

export default ProductCategory;
// mongoose.models.ProductCategory => means it will created already so that its models plural, incase not created create a name of ProductCategory with ProductCategorySchema and the interface of ProductCategory