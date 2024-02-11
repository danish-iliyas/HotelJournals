import mongoose, { Schema } from "mongoose";

const jobsSchema  = new Schema({
    jobTitle: {type:String,required:true},  
    jobCategory :{type:String,required:true},  //Intern , full time , contract
    jobType : {type:String,required:true}, // Remote , inOffice , Hybrid
    jobLocation: {type:[String],required:true}, 
    mandatorySkills : {type:[String],required:true},
    optionalSkills : {type:[String],required:false},
    joiningDate : {type:Date,required:true},
    isImmediate : {type:Boolean,required:false},
    workExperienceMin : {type:Number,required:true},
    workExperienceMax : {type:Number,required:true},
    salarySpecification : {type:String,required:true},      // Euro , Dollars , INR // currency 
    salaryStart : {type:Number,required:true},  
    salaryEnd : {type:Number,required:true},
    no_of_openings : {type:Number,required:true},
    extraBenifits : {type:[String],required:false},
    jobDescription : {type:String,required:true},
    isExternal : {type:Boolean,required:true},
    jobLink : {type:String,required:false},
    created_by : {type:Schema.Types.ObjectId,ref:'User',required:true},
    created_at : {type:Date,default:Date.now},
})

export default mongoose.model('Jobs',jobsSchema)