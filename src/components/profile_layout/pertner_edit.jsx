import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link, Prompt } from 'react-router-dom'
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import RightAside from './right_aside';
import MobileAside from './MobileAside';

export default function Partner_Edit() {

    const[showDetails,setShowDetails] = useState(1);
    const[activeAbut,setActiveAbut] = useState(1);
  
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
                <Link to="/profile_edit"><button >About Me</button></Link>
                <Link to="/profile_edit"><button >About Family</button></Link>
                    <button className='activeBtn' >About Partner</button>
                </div>
              
                
                <div>
                    <div className='basicData' onClick={()=>setShowDetails(1)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Basic Details 
                                {showDetails==1&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails==1?<Link className='text-dark' to="/partner/basic"><i class="fa-solid fa-pen-to-square"></i></Link> :<i class="fa-solid mt-1 fa-chevron-down"></i>}
                        </div>
                        {showDetails==1&&
                        <div className='d-flex'>
                            <div>
                                {multipleValue("Height",`4' 11"  - 5'4"`,"widh80")}
                                {multipleValue("Marital Status","Never Married","widh100")}
                                {multipleValue("Age","18 years - 28 years","widh80")}
                                {multipleValue("Mother Tongue","Hindi","widh100")}
                                {multipleValue("Country","India","widh80")}
                                {multipleValue("Residential Status","Doesn't Matter","widh100")}
                                {multipleValue("Location","Kolkata, West Bengal, India","widh80")}
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(2)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Education & Occupation
                                {showDetails==2&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails==2?<Link className='text-dark' to="/partner/eduction_occupation"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==2&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Hightest Degree","Doesn't Matter","widh100")}
                                {multipleValue("Occupation","Doesn't Matter","widh90")}
                                {multipleValue("Anuual Income","Doesn't Matter","widh100")}
                                
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(3)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Religion
                                {showDetails==3&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails==3?<Link className='text-dark' to="/partner/religion"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                        </div>
                        {showDetails==3&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Religion","Doesn't matter","widh80")}
                                {multipleValue("Mother Tongue","Doesn't matter","widh100")}
                                {multipleValue("Caste","Doesn't matter","widh80")}
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(4)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Lifestyle
                                {showDetails==4&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails==4?<Link className='text-dark' to="/partner/lifeStyle"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==4&&
                        <div className='d-flex mt-1'>
                            <div>
                                {multipleValue("Drinking Habits","Doesn't Matter","widh100")}
                                {multipleValue("Dietary Habits","Doesn't Matter","widh100")}
                                {multipleValue("Smoking Habits","Doesn't Matter","widh100")}
                                {multipleValue("Special Case","Doesn't Matter","widh100")}
                            </div>
                        </div>
                        }
                    </div>
                    <div className='basicData' onClick={()=>setShowDetails(5)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>About My Partner</h5>
                            {showDetails==5?<Link className='text-dark' to="/partner/about"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails==5&&
                        <div className='d-flex mt-1'>
                            <div>Expectations for marriage biodata matter a lot when choosing your life partner. Marriage is a bond of love and a promise of loyalty to your life partner. Always try to ask yourself what kind of personality you bear and what is your best preferences.
                            </div>
                        </div>
                        }
                    </div>
                </div>
               
            </div>

            {/* <RightAside /> */}
            <MobileAside />
        </div>

    </div>
)
}