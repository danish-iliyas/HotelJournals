import React from 'react'
// Toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons 
import { FaPencil } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

import PrCss from './userProfile.module.css';

const UserCertifications = () => {
    return (
        <div>
            <div className={` ${PrCss.addSections}`}>
                <div className="card w-100">
                    <div className="card-body text-center">
                        <i className='fa-solid fa-plus'></i>
                        <p className='card-text'> Add Certifications  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCertifications
