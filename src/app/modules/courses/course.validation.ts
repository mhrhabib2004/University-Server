import { z } from "zod";

const preRequistiteCourseSchema = z.object({
    course:z.string(),
    isDeletad:z.boolean().optional()
})
const createCourseValidationSchema = z.object({
     body:z.object({
        title:z.string(),
        prefix:z.string(),
        code:z.number(),
        credits:z.number(),
        preRequistiteCourses:z.array(preRequistiteCourseSchema).optional()
     })
}) 

export const courseavalidation = {
    createCourseValidationSchema
}