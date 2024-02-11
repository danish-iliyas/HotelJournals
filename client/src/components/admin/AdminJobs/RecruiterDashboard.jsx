import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Icons 
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
// import { IoMdTime } from "react-icons/io";
// import { FaArrowUpRightDots } from "react-icons/fa6";


// Modules 
import { DeleteJobAction, GetJobs } from '../../../redux/actions/jobsAdmin.js';
import { DeleteACourseAction } from '../../../redux/actions/courseAdmin.js';

const RecruiterDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDropDown, setShowDropDown] = useState(false);

    const AllJobs = useSelector((state) => state.AllJobsReducer)
    console.log(AllJobs);

    const localStorageData = JSON.parse(localStorage.getItem('Profile'));
    const local_user_id = localStorageData?.result?._id;
    console.log(`LocalUSERID :  ${local_user_id}`);

    const MyJobs = AllJobs?.result?.filter((jobs) => jobs.created_by === local_user_id);
    console.log(MyJobs);



    useEffect(() => {
        dispatch(GetJobs())
    }, [dispatch]);

    const handleConfirmedDelete = (id) => {
        dispatch(DeleteJobAction(id));
        navigate('/job/dashboard');
        console.log('Job Deleted successfully')
        toast.success('Job Deleted Successfully')
    }


    const handleDelete = (id) => {
        const result = window.confirm('Are you sure you want to delete this Job ?');
        if (result) {
            console.log('Delete the course')
            handleConfirmedDelete(id);
        } else {
            console.log('Cancelled')
        }
    }





    return (

        <>
            <div className='mb-5'>

                <ToastContainer />
                <div className='container d-flex mt-2 '>
                    <h2 className='pt-4 mb-4'> Recruiter Dashboard  </h2>
                    <div className='ml-4 mt-4'>
                        <button className='btn btn-warning text-white'>
                            <NavLink to='/jobs/post' target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                                Add a new Job
                            </NavLink>
                        </button>
                    </div>

                </div>
                {MyJobs?.map((job, index) => (
                    <div className="col-md-6 col-lg-6 " style={{ marginLeft: '22vw', marginTop: '1vw' }}>
                        <div className="card h-100 border shadow">

                            <div className="card-body ">
                                <h5 className="card-title">{job.jobTitle}</h5>
                                <p className="card-text text-muted mb-2">{job.created_at}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="badge badge-success">Active</span>
                                    {/* <span className="badge badge-success">Active</span> */}
                                    <div>
                                        <button className="btn btn-sm btn-light mr-2" >
                                            <IoShareSocial />
                                        </button>
                                        <button className='btn btn-sm btn-light mr-2'>
                                            <HiDotsVertical />
                                        </button>
                                        {/* <button className='btn btn-sm btn-light mr-2'>
                                        <FaPencil />
                                    </button> */}

                                        <NavLink style={{ textDecoration: 'none' }} to={`/jobs/dashboard/update/${job._id}`} >
                                            <button className='btn btn-sm btn-light mr-2' > <FaPencil /> </button>
                                        </NavLink>
                                        <NavLink style={{ textDecoration: 'none' }} to={`/jobs/dashboard/`}>
                                            <button className='btn btn-sm btn-light mr-2' onClick={() => { handleDelete(job._id)}} ><IoTrashBin /></button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    {/* <p className="mb-1"><strong>Skills:</strong></p> */}
                                    <div className="d-flex flex-wrap mt-2">
                                        {job.mandatorySkills.map((skill, index) => (
                                            <span key={index} className="badge badge-pill badge-light mr-2 mb-1 p-2">{skill}</span>
                                        ))}
                                        {job.optionalSkills.map((skill, index) => (
                                            <span key={index} className="badge badge-pill badge-light mr-2 mb-1 p-2">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <p className="mb-0"><strong>Salary</strong></p>
                                        <p className="mb-0">₹ {job.salaryStart} LPA - ₹ {job.salaryEnd} LPA</p>
                                        {/* <p className="mb-0"><strong>Skills</strong></p> */}
                                        {/* <p className="mb-0">{job.mandatorySkills}</p> */}

                                    </div>
                                    <div>
                                        <p className="mb-0"><strong>Job Type</strong></p>
                                        <p className="mb-0">{job.jobType}</p>
                                    </div>
                                    <div>
                                        <p className="mb-0"><strong>#Openings</strong></p>
                                        <p className="mb-0">{job.no_of_openings}</p>
                                    </div>
                                    <div>
                                        <p className="mb-0"><strong>Start Date</strong></p>
                                        <p className="mb-0">{new Date(job.joiningDate).toLocaleDateString()}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer bg-transparent border-top-0 p-0">
                                <button className="btn btn-sm btn-block" style={{ backgroundColor: '#E4B49D' }} >View Applicants </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default RecruiterDashboard
