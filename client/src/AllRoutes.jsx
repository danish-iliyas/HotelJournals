import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About';
import Tips from './components/Tips/Tips';
import JournalsPage from './components/Journals/JournalsPage';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import UserProfile from './components/User_profile/UserProfile';
import AdminTips from './components/admin/AdminTips/AdminTips';
import SingleTip from './components/Tips/SingleTip';
import Dashboard from './components/admin/Dashboard/Dashboard';
import UpdateTips from './components/admin/AdminTips/UpdateTips';
import Courses from './components/courses/Courses';
import CreateCourse from './components/admin/AdminCourses/CreateCourse';
import CourseDescription from './components/courses/CourseDescription';
import EducatorDashboard from './components/admin/AdminCourses/EducatorDashboard';
import UpdateCourse from './components/admin/AdminCourses/UpdateCourse';
import JobsLanding from './components/Jobs/JobsLanding';
import JobsDashboard from './components/Jobs/JobsDashboard';
import CreateJobs from './components/admin/AdminJobs/CreateJobs';
import RecruiterDashboard from './components/admin/AdminJobs/RecruiterDashboard';
import UpdateJobs from './components/admin/AdminJobs/UpdateJobs';
import AllJobs from './components/Jobs/AllJobs';
import ParticularJob from './components/Jobs/ParticularJob';
import ManageParticularJob from './components/Jobs/ManageParticularJob';
import Jobdescription from './components/Job_Description/JobDescription';
import Job_search from './components/Job_search/Job_search';
import Resume from './components/Resume/Resume';
import Dashboardd from './components/Dashboard/Dashboardd'
import ManageCandidate from './components/ManageCandidate/ManageCandidate';
import HotelLandingpage from './components/HotelLandingPage/HotelLandingPage';

const AllRoutes = () => {
  return (
        <Routes > 
            <Route  path='/' element={< Home/>}> </Route>
            <Route path='/about' element = {< About/>}>  </Route>
            <Route path='/tips' element={<Tips />} >  </Route>
            <Route path='/journals' element={<JournalsPage />} > </Route>
            <Route path='/signUp' element={<Signup />} > </Route>
            <Route path='/login' element={<Login/>} > </Route>
            <Route path='/profile/:id' element={<UserProfile/>} > </Route>
            <Route path='/admintips' element={<AdminTips/>} > </Route>
            <Route path='/courses' element= {<Courses /> } > </Route>

            {/* Jobs Routes */}
            <Route path='/jobs' element={<JobsLanding />} > </Route>
            <Route path='/AllJobs' element={<AllJobs />} > </Route>
            <Route path='/AllJobs/:id' element={<ParticularJob />} > </Route>

            {/* Admin Routes  */}
                    {/*  For Tips */}
            <Route path='/dashboard' element={<Dashboard />}>  </Route>
            <Route path='/dashboard/updateTips/:id' element={<UpdateTips />}>  </Route>

                    {/* For Courses */}
                            {/* Create Course */}
            <Route path='/admin/courses' element = {<CreateCourse /> } >  </Route>
                            {/* Get Single Course */}
            <Route path='courses/:id' element={ <CourseDescription /> } > </Route>
                            {/* Course Dashboard */}
            <Route path='/educator/dashboard' element={<EducatorDashboard />}>  </Route>
                            {/* Edit Course */}
            <Route path='/educator/dashboard/update/:id' element={<UpdateCourse />}>  </Route>
                {/* For Jobs */}
            <Route path='/jobs/post' element={<CreateJobs />} ></Route>
            <Route path='/jobs/dashboard' element={<RecruiterDashboard />} > </Route>
            <Route path='/jobs/dashboard/:id/job/manage/' element={<ManageParticularJob />} > </Route> 
            <Route path='/jobs/dashboard/update/:id' element={<UpdateJobs />}></Route>

{/* job descripton  */}
<Route path='/HotelLandingpage' element={<HotelLandingpage /> } > </Route>
<Route path='/Resume' element={<Resume/> } > </Route>
            <Route path='/Jobdescription' element={<Jobdescription />}></Route>
            <Route path='/JobSearch' element={<Job_search/>}></Route>
            <Route path='/Dashboardd' element={<Dashboardd/> } > </Route>
            <Route path='/ManageCandidate' element={<ManageCandidate/> } > </Route>
            {/* // Temporary Route for testing */}

            <Route path='/test/:id' element={<SingleTip /> } > </Route>
             <Route path='/test/:id' element={<SingleTip /> } > </Route>
        </Routes>
    )
}

export default AllRoutes
