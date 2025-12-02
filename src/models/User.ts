import mongoose,{Model} from "mongoose";

interface User extends mongoose.Document {
  name: string;
  email:string,
  password:string,
  image?:string,
  isDeleted?: boolean;
  deletedAt?: Date | null;
}

const UserSchema = new mongoose.Schema<User>(
{
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    name:{
      type: String,
      required: false,
      default:null
    },
    email:{
      type: String,
      required: false,
      default:null
    },
    password:{
      type:String,
      required:true,
    },
    image: {
      type: String,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<User>=mongoose.models.User || mongoose.model <User>("User", UserSchema);

export default User;