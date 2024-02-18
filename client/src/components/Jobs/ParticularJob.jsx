import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PuffLoader from "react-spinners/PuffLoader";
// Library for date and time
import { formatDistanceToNow } from 'date-fns';
// React toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { ApplyJobAction, getJobSingleAction } from '../../redux/actions/jobsAdmin.js';

const ParticularJob = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const localUser = JSON.parse(localStorage.getItem('Profile'));
    const userId = localUser?.result?._id;
    const [appliedToJob, setAppliedToJob] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getJobSingleAction(id))
    }, [dispatch]);

    const handleJobApply = async (jobId) => {
        setLoading(true);
        // console.log(`Job Applied with id : ${jobId}`);
        // console.log(`User Applied with id : ${userId}`);
        const jobApplicants = {
            jobId: jobId,
            userId: userId
        }
        const response = await dispatch(ApplyJobAction(jobApplicants))
        if (response.success) {
            toast.success(response.message);

        } else {
            toast.error(response.message);
        }
        setLoading(false);
    }




    const singleJobsData = useSelector((state) => state?.getSingleJobReducer);
    console.log("Single Job Data \n");
    const posted_at = new Date(singleJobsData?.result?.created_at);
    console.log(singleJobsData);
    // if(singleJobsData?.result?.applicants?.includes(userId)){
    //     toast.info('You have already applied for this job');
    // }
    const applicantsSet = new Set(singleJobsData?.result?.applicants);
    // if (applicantsSet.has(userId)) {
    //     toast.info('You have already applied for this job');
    // }

    // useEffect(() => {
    //     setAppliedToJob(applicantsSet.has(userId));
    // },[appliedToJob,applicantsSet,userId,singleJobsData?.result?.applicants])


    useEffect(() => {
        if (applicantsSet?.has(userId)) {
            setAppliedToJob(true);
        }
    }, [id,singleJobsData?.result?.applicants])


    return (
        <div className='container mt-4'>
            <ToastContainer />
            <div class="card text-center">
                <div class="card-header">
                    {singleJobsData?.result?.jobTitle}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Extra Benifits</h5>
                    {singleJobsData?.result?.extraBenifits?.map((benifits, index) => (
                        <span className='rounded' key={index} style={{ marginRight: '10px', border: '20% ' }}>
                            {benifits}
                        </span>
                    ))}
                </div>

                <center>
                    {!appliedToJob ?
                        <button className='btn btn-info mt-2 mb-2 w-25 ' onClick={() => {
                            handleJobApply(singleJobsData?.result?._id);
                            setAppliedToJob(true);
                        }}>
                            {loading ?
                                <>
                                    <div className='d-flex'>
                                        <PuffLoader
                                            size={25}
                                            color="#ffffff"
                                        />
                                        <span className='pl-2 text'> Applying  ... </span>
                                    </div>
                                </> :
                                'Apply'
                            }
                        </button> :
                        <button className='btn btn-success mt-2 mb-2 w-25 ' disabled>
                            Applied
                        </button>
                    }
                </center>
                <div class="card-footer text-muted">
                    {singleJobsData?.result?.created_at &&
                        `posted ${formatDistanceToNow(posted_at)} ago`}
                </div>
            </div>
        </div>
    )
}

export default ParticularJob
