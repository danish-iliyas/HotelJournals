import mongoose, { Schema } from "mongoose";

const recruiterProfileSchema = new Schema({
    // name: {type:String,required:true},
    companyName : {type:String,required:true},
    Designation : {type:String,required:true},
    numberOfEmployees : {type:String,required:false},     // 1-10 , 11-50 , 51-200 , 201-500 , 501-1000 , 1000+
    HeadQuarters : {type:String,required:true},
    industryType : {type:String,required:true},
    companyType : {type:String,required:true},          //  Private , Public , Government , NGO // More options refer video
    companyWebsite : {type:String,required:false},
    CompanyDescription : {type:String,required:true},
    CompanysTagline : {type:String,required:false},
    twitter : {type:String,required:false},
    linkedIn : {type:String,required:false},
    company_logo : {type:String,required:true},
    created_by : {type:Schema.Types.ObjectId,ref:'User',required:true},
    created_at : {type:Timestamp,default:Date.now},    
})

export default mongoose.model('RecruiterProfile',recruiterProfileSchema);