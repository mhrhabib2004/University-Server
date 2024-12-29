import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseavalidation } from './course.validation';
import { courseControllers } from './course.controller';
const router = express.Router();

router.post(
  '/create-course',
  validateRequest(courseavalidation.createCourseValidationSchema
  ),
  courseControllers.createcourse
);

router.get('/:id', courseControllers.getSingleCourse);

// router.patch(
//   '/:facultyId',
//   validateRequest(
//     AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
//   ),
//   AcademicFacultyControllers.updateAcademicFaculty,
// );

router.get('/', courseControllers.getAllCourses);
router.delete('/:id', courseControllers.deleteCourse);

export const courseRoutes = router;
