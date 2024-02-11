import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';
import PuffLoader from "react-spinners/PuffLoader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons 
import { FaPencil } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

import ProfilePic from './ProfilePic';
import PrCss from './userProfile.module.css';
import { fetchAllUsers } from '../../redux/actions/users'
import { DeleteUserProfile, createProfileAction, getProfileAction, updateUserProfileAction } from '../../redux/actions/userProfile';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onhide}
    >
      <Modal.Header closeButton  >
        <Modal.Title id="contained-modal-title-vcenter">
          <span ><FaRegUser /> About Me </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6><b> Wow the recruiters </b></h6>
        <p>
          Imagine that you're meeting the CEO of your dream company. What should you say to amaze them?
        </p>
        <form>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              onChange={(e) => props.setintrodesc(e.target.value)}
              placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
              rows="3">
            </textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onhide} className='btn btn-secondary'> Close</Button>
        <Button onClick={props.submitintro}>
          {props.loading ? <>
            <div className='d-flex'>
              <PuffLoader
                size={25}
                color="#ffffff"
              /> <span className='pl-2'> Submitting... </span>
            </div>
          </> : 'Submit'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}



function MyVerticallyCenteredModalForEdit(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onhide}
    >
      <Modal.Header closeButton  >
        <Modal.Title id="contained-modal-title-vcenter">
          <span ><FaRegUser /> About Me </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6><b> Wow the recruiters </b></h6>
        <p>
          Imagine that you're meeting the CEO of your dream company. What should you say to amaze them?
        </p>
        <form>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              value={props.value}
              onChange={(e) => props.changevalue(e.target.value)}
              placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
              rows="3"
              >
            </textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onhide} className='btn btn-secondary'> Close</Button>
        <Button onClick={props.deletevalue} className='btn btn-danger' >  
          {props.loadingdel ? <> 
            <div className='d-flex'>
              <PuffLoader
                size={25}
                color="#ffffff"
              /> <span className='pl-2'> Removing ... </span>
            </div>
           </> : 'Remove Intro'}
         
        </Button>
        <Button  onClick={props.submithandler}>
          {props.loading ? <>
            <div className='d-flex'>
              <PuffLoader
                size={25}
                color="#ffffff"
              /> <span className='pl-2'> Submitting... </span>
            </div>
          </> : 'Edit'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


const UserProfile = () => {

  const a = false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [introdesc, setintrodesc] = useState('');
  const [editTheIntro,setEditTheIntro] = useState('');

  // Getting current User Profile from the database

  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer)
  const currentUser = users?.allUserDetails?.filter((user) => user._id === id)[0];
  // console.log(currentUser);
  // Getting current User Profile Data of various fields from DB  from the database

  // const allStates = useSelector((state) => state);
  // console.log(allStates)

  const getProfileState = useSelector((state) => state.getProfileReducer)
  const currentUserProfileData = getProfileState?.data?.result;
  const holaUserIntro = currentUserProfileData?.introduction;
  // console.log("Current User Profile Data : ", holaUserIntro);



  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    // console.log("Stored profile : ", storedProfile);

    if (!storedProfile || storedProfile?.result?._id !== id || !storedProfile?.result) {
      navigate('/login');
    }

    dispatch(fetchAllUsers());
  }, [dispatch])


  useEffect(() => {
    const fetchProfile = async () => {
      const getsingleProfileData = await dispatch(getProfileAction(id));
      console.log("Get Single Profile Data : ", getsingleProfileData);
    };
    fetchProfile();
  }, [id]);


  useEffect(() => {
    if(holaUserIntro){
      setEditTheIntro(holaUserIntro);
    }
  },[holaUserIntro])

  const handleIntroduceYourself = async () => {
    // if(!introdesc){
    //   return toast.error('Please fill the introduction field');
    // }
    setLoading(true);
    const userProfileData = {
      introduction: introdesc,
      userId:id
    }

    const repsonse = await dispatch(createProfileAction(userProfileData));

    if (repsonse.success) {
      const getsingleProfileData = await dispatch(getProfileAction(id));
      setLoading(false)
      setModalShow(false)
      // console.log("Profile Created Successfully");
    } else {
      // console.log("Failed to create Profile");
    }
  }


  const handleEditIntro = async() => {
    if(!editTheIntro){
      return toast.error('Please fill the introduction field');
    }
    setLoading(true);
    const updatedData = {
      introduction: editTheIntro,
      }

    const response = await dispatch(updateUserProfileAction(id,updatedData));
    console.log(response)
    if (response.success) {

        const getsingleProfileData = await dispatch(getProfileAction(id));
        console.log("Get Single Profile Data : ", getsingleProfileData);

      setLoading(false)
      setModalShow(false)

      console.log("Profile Updated Successfully");
    } else {
      console.log("Failed to Update Profile");
    }
  } 

  const deleteIntro =  async() => {
    setLoadingDel(true);
    const response = await dispatch(DeleteUserProfile(id));
    if (response.success) {
        const getsingleProfileData = await dispatch(getProfileAction(id));
        console.log("Get Single Profile Data : ", getsingleProfileData);
        setLoadingDel(false)
        setModalShow(false)
        console.log("Desc Deleted Successfully");
    } else {
      console.log("Failed to Delete Desc");
    }
  }

  return (

    <div >   {/*  main container */}
      <ProfilePic />
      <div className='container'>
      <ToastContainer />
        <div className='row pt-2  '>
          <div className={PrCss.contactFollow}>

            <div className='card w-75'>
              <div className='card mt-5'>
                <div class="card-body ">
                  <i class="fa-solid fa-user fa-3x"></i> &nbsp;
                  <span>
                    Profile at 60% Completion
                  </span>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: '23vw' }}>
              <div class="card-body text-center">
                <i class="fa-solid fa-envelope"></i> &nbsp;
                <span>
                  Contact
                </span>
              </div>
              <div class="card-body">
                <i class="fa-solid fa-at"></i> &nbsp;
                <span>
                  {currentUser?.email}
                </span>
              </div>
              <div class="card-body">
                <i class="fa-solid fa-phone"></i>&nbsp;
                <span>
                  {currentUser?.country_code} - {currentUser?.phone}
                </span>
              </div>
            </div>

          </div>
        </div>
        <div className='row'>
          {!holaUserIntro ?
            (<>
              <div
                className={` ${PrCss.addSections}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setModalShow(true)}
              >
                <div className="card w-100">
                  <div className="card-body text-center">
                    <i className='fa-solid fa-plus'></i>
                    <p className='card-text'> Briefly Introduce Yourself  </p>


                    {/* Modal Start  */}
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onhide={() => setModalShow(false)}
                      submitintro={handleIntroduceYourself}
                      setintrodesc={setintrodesc}
                      loading={loading}
                    />
                    {/* Modal End */}
                  </div>
                </div>
              </div>
            </>) :
            (<>
              <div class="card w-75">
                <div className='row'>
                  <div class="card-header">
                    About Me
                  </div>
                  <button onClick={() => setModalShow(true)}>
                    <FaPencil />

                    {/* Modal Start  */}
                    <MyVerticallyCenteredModalForEdit
                      show={modalShow}
                      onhide={() => setModalShow(false)}
                      submithandler={handleEditIntro}
                      value={editTheIntro}
                      changevalue={setEditTheIntro}
                      deletevalue={deleteIntro}
                      loading={loading}
                      loadingdel={loadingDel}
                    />
                    {/* Modal End */}
                  </button>
                </div>


                <div class="card-body ">
                  <blockquote class="blockquote mb-0">
                    <p> {holaUserIntro.length > 150 ? holaUserIntro.substr(0, 150) + "......" : holaUserIntro}</p>
                    {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                  </blockquote>
                </div>
              </div>
            </>)
          }

          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'> Add your experiences  </p>
              </div>
            </div>
          </div>

          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'>Add your skills </p>
              </div>
            </div>
          </div>
          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'> Upload your CV's  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserProfile
