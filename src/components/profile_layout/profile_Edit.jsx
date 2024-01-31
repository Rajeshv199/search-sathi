import { useState } from 'react';
import { Link }from 'react-router-dom';
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import MobileAside from './MobileAside';

export default function Details() {

    const[showDetails,setShowDetails] = useState(1);
    const[activeAbut,setActiveAbut] = useState(1);
    // function goBack() {
    //     window.history.back()
    // }

    function multipleValue(label,value,width){
        return(
            <div className='d-flex w-50 flotLeft my-2'>
                <div className={'d-flex justify-content-between '+width}>{label}<span >:</span></div>
                <div className='px-2'>{value}</div>
            </div>
        )
    }
    

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
            <LeftAside/>
            <div className='profile-box'>
                <div className='prfile-panel'>
                    <div className='profile-glary'>
                        <span><i className="fa-solid fa-image px-1"></i>Upload</span>
                        <span><i className="fa-solid fa-image px-1"></i>10 Images</span>
                    </div>
                    <div >
                        <img className='user-image' src='https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=""/>
                    </div>
                    <div className='postion-absolute'>
                        <div className='user-profile'>
                            <div> 
                                <div className='user-icon'>
                                    <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                                </div>
                            </div>
                            <div className='d-block'>
                                <div className='pro-name'>Hi Rohit</div>
                                <div className='text-white'>Profession, Location</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='postion-sticky'> 
                    <button className={activeAbut===1?'activeBtn':""} onClick={()=>{setActiveAbut(1);setShowDetails(1)}}>About Me</button>
                    <button className={activeAbut===2?'activeBtn':""} onClick={()=>{setActiveAbut(2);setShowDetails(1)}}>About Family</button>
                    <Link to="/edit/partner"><button className='' >About Partner</button></Link>
                </div>
                {activeAbut===1&&
                <div>
                    <div className='basicData' onClick={()=>setShowDetails(1)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Basic Details 
                                {showDetails===1&&<div className='headerTxt'>Brief outline of personal information</div>}
                            </h5>
                            {showDetails===1?<Link className='text-dark' to="/profile_edit/basic"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                        </div>
                        {showDetails===1&&
                        <div className='d-flex'>
                            <div>
                                {multipleValue("Height",`4' 11" (1.50 mts)`,"widh80")}
                                {multipleValue("Annual Incom","Rs. 5 - 7.5 Lakh","widh100")}
                                {multipleValue("Religion","Hindu • Bari","widh80")}
                                {multipleValue("Marital Status","Never Married","widh100")}
                                {multipleValue("Location","Kolkata, West Bengal, India","widh80")}
                                {multipleValue("Mother Tongue","Hindi","widh100")}
                                {multipleValue("Birth Date","01 Feb 2000","widh80")}
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(2)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>About Me
                                {showDetails===2&&<div className='headerTxt'>Describe yourself in a few words</div>}
                            </h5>
                            {showDetails===2?<Link className='text-dark' to="/profile_edit/about"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===2&&
                        <div className='mt-2'>
                        Surprise Visits: If possible, surprise your partner with a visit. Even short, unexpected visits can be incredibly special and memorable.
                        Be Supportive: Show support during tough times. Be there to listen, offer advice, or simply provide comfort when your partner needs it.
                        Trust and Honesty: Build trust by being honest and open about your feelings,
                            
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(3)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Education
                                {showDetails===3&&<div className='headerTxt'>Showcase your educational qualification</div>}
                            </h5>
                            {showDetails===3?<Link className='text-dark' to="/profile_edit/education"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===3&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("PG Degree","MCA","widh90")}
                                {multipleValue("PG College","University Evening College","widh90")}
                                {multipleValue("UG Degree","BCA","widh90")}
                                {multipleValue("UG College","Annamalai University","widh90")}
                                {multipleValue("Schhol Name","Independent HPS, Haroorgeri","widh90")}
                                <div className='d-block w-100 flotLeft mt-2'>
                                    <h6 className='mb-0'>About My Eduction</h6>
                                    <div>The term education can be applied to primitive cultures only in the sense of enculturation</div>
                                </div>
                                
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(4)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Career
                                {showDetails===4&&<div className='headerTxt'>Give a glimpse of your professional life </div>}
                            </h5>
                            {showDetails===4?<Link className='text-dark' to="/profile_edit/career"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===4&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Employed In","Private Sector","widh90")}
                                {multipleValue("Occupation","Operator/Technician","widh90")}
                                {multipleValue("Organization","Sobha Developers Limited","widh90")}
                                {multipleValue("Years Of Exp","0 - 1 year","widh90")}
                            
                                <div className='d-block w-100 flotLeft mt-2'>
                                    <h6 className='mb-0'>About My Career</h6>
                                    <div>You must consider a number of factors before deciding on your career. Each factor plays a significant role in your choice. Firstly, always assess yourself thoroughly. You must understand your area of interest to choose a career.</div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                   
                    <div className='basicData' onClick={()=>setShowDetails(6)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Contact
                                {showDetails===6&&<div className='headerTxt'>Details that would help profiles get in touch with you</div>}
                            </h5>
                            {showDetails===6?<Link className='text-dark' to="/profile_edit/contact"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===6&&
                        
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Email ID","Abcsdd@gmail.com","widh80")}
                                {multipleValue("Alternate Email Id"," ","widh130")}
                                {multipleValue("Mobile No","+91 8965214542","widh90")}
                                {multipleValue("Alternate Mobile No"," ","widh130")}
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(7)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>LifeStyle
                                {showDetails===7&&<div className='headerTxt'>Your favourite activities</div>}
                            </h5>
                            {showDetails===7?<Link className='text-dark' to="/profile_edit/lifeStyle"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===7&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Drinking Habits","No","widh100")}
                                {multipleValue("Hobbies","Painting","widh80")}
                                {multipleValue("Dietary Habits","Non Vegetarian","widh100")}
                                {multipleValue("Interests","Reading, Movies","widh80")}
                                {multipleValue("Smoking Habits","No","widh100")}
                                {multipleValue("Languages","English","widh80")}
                                {multipleValue("Favourite Music","Old Song","widh100")}
                                {multipleValue("Movies","","widh80")}
                                {multipleValue("Favourite Books","","widh100")}                                
                                {multipleValue("Sports","Cricekt, Football","widh80")}
                            </div>
                        </div>
                        }
                    </div>
                </div>
                }
                {activeAbut===2&&
                <div>
                    <div className='basicData' onClick={()=>setShowDetails(1)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Family
                                {showDetails===1&&<div className='headerTxt'>Introduce your family members</div>}
                            </h5>
                            {showDetails===1?<Link className='text-dark' to="/profile_edit/family"><i className="fa-solid fa-pen-to-square"></i></Link>:<i className="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===1&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Family Status","Middle className","widh100")}
                                {multipleValue("Father's Occupation","Private Employee","widh130")}
                                {multipleValue("Family Type","Joined Family","widh100")}
                                {multipleValue("Mother's Occupation","Housewife","widh130")}
                                {multipleValue("No. of Brother(s)","2 Brothers","widh100")}
                                {multipleValue("Family Living in","Ranchi, India","widh130")}
                                {multipleValue("No. of Sister(s)","1 Sister","widh100")}
                                
                                <div className='w-100 flotLeft my-1'>
                                    <h6 className='mt-2 mb-0'>About My Family</h6>
                                    <div>You must consider a number of factors before deciding on your career. Each factor plays a significant role in your choice. Firstly, always assess yourself thoroughly. You must understand your area of interest to choose a career.</div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                }
            </div>

            {/* <RightAside /> */}
            <MobileAside />
        </div>

    </div>
)
}