import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link, Prompt } from 'react-router-dom'
import './style.css';

import ProfileHeader from './profileHeader';
import Leftaside from './left_aside';
import RightAside from './right_aside';
import MobileAside from './MobileAside';

export default function Details() {

    const[activeItem,setActiveItem] = useState(1);
    // function goBack() {
    //     window.history.back()
    // }


    return (
    <div className='profile-details'>
        <ProfileHeader/>

        
        <div className='profile-detail-body'>

           <Leftaside/>

            <div className='profile-box'>
                <div className='msgHeader'>
                    <Link to="/profile_details" className='text-dark'><i class="fa-solid fa-angle-left fa-lg py-2 my-1"></i></Link>
                    <div className='text-center d-flex mx-4 justify-constent-center'>
                        <img className='proImg' width="40" height="40" src='https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'/>
                        <div className='customText'>
                            <div><Link className='text-dark'>Varsha Kumari</Link></div>
                            <span>offline</span>
                        </div>
                    </div>
                    <div className='callMenu'>
                        <button><i class="fa-solid fa-phone"></i></button>
                        <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                </div>
                <div className='pdding32 heiht400'>
                    {/* <div className='my-3 d-flex'>
                        <Link className='text-dark'><i class="fa-solid fa-angle-left fa-lg py-2 my-1"></i></Link>
                        <div className='text-center d-flex mx-4 justify-content-center'>
                            <img className='proImg' width="40" height="40" src='https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'/>
                            <div className='customText'>
                                <div><Link className='text-dark'>Varsha Kumari</Link></div>
                                <span>offline</span>
                            </div>
                        </div>
                        <div className='callMenu'>
                            <button><i class="fa-solid fa-phone"></i></button>
                            <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                    </div> */}

                    
                    <div className='mb-3'>Sending message will also send this member your interest</div>
      

                    
                
                    
                </div>
                <div className='msgContainer'>
                    <div className='msgInput'>
                        <input type='text' placeholder='Type a message'/>
                        <button className='border-0'><span class="material-symbols-outlined">send</span></button>
                    </div>
                </div>
            
               
            </div>

            <MobileAside />
        </div>

    </div>
)
}