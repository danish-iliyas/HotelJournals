import express from 'express';
import { DeleteProfile, EditProfile, getUserProfile  , setUserProfile} from '../controllers/userProfile/introduction.js';
import { DeleteExperience, EditExperience, getUserExperience, setUserExperience } from '../controllers/userProfile/experienceController.js';
import { DeleteEducation, UpdateEducation, getUserEducation, setUserEducation } from '../controllers/userProfile/educationControler.js';
import { DeleteSkills, EditSkills, getUserSkills, setUserSkills } from '../controllers/userProfile/skillsController.js';
import { DeleteUserCertification, EditUserCertification, getUserCertification, setUserCertification } from '../controllers/userProfile/certificatesController.js';

const router = express.Router();

// Introduction Section Routes
router.post('/setProfile',setUserProfile)
router.get('/getProfile/:id',getUserProfile)
router.delete('/deleteProfile/:id',DeleteProfile)
router.patch('/editProfile/:id',EditProfile)

// Experience Section Routes
router.post('/setExperience',setUserExperience)
router.get('/getExperience/:id',getUserExperience)
router.delete('/deleteExperience/:id',DeleteExperience)
router.patch('/editExperience/:id',EditExperience)

// Education Section routes
router.post('/setEducation',setUserEducation)
router.get('/getEducation/:id',getUserEducation)
router.patch('/edituserEducation/:id',UpdateEducation)
router.delete('/deleteEducation/:id',DeleteEducation)

// Skills Section routes
router.post('/setSkills',setUserSkills)
router.get('/getSkills/:id',getUserSkills)
router.delete('/deleteSkills/:id',DeleteSkills)
router.patch('/editSkills/:id',EditSkills)


// Certification Section routes
router.post('/setCertification',setUserCertification)
router.get('/getCertification/:id',getUserCertification)
router.delete('/deleteCertification/:id',DeleteUserCertification)
router.patch('/editCertification/:id',EditUserCertification)


export default router;