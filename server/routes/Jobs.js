import express from 'express';

import {
    DeleteJob,
    editJob,
    getAllJobs,
    getSingleJob,
    postJobs
} from '../controllers/jobs.js';

const router = express.Router();

// Add a new Job
router.post('/createjob', postJobs)
// get all Jobs
router.get('/alljobs', getAllJobs)
// get a single Job
router.get('/singlejob/:id', getSingleJob)
// Delete a single Job
router.delete('/singlejob/:id', DeleteJob)
// Edit a job
router.patch('/singlejob/:id', editJob)






export default router