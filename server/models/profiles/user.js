import mongoose, { Schema } from "mongoose";

const UserEducationSchema = new Schema({
    school: {type:String,required:true},
    city: {type:String,required:true},
    degree: {type:String,required:true},
    start_date: {type:Date,required:true},
    end_date: {type:Date,required:true},
    description : {type:String,required:false},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
});

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

const SkillsSchema = new Schema({
    skills: {type:[String],required:true},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
});

export const Skills = mongoose.model('Skills',SkillsSchema);
export const UserEducation = mongoose.model('UserEducation',UserEducationSchema);
export const Experience = mongoose.model('Experience',ExperienceSchema);
export default mongoose.model('UserProfile',UserProfileSchema)