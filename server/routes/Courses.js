import express from "express"

import {
    AllCourseData,
    CoursesAdmin,
    DeleteCourse, 
    SingleCourseData,
    editCourse
} from "../controllers/courses.js"

const router = express.Router();

// Add a new Course
router.post('/newCourse', CoursesAdmin)
// Get all Courses
router.get('/allCourses', AllCourseData)
// Get a single Course
router.get('/singleCourse/:id', SingleCourseData)
// Delete a single Course
router.delete('/singleCourse/:id', DeleteCourse)
// Edit a single Course
router.patch('/singleCourse/:id', editCourse)

export default router;