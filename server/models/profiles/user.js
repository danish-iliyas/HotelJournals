import mongoose, { Schema } from "mongoose";

const UserProfileSchema = new Schema({
    introduction : {type:String,required:false},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
})

export default mongoose.model('UserProfile',UserProfileSchema)