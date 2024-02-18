import React from 'react'
import './jobdescription.css'
import './responsivejob.css'
import companyimage from "../../assets/JobImage/companyimage.jpg";
import { FaStar } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaLocationDot, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { FaFirstAid } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";

const JobDescription = () => {
    return (
        <>
            <div className='jobcontainer'>

                <div className='left-container'>


                    <div className="company ">
                        <div className='companydescription'>
                            <div className="leftcompanydescripton">
                                <h1>Marketing Coordung Executive "(on 3rd party patroll)" </h1>

                                <div className='ownername'>
                                    <h1>Saint Gobain </h1>
                                    <div className='dreview'> <FaStar/></div>
                                    <p> 1238 Reviews</p>
                                </div>
                                <div className="yearname">
                                    <div>
                                        <p>0-2years</p>
                                    </div>
                                    <p>#50,000-3 lacs P.A</p>
                                </div>
                                <div className="companylocation">
                                    <div className="locationlogo"><FaLocationDot/></div>
                                    <p>pune ,bangluru Mumbaie</p>
                                </div>
                            </div>
                            {/* rightcompanydescription section  */}
                            <div className="rightcompanydescripton">
                                <div className="rightcompanydescriptonlogo">
                                    <img src={companyimage} alt="img" />
                                </div>
                                <a href="">Send me job like this</a>
                            </div>
                        </div>

                        <div className="details">
                            <div className="openinginformation">
                                {/* <div className="opening"></div>
                    <div className="opening"></div>
                    <div className="opening"></div> */}
                                <p>Posted: <span>2</span> days ago</p>
                                <p>Openings: <span>40</span></p>
                                <p>Applicants: <span>41</span></p>
                            </div>
                            <div className="detailbutton">
                                <button type="button" class="btn-1 ">Register To Apply</button>
                                <button type="button" class="btn-2  ">Login To Apply</button>
                            </div>
                        </div>


                    </div>

                    <div className="jobdescription">
                        <h1>Job description</h1>
                        <p>Job Description and Key Responsibilities: <br />
                            Responsible for developing the portfolio of Adhesives and Sealants products for construction, industrial and automotive markets. The person should have in-depth understanding of adhesives and sealants, their applications, key customers and their expectations.
                            The person should be able to define a go-to market strategy with the appropriate marketing mix.
                            He/she needs to have a strong performance record with the mindset of a start-up business and be able to multitask.</p>
                        <ul>
                            <h1>Major responsibilities will include the following:</h1>
                            <li>Getting new leads from customers</li>
                            <li>Mapping of market at distributor/dealer level per district & gaining inputs into market size, market trends by product line, understanding market issues/distributor feedback</li>
                            <li>Supporting distributors to get orders from retailers</li>
                            <li>Performing secondary sales for dealers</li>
                            <li>Conducting product trials</li>
                            <li>Communication of latest news from the business/schemes etc. Getting distributor feedback on schemes/promotions needed</li>
                            <li>Assisting in expanding distributor/dealer network across the respective states.</li>
                            <li>Build market information</li>
                        </ul>
                        <ul>
                            <h1>Desired Candidate Profile:</h1>
                            <li>Qualifications: Graduate</li>
                            <li>Work Experience: 2-3 years of Sales experience</li>
                            <li>Preferably having worked in Adhesives/Sealants segments; alternatively having experience in allied industries like Plywood, Glass and Hardware segments</li>
                            <li>Should have knowledge of retail sales, additionally any knowledge of industrial and project sales would be appreciated.Role & responsibilities</li>
                        </ul>
                        <div className="rolecatagory">
                            <h1>Role: <span> Field Sales Executive</span></h1>
                            <h1>Industry Type: <span> Engineering & Construction</span></h1>
                            <h1>Department: <span> Sales & Business Development</span></h1>
                            <h1>Employment Type: <span>  Full Time, Permanent</span></h1>
                            <h1>Role Category: <span> Retail & B2C Sales</span></h1>
                        </div>
                        <div className="education">
                            <h1>Education</h1>
                            <h1>UG: <span>Any Graduate</span></h1>
                        </div>
                        <div className="KeySkills">
                            <h1>Key Skills</h1>
                            <p>Skills highlighted with ‘*‘ are preferred keyskills</p>
                            <div className="preferedbutton">
                                <button className='btn'>Sales Executive</button>
                            </div>
                            <div className="keyskillsButton">
                                <button className='btn'>Sales Executive</button>
                                <button className='btn'>Sales Executive</button>
                                <button className='btn'>Sales Executive</button>
                                <button className='btn'>Sales Executive</button>
                                <button className='btn'>Sales Executive</button>
                            </div>
                        </div>
                        <div className="iconcontainer">
                            <div className="icons facebook"> <a href=""><FaLinkedin/></a></div>
                            <div className="icons facebook"> <a href=""><FaFacebook/></a></div>
                            <div className="icons facebook"> <a href=""><FaTwitter/></a></div>
                            <div className="icons youtube"> <a href=""><FaYoutube/></a></div>
                        </div>
                    </div>

                    <div className="aboutcompany">
                        <h1>About company</h1>
                        <p>Saint-Gobain designs, manufactures and distributes materials and solutions for the construction, mobility and industrial markets. Developed through a continuous innovation process, our integrated solutions provide sustainability and performance in daily life, addressing the renovation of public and private buildings, light construction and the decarbonization of construction and industry. The Adhesives & Sealants Business is a part of Saint-Gobains High-Performance Solutions sector. In 2018, Saint-Gobain acquired Tekbond - a leading player in the Brazilian Adhesives market thereby bringing the brand to India. The business is a part of Grindwell Norton and is built on lasting relationships and strong partnerships supported by a wide range of adhesives, sealants, sprays, foams and tape products. Tekbond product range includes Silicone Sealants, Polyurethane (PU) sealants, Acrylic Sealants, MS Hybrid, Adhesives and spray paints To know more about our business, visit our website: <a href="https://tekbondindia.saint-gobain.com">https://tekbondindia.saint-gobain.com</a></p>

                        <h1>Company Info</h1>
                        <h1>Address: <span>5th Floor, Leela Business Park,Airport Road Metro Station, Andheri Kurla Road, Andheri East – Mumbai 400059</span></h1>

                    </div>
                </div>


                {/* right section  */}
                <div className='right-container'>
                    <div className="recommendedjobs">
                        <div className="recommendedjobsdetail">
                            <h1>Jobs you might be interested in</h1>
                            <p> Sales Marketing Executive / Back Office</p>
                            <p>urja sealants pvt ltd</p>
                            <div className='marketingreview'>
                                    <div className="marketingicon">
                                    <FaStar  />
                                    </div>
                                    <p>87, review</p>
                                </div>
                            <div className='recommendedjobslocation'>
                                <div className='joblocation'>
                                    <div className="jobicon"><FaLocationDot /></div>
                                    <p>pune</p>
                                </div>
                                <p>posted 8 days</p>
                            </div>
                        </div>

                        <div className="shalesjobsdetail">
                            {/* <h1>Jobs you might be interested in</h1> */}
                            <p> Sales Executive</p>
                            <p>urja sealants pvt ltd</p>
                            <div className='marketingreview'>
                                    <div className="marketingicon">
                                    <FaStar  />
                                    </div>
                                    <p>87, review</p>
                                </div>
                            <div className='shalesjobslocation'>
                                
                                <div className='shaleslocation'>
                                    <div className="shalejobicon"><FaLocationDot /></div>
                                    <p>pune</p>
                                </div>
                                <p>posted 8 days</p>
                            </div>
                        </div>

                        <div className='marketingdetail'>
                            <div className='marketingdetailleft'> <h1>Marketing Executive</h1>
                                <p>Sharayu Toyota</p>
                                <div className='marketingreview'>
                                    <div className="marketingicon">
                                    <FaStar  />
                                    </div>
                                    <p>87, review</p>
                                </div>
                                <div className='markeinglocation'>
                                    <div className="marketinglocationicon"><FaLocationDot /></div>
                                    <p>Mahrastra <span>mumbaie</span></p>
                                </div>
                            </div>
                            <div className='marketingdetailright'>
                                <div className='marketinglogo'>
                                    <p><FaHouseChimneyCrack /></p>
                                </div>
                                <a href="">posted 19 days ago</a>
                            </div>

                        </div>


                        <div className="marketingbutton">
                            <button className='btn '>View all</button>
                        </div>


                    </div>
                    {/* reviews section start  */}
                    <div className="reviews">
                        <div className='reviewsheading'>
                            <h1>Reveiws</h1>
                            <a href="">Read all 1238 reviews</a>
                        </div>

                        <div className="reviewsdetail">
                            <h1>Territory Sales Incharge in Guwahati, Assam</h1>
                            <div className='reviewsdate'>
                                <p>Anonymous</p>
                                <p>19 april 2023</p>
                            </div>
                            <a href="">likes</a>
                            <p>Overall is good . Reputed organisation, good company culture, standard procedure</p>
                        </div>
                        <div className="reviewpost">
                            <div className='reviewpostleft'><p>Follow Saint Gobain to receive the latest job postings and alerts</p></div>
                            <div className='reviewpostright'>
                                <button>Follow</button>
                                <p>47.0k followers</p>
                            </div>
                        </div>

                    </div>
                    <div className="banefitsection">
                        <div className="banefitperk">
                           
                                <h1>Benefits & Perks <br /><span>Benefits & Perks</span> </h1>

                           
                            <a href="">view all</a>
                        </div>
                        <div className="perks">
                            <div className="perklogosection">
                                <div className="perkimage">
                                <FaFirstAid />
                                </div>
                                <p>Health </p>
                            </div>
                            <div className="perklogosection">
                                <div className="perkimage">
                                <FaBagShopping />
                                </div>
                                <p>Job Training</p>
                            </div>
                            <div className="perklogosection">
                                <div className="perkimage">
                                <FaCar />
                                </div>
                                <p>Transport</p>
                            </div>
                            <div className="perklogosection">
                                <div className="perkimage">
                                <FaUserTie />
                                </div>
                                <p>Soft Training</p>
                            </div>
                            <div className="perklogosection">
                                <div className="perkimage">
                                <FaHouseChimneyCrack />
                                </div>
                                <p>House</p>
                            </div>
                            <div className="perklogosection">
                                <div className="perkimage">
                                <FaCoffee/>
                                </div>
                                <p>Coffetery</p>
                            </div>

                        </div>

                    </div>


                    <div className='servicesection'>
                        <div className='servicedetail'>
                            <div className='servicelink'>
                                <p>Services you might be
                                    interested in</p>
                                <a href="">link</a>
                            </div>
                            <p>Resume Display <br /> <span>Increase your profile visibility to recruiters upto 3 times</span> <br />
                                Get a Featured Profile, Stand out and get noticed in recruiter eyes.
                            </p>
                        </div>
                       <div className="service-bottom">
                         <div className="logoService">
                            <img src={companyimage} alt="" />
                         </div>
                         <h1>Company Name</h1>
                       </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default JobDescription