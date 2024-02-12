import { combineReducers } from "redux";

import authReducer from "./auth";
import currentuserReducer from "./currentUser";
import usersReducer from "./users";
import TipsReducer from "./tipsReducer";
import getTipsReducer from "./getTips";
import singleTipReducer from "./getSingleTips";
import courseReducer from '../reducers/coursesReducers/courseReducer'
import getCoursesReducer from "./coursesReducers/getCourses";
import GetCourseSingleReducer from "./coursesReducers/singleCourse";
import UpdateCourseReducer from "./coursesReducers/updateCourse";
import setJobs from './jobsReducers/setJobsReducer'
import AllJobsReducer from "./jobsReducers/allJobsReducer";
import UpdateJobsReducer from "./jobsReducers/updateJobsReducer";
import getSingleJobReducer from "./jobsReducers/getSingleJobReducer";
import getProfileReducer from "./profile/getProfileReducer";
import setProfileReducer from "./profile/setProfileReducer";
import updateProfileReducer from "./profile/updateProfileReducer";
import getExpReducer from "./profile/userExperience/getExp";
import setExpReducer from "./profile/userExperience/setExp";
import updateExpReducer from "./profile/userExperience/updateExp";

export default combineReducers({
    authReducer,
    currentuserReducer,
    usersReducer,
//  For Tips  
    TipsReducer,
    getTipsReducer,
    singleTipReducer,
//   For Courses 
    courseReducer,
    getCoursesReducer,
    GetCourseSingleReducer,
    UpdateCourseReducer,
    setJobs,
    AllJobsReducer,
    UpdateJobsReducer,
    getSingleJobReducer,
    getProfileReducer,
    setProfileReducer,
    updateProfileReducer,
    getExpReducer,
    setExpReducer,
    updateExpReducer,
})