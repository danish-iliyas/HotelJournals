import express from 'express';
import { DeleteProfile, EditProfile, getUserProfile  , setUserProfile} from '../controllers/userProfile.js';


const router = express.Router();


router.post('/setProfile',setUserProfile)
router.get('/getProfile/:id',getUserProfile)
router.delete('/deleteProfile/:id',DeleteProfile)
router.patch('/editProfile/:id',EditProfile)

export default router;