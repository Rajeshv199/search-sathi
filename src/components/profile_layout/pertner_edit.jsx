import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import MobileAside from './MobileAside';

export default function Partner_Edit() {

    const[showDetails,setShowDetails] = useState(1);
  
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
                        <span><i class="fa-solid fa-image px-1"></i>Upload</span>
                        <span><i class="fa-solid fa-image px-1"></i>10 Images</span>
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
                <Link to="/profile_edit"><button >About Me</button></Link>
                <Link to="/profile_edit"><button >About Family</button></Link>
                    <button className='activeBtn' >About Partner</button>
                </div>
              
                
                <div>
                    <div className='basicData' onClick={()=>setShowDetails(1)}>
                        <div className='d-flex justify-content-between'>
                            <h5 className='m-0'>Basic Details 
                                {showDetails===1&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails===1?<Link className='text-dark' to="/partner/basic"><i class="fa-solid fa-pen-to-square"></i></Link> :<i class="fa-solid mt-1 fa-chevron-down"></i>}
                        </div>
                        {showDetails===1&&
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
                                {showDetails===2&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails===2?<Link className='text-dark' to="/partner/eduction_occupation"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===2&&
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
                                {showDetails===3&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails===3?<Link className='text-dark' to="/partner/religion"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                        </div>
                        {showDetails===3&&
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
                                {showDetails===4&&<div className='headerTxt'>Update these details to get suitable matches</div>}
                            </h5>
                            {showDetails===4?<Link className='text-dark' to="/partner/lifeStyle"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===4&&
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
                            {showDetails===5?<Link className='text-dark' to="/partner/about"><i class="fa-solid fa-pen-to-square"></i></Link>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                            
                        </div>
                        {showDetails===5&&
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