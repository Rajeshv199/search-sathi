import { useState } from 'react'

import yogjodiLogo from "../image/YogJodiLogo.png";
import { Link } from 'react-router-dom'
import './style.css';
export default function ProfileHeader() {


    return (

        <div className="profile-navbar">    
            <div className='px-3'>
                <Link to="/"><img src={yogjodiLogo} /></Link>
            </div>
            <div className="nav-logo">
                <Link to="/profile_edit">
                    <svg viewBox="0 0 24 24" width='20' height='20' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path d="m21.486 17.16-.01.01-2.863 2.887-.002.002a.558.558 0 0 1-.787 0l-2.865-2.89-.004-.004a2.12 2.12 0 0 1 2.76-3.207l.52.387.522-.385a2.131 2.131 0 0 1 2.76.196 2.12 2.12 0 0 1-.03 3.004Z" stroke="currentColor" stroke-width="1.75"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.546 9.127a5.562 5.562 0 0 1-1.898 2.805c.441.175.866.383 1.272.621a2.905 2.905 0 0 0-1.543 1.28A7.415 7.415 0 0 0 2.86 19.718a.932.932 0 0 1-1.853-.204 9.27 9.27 0 0 1 5.765-7.582 5.562 5.562 0 1 1 8.775-2.805ZM8.15 10.65a3.707 3.707 0 1 0 4.12-6.165 3.707 3.707 0 0 0-4.12 6.165Z" fill="currentColor"></path></svg>
                </Link>
                <Link to='/notification'>
                    <svg viewBox="0 0 24 24" width='20' height='20' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.75v-5c0-3.07-1.63-5.64-4.5-6.32V2.25h-3v2.18C7.64 5.11 6 7.67 6 10.75v5l-2 2v1h16v-1l-2-2Zm-6 6c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Zm-4-5h8v-6c0-2.48-1.51-4.5-4-4.5s-4 2.02-4 4.5v6Z" fill="#768493"></path></svg>
                </Link>
                
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg viewBox="0 0 24 24" width='35' height='24' color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="hidden h-6 w-6 text-neutral-500 lg:block"><path d="M11 16h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Zm10-8H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"></path></svg>
                </button>
            </div>
            <div class="offcanvas offcanvas-end offSliderMain" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="sliderPadding">
                    <div class="offcanvas-header">
                        <div className='d-flex justify-content-around' >
                            <div className='user-icon'>
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" /> 
                            </div>
                            <div className='user-percent megtop'>100%</div>
                            <div className="text-detils">
                                <h4>Hi Abc !</h4>
                                <p>UVA537 <a href='#'> Edit profile</a></p>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="upgrdBtn">
                        <h6>Flat 60% off till 21 Nov</h6>
                        <button type="button" class="">Upgrade Membership</button>
                        
                    </div>
                </div>
                <div className="offcanvas-body" >
                    <div>
                        <div className="upgrad-MenuList" >
                            <h6>Partner Preferencs</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                        <div className="upgrad-MenuList" >
                            <h6>Blocked/Ignored Profiles</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                        <Link to='/features/phone-book'>
                            <div className="upgrad-MenuList" >
                                <h6>Phonebook</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </Link>
                        <Link to="/settings">
                            <div className="upgrad-MenuList" >
                                <h6>Account & Setting</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </Link>
                        <Link to="/features/help">
                            <div className="upgrad-MenuList" >
                                <h6>Help & Support</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </Link>
                        <Link to="/success/story" >
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px",color:'black' }}>
                                <h6>Success Stories</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </Link>
                        <div >
                            <h6>Video tour</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                    </div>
                    <br />
                    <p onClick={() => { }}>Logout</p>
                </div>
            </div>
        </div>

    )
}