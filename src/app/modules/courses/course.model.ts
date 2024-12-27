import { Schema } from "mongoose";
import { Tcourse, TpreRequistiteCourses } from "./course.interface";

const preRequistiteCourseSchema = new Schema<TpreRequistiteCourses>({
    courese:{
        type:Schema.Types.ObjectId,
    
    },
    isDeletad:{
        type:Boolean,
        default:false
    }
})


const courseSchema = new Schema<Tcourse>({
    title:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    prefix:{
        type:String,
        trim:true,
        required:true
    },
    code:{
        type:Number,
        trim:true,
        required:true
    },
    credits:{
        type:Number,
        trim:true,
        required:true
    },
  preRequistiteCourses: [preRequistiteCourseSchema]
})