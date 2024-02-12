import express from 'express';
import { DeleteProfile, EditProfile, getUserProfile  , setUserProfile} from '../controllers/userProfile/introduction.js';
import { DeleteExperience, EditExperience, getUserExperience, setUserExperience } from '../controllers/userProfile/experienceController.js';


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




export default router;