import { Tcourse } from './course.interface';
import { course } from './course.model';

const createCourseIntoDB = async (paylode:Tcourse) =>{
    const result = await course.create(paylode);
    return result
}
const getAllCourseFromDB = async () =>{
    const result = await course.find();
    return result
}
const getSingleCourseFromDB = async (id : string) =>{
    const result = await course.findById(id);
    return result
}
const deleteCoursefromDB = async (id : string) =>{
    const result = await course.findByIdAndUpdate(
        id,
        {isDeleted :true},
        {
            new:true
        }
    );
    return result
}

export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB,
    deleteCoursefromDB
}

