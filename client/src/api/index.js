import axios from 'axios'


const API = axios.create({baseURL : 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
});

export const signUp = (authData) => API.post('/user/signup',authData)

export const Login = (authData) => API.post('/user/login',authData)

// Getting all users data from database
export const Profile = () => API.get('/user/profile')

// Tips Admin (Blog creation)
export const TipsAdminData = (tipsData) => API.post('/admin/tips',tipsData)

// Tips Data (Blog fetching)  For All Blogs 
export const TipsData = () => API.get('/admin/tips')

// Tips Data for single Blog 
export const TipsDataSingle = (id) => API.get(`/admin/tips/${id}`)

// Deleting a Blog
export const DeleteTip = (id) => API.delete(`/admin/tips/${id}`)

// For Updating a Tip
export const UpdateTip = (id,tipsdata) => API.patch(`/admin/tips/${id}`,tipsdata)

//  ----------------------------  For Creating a Course---------------

// Course Admin (Course creation)
export const CourseAdminData = (courseData) => API.post('/courses/newCourse',courseData)

// Course Data (Course fetching)  For All Courses

export const getCourseData = () => API.get('/courses/allCourses')

// Course Data for single Course

export const getCourseDataSingle = (id) => API.get(`/courses/singleCourse/${id}`)

// Editing a Course
export const UpdateCourseData = (id,courseData) => API.patch(`/courses/singleCourse/${id}`,courseData)

// Deleting a Course

export const DeleteCourse = (id) => API.delete(`/courses/singleCourse/${id}`)



//  ----------------------------  For Creating a Job---------------
// Job Admin (Job creation)
export const PostNewJob = (JobData) => API.post('/jobs/createjob',JobData)

// Job Data (Job fetching)  For All Jobs
export const GetAllJobs = () =>  API.get('jobs/allJobs')

// Getting Single Job
export const GetSingleJob = (id) => API.get(`/jobs/singlejob/${id}`)

// Updating a Job
export const UpdateJob = (id,JobData) => API.patch(`jobs/singlejob/${id}`,JobData)

// Deleting a Job
export const DeleteJob = (id) => API.delete(`jobs/singlejob/${id}`)


//  ----------------------------------------- For User Profile (Introduction) ------------------------------
// Setting User Profile
export const setUserProfile = (profileData) => API.post('/user/profile/setProfile',profileData)

// Getting User Profile
export const getUserProfile = (id) => API.get(`/user/profile/getProfile/${id}`)

// Updating User Profile
export const updateUserProfile = (id,profileData) => API.patch(`/user/profile/editProfile/${id}`,profileData)

// Deleting User Profile
export const DeleteUserProfile = (id) => API.delete(`/user/profile/deleteProfile/${id}`)

//  ----------------------------------------- For User Profile  (Experience) ------------------------------
// Setting User Experience
export const setUserExperience = (experienceData) => API.post('/user/profile/setExperience',experienceData)

// Getting User Experience
export const getUserExperience = (id) => API.get(`/user/profile/getExperience/${id}`)

// Updating User Experience
export const editUserExperience = (id,experienceData) => API.patch(`/user/profile/editExperience/${id}`,experienceData)

// Deleting User Experience
export const DeleteUserExperience = (id) => API.delete(`/user/profile/deleteExperience/${id}`)

// ----------------------------------------- For User Profile  (Education) ------------------------------`
// Setting User Education
export const setUserEducation = (educationData) => API.post('/user/profile/setEducation',educationData)

// Getting User Education
export const getUserEducation = (id) => API.get(`/user/profile/getEducation/${id}`)

// Updating User Education
export const editUserEducation = (id,updatedData) => API.patch(`/user/profile/edituserEducation/${id}`,updatedData)

// Deleting User Education
export const deleteUserEducation = (id) => API.delete(`/user/profile/deleteEducation/${id}`)




// ----------------------------------------- For User Profile  (Skills) ------------------------------
// Setting User Skills
export const setUserSkills = (skillData) => API.post('/user/profile/setSkills',skillData)

// Getting User Skills
export const getUserSkills = (id) => API.get(`/user/profile/getSkills/${id}`)

// Updating User Skills
export const updateUserSkills = (id,updatedData) => API.patch(`/user/profile/editSkills/${id}`,updatedData)

// Deleting User Skills
export const deleteUserSkills = (id) => API.delete(`/user/profile/deleteSkills/${id}`)

// ----------------------------------------- For User Profile (Certificates) ------------------------------
// Setting User Certificates
export const setUserCertification = (CertificatesData) => API.post('user/profile/setCertification',CertificatesData)

// Getting User Certificates
export const getUserCertification = (id) => API.get(`/user/profile/getCertification/${id}`)

// Updating User Certificates
export const updateUserCertification = (id,updatedData) => API.patch(`/user/profile/editCertification/${id}`,updatedData)

// Deleting User Certificates
export const deleteCertification = (id) => API.delete(`/user/profile/deleteCertification/${id}`)