import { Schema } from "mongoose";
import { Tcourse } from "./course.interface";

const preRequistiteCourseSchema = 


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
  preRequistiteCourses
})