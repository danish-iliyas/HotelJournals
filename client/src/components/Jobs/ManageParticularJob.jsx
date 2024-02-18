import React, { useEffect } from 'react'
// React Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJobSingleAction } from '../../redux/actions/jobsAdmin';
import { fetchAllUsers } from '../../redux/actions/users';

const ApplicantsList = ({ applicants }) => {
    return (
        <div className='container '>
            {applicants?.map((applicant, index) => (
                <Card key={index} style={{ width: '18rem', marginTop: '10px' }}>
                    <Card.Header>{applicant?.fname } {applicant?.lname}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Email: {applicant?.email}</ListGroup.Item>
                        <ListGroup.Item>Phone No: {applicant?.country_code} {applicant?.phone}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
}

const ManageParticularJob = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobSingleAction(id))        
    },[dispatch])

    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch])

    const singleJobReducer = useSelector((state) => state?.getSingleJobReducer);
    console.log("jobApplicants:")
    const jobApplicants = singleJobReducer?.result?.applicants
    console.log(jobApplicants);

    const usersReducer = useSelector((state) => state.usersReducer);
    const allUSerDetails = usersReducer?.allUserDetails;
    console.log(allUSerDetails);
    // const appliedUsers = singleJobReducer?.result?.applicants.filter?.(applicant => usersReducer?.result?.find?.(user => user?._id === applicant));
    
    // const appliedUsers = allUSerDetails?.filter((user) => jobApplicants?.map((applicants) => applicants.includes(user?._id)));
    const appliedUsers = allUSerDetails?.filter((user) => jobApplicants?.includes(user?._id));
    console.log("Applied Users")
    console.log(appliedUsers);


    // console.log(appliedUsers);
    console.log("These are all Users");
    console.log(usersReducer);

  return (
    <div>
            <ApplicantsList applicants={appliedUsers} /> 
    </div>
  )
}

export default ManageParticularJob
