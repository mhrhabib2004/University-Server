import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./course.services";

const createcourse = catchAsync(async (req, res) => {
    const result = await CourseServices.createCourseIntoDB(
      req.body,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course is created succesfully',
      data: result,
    });
  });
  
  const getAllCourses = catchAsync(async (req, res) => {
    const result = await CourseServices.getAllCourseFromDB();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course are retrieved successfully',
      data: result,
    });
  });
  
  const getSingleCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result =
      await CourseServices.getSingleCourseFromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course is retrieved succesfully',
      data: result,
    });
  });
  
//   const updateAcademicFaculty = catchAsync(async (req, res) => {
//     const { facultyId } = req.params;
//     const result = await CourseServices.(
//       facultyId,
//       req.body,
//     );
  
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Academic faculty is updated succesfully',
//       data: result,
//     });
//   });

const deleteCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result =
      await CourseServices.deleteCoursefromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course is delete succesfully',
      data: result,
    });
  });
  
  export const courseControllers = {
   createcourse,
    getAllCourses,
    getSingleCourse,
    deleteCourse
    
  };
  