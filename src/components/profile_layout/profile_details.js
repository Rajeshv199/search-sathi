import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link } from 'react-router-dom'
import './style.css'
import OffCanvas from '../offcanvas/off-canvas'
import LeftAside from '../aside/left_aside'
import RightAside from '../aside/right_aside'
import MobileAside from '../aside/MobileAside'

export default function Details() {



    function goBack() {
        window.history.back()
    }


    return <div className='profile-details'>

        <div className="profile-navbar">
            <div>
                <img src={logo} />
            </div>
            <div className='nav-logo'>
                <Link to="/profile_details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', width: '30px', border: '1px solid grey', borderRadius: '50%', color: "grey" }}>
                    <svg viewBox="0 0 24 24" width='20' height='20' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path d="m21.486 17.16-.01.01-2.863 2.887-.002.002a.558.558 0 0 1-.787 0l-2.865-2.89-.004-.004a2.12 2.12 0 0 1 2.76-3.207l.52.387.522-.385a2.131 2.131 0 0 1 2.76.196 2.12 2.12 0 0 1-.03 3.004Z" stroke="currentColor" stroke-width="1.75"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.546 9.127a5.562 5.562 0 0 1-1.898 2.805c.441.175.866.383 1.272.621a2.905 2.905 0 0 0-1.543 1.28A7.415 7.415 0 0 0 2.86 19.718a.932.932 0 0 1-1.853-.204 9.27 9.27 0 0 1 5.765-7.582 5.562 5.562 0 1 1 8.775-2.805ZM8.15 10.65a3.707 3.707 0 1 0 4.12-6.165 3.707 3.707 0 0 0-4.12 6.165Z" fill="currentColor"></path></svg>
                </Link>
                <Link to='/notification' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', width: '30px', border: '1px solid grey', borderRadius: '50%' }}>
                    <svg viewBox="0 0 24 24" width='20' height='20' fill="none" xmlns="http://www.w3.org/2000/svg" class=" text-neutral-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.75v-5c0-3.07-1.63-5.64-4.5-6.32V2.25h-3v2.18C7.64 5.11 6 7.67 6 10.75v5l-2 2v1h16v-1l-2-2Zm-6 6c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Zm-4-5h8v-6c0-2.48-1.51-4.5-4-4.5s-4 2.02-4 4.5v6Z" fill="#768493"></path></svg>
                </Link>
                <button style={{ border: '1px solid grey', borderRadius: '15px', backgroundColor: 'white' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg viewBox="0 0 24 24" width='35' height='24' color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="hidden h-6 w-6 text-neutral-500 lg:block"><path d="M11 16h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Zm10-8H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"></path></svg>
                </button>

                <div class="offcanvas offcanvas-end offSliderMain" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="sliderPadding">
                        <div class="offcanvas-header">
                            <div className='d-flex justify-content-around' >
                                <div className='user-icon'>
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                                    {/* <svg viewBox="0 0 600 500" height='55' width='55' fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1 h-full w-full text-white/40"><path d="M14.261 537.722c-2.886-42.898 18.145-71.219 62.132-82.603 32.028-8.33 63.507-17.771 93.198-32.348 13.471-6.525 25.98-14.438 38.214-23.184 11.684-8.33 13.058-20.547 13.883-33.042.413-6.664-.412-13.327-.687-20.13 0-1.666-.138-3.332-1.512-4.443-11.409-9.995-13.471-24.295-17.045-37.761-1.512-5.97-2.749-12.217-3.712-18.326-.824-5.137-1.374-9.718-8.247-10.135-3.712-.277-5.773-3.748-6.323-7.357-2.887-17.771-7.286-35.263-7.561-53.311-.137-5.97-1.374-12.495 7.836-13.189 2.886-.139 1.512-3.193 1.237-5.137-2.2-17.631-3.987-35.401-2.337-53.171 1.375-16.105 3.711-31.792 16.083-43.732 1.374-1.25 1.787-3.61 2.474-5.553 5.086-13.189 14.983-22.49 24.743-31.93.55-.556 1.924-1.39 2.199-1.25 4.949 4.442 7.973-.556 11.272-2.638 23.78-14.716 49.623-17.77 76.702-14.022 14.983 2.082 29.829 4.304 44.812 6.525 2.062.278 4.536-.416 3.162 3.748-.962 3.055 3.024 3.471 5.086 4.582 12.234 6.247 23.231 13.883 30.653 25.961 5.361 8.885 7.286 18.326 4.674 28.46-.825 3.054-.687 5.831.275 8.746 8.11 24.434 10.859 49.563 6.873 75.107-.275 2.083-1.237 4.165 2.062 4.582 5.773.555 6.873 5.136 6.598 9.579-.962 11.523-.962 23.046-3.712 34.43-1.512 6.247-2.886 12.633-3.436 19.019-.55 6.248-3.299 10.69-10.035 10.968-4.398.139-4.123 3.193-4.536 6.247-2.199 15.41-5.498 30.543-11.134 44.981-.825 2.083-1.787 4.304-3.024 6.248-11.959 18.325-7.56 37.345-1.787 56.087 2.062 6.802 9.072 10.134 14.708 14.022 35.19 24.017 74.366 38.455 115.329 48.451 16.357 4.026 32.303 8.608 45.774 19.436 15.945 12.773 25.155 29.016 25.842 49.84.138 5.553 1.65 10.968.688 16.521H20.31c-1.925-.139-3.987-.278-6.048-.278Z" fill="#dadfe5"></path></svg> */}
                                </div>
                                <div className='user-percent megtop'>100%</div>
                                <div className="text-detils">
                                    <h4>Hi Sunit !</h4>
                                    <p>UVA537 <a href='#'> Edit profile</a></p>
                                </div>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>Flat 60% off till 21 Nov</h6>
                            <button type="button" class="btn btn-danger" style={{ width: "80%" }}>Upgrad Now&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
                        </div>
                    </div>
                    <OffCanvas />
                </div>
            </div>
        </div>
        <div className='profile-detail-body'>
            <LeftAside />

            <div className='profile-box'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'inline' }} onClick={(e) => { e.preventDefault(); goBack() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 text-neutral-800"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"></path></svg>
                    </div>
                    <h2 style={{ width: '70%' }}>user profile details</h2>
                </div>
            </div>

            <RightAside />
            <MobileAside />
        </div>

    </div>
}