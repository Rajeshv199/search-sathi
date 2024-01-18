import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link, Prompt } from 'react-router-dom'
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import RightAside from './right_aside';
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
                    <div className='postion-absolute'>
                        <div className='d-flex'>
                            <div className='pro-name'>Rohit Kumar</div>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="self-center"><path d="M15.998 2.596a4.376 4.376 0 0 0-8.03.078 4.375 4.375 0 0 0-5.562 5.918 4.375 4.375 0 0 0-.264 7.671 4.375 4.375 0 0 0 5.872 5.17 4.376 4.376 0 0 0 7.934.08 4.375 4.375 0 0 0 5.69-5.127 4.375 4.375 0 0 0-.25-7.891 4.375 4.375 0 0 0-5.39-5.899Z" fill="#3995E0"></path><mask id="Verified_svg__a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6 9.333 16.25 8l-5.418 5.357-3.085-3.05L6.4 11.641 10.809 16l.024-.024.024.024L17.6 9.333Z"></path></mask><path d="m16.251 8 .703-.711-.703-.695-.703.695.703.711ZM17.6 9.333l.703.711.72-.71-.72-.712-.703.711Zm-6.767 4.024-.703.711.703.696.703-.696-.703-.71Zm-3.085-3.05.704-.71-.704-.696-.703.695.703.711ZM6.4 11.641l-.703-.711-.72.71.72.712.703-.711ZM10.809 16l-.703.711.703.695.703-.695-.703-.711Zm.024-.024.703-.711-.703-.695-.703.695.703.711Zm.024.024-.703.711.703.695.703-.695-.703-.711Zm4.691-7.289 1.349 1.333 1.406-1.422-1.349-1.333-1.406 1.422Zm-4.012 5.357 5.418-5.357-1.406-1.422-5.418 5.357 1.406 1.422Zm-4.49-3.05 3.084 3.05 1.406-1.422-3.084-3.05-1.407 1.423Zm.057 1.334 1.349-1.333-1.407-1.423-1.348 1.334 1.406 1.422Zm4.409 2.937-4.409-4.36-1.406 1.423 4.409 4.36 1.406-1.423Zm-1.382-.024-.024.024 1.406 1.422.024-.024-1.406-1.422Zm1.43.024-.024-.024-1.406 1.422.024.024 1.406-1.422Zm5.337-6.667-6.743 6.667 1.406 1.422 6.743-6.667-1.406-1.422Z" fill="#fff" mask="url(#Verified_svg__a)"></path></svg>
                        </div>
                        <div className='pro-uerId'>
                            ID - SEDW254S
                        </div>
                        
                    </div>
                </div>
                <div className='postion-sticky'> 
                    <button className={activeAbut==1?'activeBtn':""} onClick={()=>{setActiveAbut(1);setShowDetails(1)}}>About Me</button>
                    <button className={activeAbut==2?'activeBtn':""} onClick={()=>{setActiveAbut(2);setShowDetails(1)}}>About Family</button>
                    <Link to="/edit/partner"><button className='' >About Partner</button></Link>
                </div>
                {activeAbut==1&&
                <div>
                    <div className='basicData' onClick={()=>setShowDetails(1)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Basic Details 
                                {showDetails==1&&<div className='headerTxt'>Brief outline of personal information</div>}
                            </h5>
                            {showDetails==1?<Link className='text-dark' to="/profile_edit/basic"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                        </div>
                        {showDetails==1&&
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
                                {showDetails==2&&<div className='headerTxt'>Describe yourself in a few words</div>}
                            </h5>
                            {showDetails==2?<Link className='text-dark' to="/profile_edit/about"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==2&&
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
                                {showDetails==3&&<div className='headerTxt'>Showcase your educational qualification</div>}
                            </h5>
                            {showDetails==3?<Link className='text-dark' to="/profile_edit/education"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==3&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("PG Degree","MCA","widh90")}
                                {multipleValue("PG College","University Evening College","widh90")}
                                {multipleValue("UG Degree","BCA","widh90")}
                                {multipleValue("UG College","Annamalai University","widh90")}
                                {multipleValue("Schhol Name","Independent HPS, Haroorgeri","widh90")}
                                
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(4)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Career
                                {showDetails==4&&<div className='headerTxt'>Give a glimpse of your professional life </div>}
                            </h5>
                            {showDetails==4?<Link className='text-dark' to="/profile_edit/career"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==4&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Employed In","Private Sector","widh90")}
                                {multipleValue("Occupation","Operator/Technician","widh90")}
                                {multipleValue("Organization","Sobha Developers Limited","widh90")}
                            
                                <div className='d-block w-100 flotLeft mt-2'>
                                    <h6 className='mb-0'>About My Career</h6>
                                    <div>You must consider a number of factors before deciding on your career. Each factor plays a significant role in your choice. Firstly, always assess yourself thoroughly. You must understand your area of interest to choose a career.</div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    {/* <div className='basicData' onClick={()=>setShowDetails(5)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Family
                                {showDetails==5&&<div className='headerTxt'>Introduce your family members</div>}
                            </h5>
                            {showDetails==5?<i class="fa-solid fa-pen-to-square"></i>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==5&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Family Status","Middle Class","widh100")}
                                {multipleValue("Father's Occupation","Private Employee","widh130")}
                                {multipleValue("Family Type","Joined Family","widh100")}
                                {multipleValue("Mother's Occupation","Homemaker","widh130")}
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
                    </div> */}
                    <div className='basicData' onClick={()=>setShowDetails(6)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Contact
                                {showDetails==6&&<div className='headerTxt'>Details that would help profiles get in touch with you</div>}
                            </h5>
                            {showDetails==6?<Link className='text-dark' to="/profile_edit/contact"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==6&&
                        
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
                                {showDetails==7&&<div className='headerTxt'>Your favourite activities</div>}
                            </h5>
                            {showDetails==7?<Link className='text-dark' to="/profile_edit/lifeStyle"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==7&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Drinking Habits","","widh100")}
                                {multipleValue("Hobbies","","widh80")}
                                {multipleValue("Dietary Habits","","widh100")}
                                {multipleValue("Interests","","widh80")}
                                {multipleValue("Smoking Habits","","widh100")}
                                {multipleValue("Languages","","widh80")}
                                {multipleValue("Favourite Music","","widh100")}
                                {multipleValue("Movies","","widh80")}
                                {multipleValue("Favourite Books","","widh100")}                                
                                {multipleValue("Sports","","widh80")}
                            </div>
                        </div>
                        }
                    </div>
                </div>
                }
                {activeAbut==2&&
                <div>
                    <div className='basicData' onClick={()=>setShowDetails(1)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Family
                                {showDetails==1&&<div className='headerTxt'>Introduce your family members</div>}
                            </h5>
                            {showDetails==1?<Link className='text-dark' to="/profile_edit/family"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==1&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Family Status","Middle Class","widh100")}
                                {multipleValue("Father's Occupation","Private Employee","widh130")}
                                {multipleValue("Family Type","Joined Family","widh100")}
                                {multipleValue("Mother's Occupation","Homemaker","widh130")}
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