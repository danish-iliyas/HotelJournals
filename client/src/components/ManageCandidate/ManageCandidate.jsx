import React from 'react'
import styles from './ManageCandidate.module.css';
import { LuContact2 } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { BiAperture } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import { MdMarkEmailRead } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { GoDiscussionOutdated } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
// import { RiSaveLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";

import img2 from "../../assets/manageimg/img2.png";
import img1 from "../../assets/manageimg/img1.png";



const ManageCandidate = () => {
  return (
    <div className= {styles.ManageCandidateContainer} > 
      
    <div className={styles.ManageCandidateLeft}>
        
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><MdDashboard /></div>
        <h1 htmlFor="">Dashboard    </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><LuContact2 /></div>
        <h1 htmlFor="">Manage Candidates   </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><BiAddToQueue /></div>
        <h1 htmlFor="">Edit Opportunty  </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><BiAperture /></div>
        <h1 htmlFor="">Opportunity Stats   </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><GrUserManager /></div>
        <h1 htmlFor="">Manage Roles   </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><MdMarkEmailRead /></div>
        <h1 htmlFor="">Manage Roles   </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><SiMinutemailer /></div>
        <h1 htmlFor="">Marketing Roles</h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><GoDiscussionOutdated /></div>
        <h1 htmlFor="">Discussion  </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><IoNotificationsCircleOutline /></div>
        <h1 htmlFor="">Manage Notifications   </h1>
      </div>
      <div className={styles.sidebar}>
        <div className= {styles.sideicon}><CiBank /></div>
        <h1 htmlFor=""> Manage Rounds </h1>
      </div>


    </div>

{/* right section  */}


    <div className={styles.ManageCandidateRight}>
        <div className={styles.ManageCandidateHeading}  >
        <div className={styles.checkbox}> <input type="checkbox" /></div>
        <div className={styles.serialnumber}>#</div>
        <div className= {styles.applicationname}>2 Application(s)</div>
        <div className={styles.status}>Action/Status</div>

        </div>
        <div className={styles.ManageCandidateHeadingmain}>
        <div className={styles.checkboxmain} ><input type="checkbox" /></div>
        <div className={styles.serialnumbermain}><p>1</p></div>
        <div className= {styles.applicationnamemain}>
           
        
                <div className={styles.applicantimg}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.applicantdetail}>
                <div className={styles.name}>
                <h1>Svalini19</h1>
                <p>svalaini@gmail.com</p>
                <p>delhi publc convent school</p>
                </div>
                <div className={styles.icon}><CiBookmark />
</div>
                </div>
            
        </div>
        <div className={styles.statusmain}></div>
        </div>

        <div className={styles.ManageCandidateHeadingmain}>
        <div className={styles.checkboxmain} ><input type="checkbox" /></div>
        <div className={styles.serialnumbermain}><p>1</p></div>
        <div className= {styles.applicationnamemain}>
           
        
                <div className={styles.applicantimg}>
            <img src={img2} alt="" />
                </div>
                <div className={styles.applicantdetail}>
                <div className={styles.name}>
                <h1>Svalini19</h1>
                <p>svalaini@gmail.com</p>
                <p>delhi publc convent school</p>
                </div>
                <div className={styles.icon}><CiBookmark /></div>
                </div>
            
        </div>
        <div className={styles.statusmain}></div>
        </div>
         

    </div>
        
    </div>
  )
}

export default ManageCandidate