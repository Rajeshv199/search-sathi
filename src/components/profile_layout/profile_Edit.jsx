import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link, Prompt } from 'react-router-dom'
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import RightAside from './right_aside';
import MobileAside from './MobileAside';

export default function Details() {

    const[showDetails,setShowDetails] = useState(-1);
    const[activeItem,setActiveItem] = useState(1);
    // function goBack() {
    //     window.history.back()
    // }


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
                    <button className='activeBtn' >About Me</button>
                    <button >Looking For</button>
                </div>
                <div className='basicData' onClick={()=>setShowDetails(1)}>
                    <div className='d-flex justify-content-between'>
                        <h5 className='m-0'>Basic Details 
                            {showDetails==1&&<div className='headerTxt'>Brief outline of personal information</div>}
                        </h5>
                        {showDetails==1?<i class="fa-solid fa-pen-to-square"></i>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                    </div>
                    {showDetails==1&&
                    <div className='d-flex'>
                        <div className='d-flex w-50 mr-2'>
                            <div>
                                <div className='widh90 d-flex justify-content-between my-2'>Height<span >:</span></div>
                                <div className='widh90 d-flex justify-content-between my-2'>Religion<span >:</span></div>
                                <div className='widh90 d-flex justify-content-between my-2'>Location<span >:</span></div>
                                <div className='widh90 d-flex justify-content-between my-2'>Birth Date<span >:</span></div>
                            </div>
                            <div className='px-2'>
                                <div className='my-2'>4' 11" (1.50 mts)</div>
                                <div className='my-2'>Hindu • Bari</div>
                                <div className='my-2'>Kolkata, West Bengal, India</div>  
                                <div className='my-2'>01 Feb 2000</div>
                            </div>
                        </div>
                        <div className='d-flex w-50 '>
                            <div className='d-blok'>
                                <div className='widh100 d-flex justify-content-between my-2'>Annual Incom<span >:</span></div>
                                <div className='widh100 d-flex justify-content-between my-2'>Marital Status<span >:</span></div>
                                <div className='widh100 d-flex justify-content-between my-2'>Mother Tongue<span >:</span></div>
                                
                            </div>
                            <div className='d-block px-2'>
                                <div className='my-2'>4' 11" (1.50 mts)</div>
                                <div className='my-2'>Hindu • Bari</div>
                                <div className='my-2'>Kolkata, West Bengal, India</div>
                            </div>
                        </div>
                        
                    </div>
                    }
                </div>
                <div className='basicData' onClick={()=>setShowDetails(2)}>
                    <div className='d-flex justify-content-between'>
                        <h5 className='m-0'>About Me
                            {showDetails==2&&<div className='headerTxt'>Describe yourself in a few words</div>}
                        </h5>
                        {showDetails==2?<i class="fa-solid fa-pen-to-square"></i>:<i class="fa-solid mt-1 fa-chevron-down"></i>}
                        
                    </div>
                    {showDetails==2&&
                    <div className='mt-2'>
                    Surprise Visits: If possible, surprise your partner with a visit. Even short, unexpected visits can be incredibly special and memorable.
                    Be Supportive: Show support during tough times. Be there to listen, offer advice, or simply provide comfort when your partner needs it.
                    Trust and Honesty: Build trust by being honest and open about your feelings,
                        
                    </div>
                    }
                </div>
            </div>

            {/* <RightAside /> */}
            <MobileAside />
        </div>

    </div>
)
}