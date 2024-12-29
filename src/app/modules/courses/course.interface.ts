import { Types } from "mongoose"

export type TpreRequistiteCourses = {
course:Types.ObjectId,
isDeletad:boolean
}


export type Tcourse = {
    title:string,
    prefix:string,
    code:number,
    credits:number,
    preRequistiteCourses:[]
}