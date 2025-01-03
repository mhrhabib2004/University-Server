import { model, Schema } from "mongoose";
import { Tcourse, TpreRequistiteCourses } from "./course.interface";

const preRequistiteCourseSchema = new Schema<TpreRequistiteCourses>({
    course:{
        type:Schema.Types.ObjectId,
        ref: 'Course'
    
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

export const course = model<Tcourse>('Course',courseSchema)