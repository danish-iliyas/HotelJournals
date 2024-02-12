import mongoose, { Schema } from "mongoose";

const ExperienceSchema = new Schema({
    jobTitle: {type:String,required:true},
    company: {type:String,required:true},
    department: {type:String,required:true},
    city: {type:String,required:true},
    job_start_date: {type:Date,required:true},
    job_end_date: {type:Date,required:false},
    is_current_job: {type:Boolean,required:false},
    jobExperience: {type:String,required:false},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
});


const UserProfileSchema = new Schema({
    introduction : {type:String,required:false},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
});

export const Experience = mongoose.model('Experience',ExperienceSchema);
export default mongoose.model('UserProfile',UserProfileSchema)