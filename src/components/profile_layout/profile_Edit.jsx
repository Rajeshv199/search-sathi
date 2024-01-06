import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link, Prompt } from 'react-router-dom'
import './style.css';

import ProfileHeader from './profileHeader';
import RightAside from './right_aside'
import MobileAside from './MobileAside'

export default function Details() {

    const[activeItem,setActiveItem] = useState(1);
    // function goBack() {
    //     window.history.back()
    // }


    return (
    <div className='profile-details'>
        <ProfileHeader/>

        
        <div className='profile-detail-body'>

            <div className="profileDetils">
                <div className="d-flex border-bottom" >
                    <div className='user-icon' >
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                    </div>
                    <div className='user-percent'>100%</div>
                    <div className="text-detils mb-3">
                        <h4 style={{fontFamily:'sans-serif'}}>Hi Sunit!</h4>
                        <p>UVA537 <a href='#'>Edit profile</a></p>
                    </div>
                </div>
                <br />
                <div className='left-side'>
                    <Link to="/profile_details">
                        <div className="left-side-items">
                            <h6>Matches</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                    </Link>
                    <div className="left-side-items">
                        <h6>Activity</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div className="left-side-items">
                        <h6>Search</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div className="left-side-items">
                        <h6>Messanger</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                </div>
            </div>

            <div className='profile-box2'>
                <div className='prfile-panel'>
                    <div>

                    </div>

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
              
               
            </div>

            <RightAside />
            <MobileAside />
        </div>

    </div>
)
}