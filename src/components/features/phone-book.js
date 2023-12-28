<<<<<<< HEAD
import { useState } from 'react'
import logo from './.././../asset/logo1.png';
import { Link } from 'react-router-dom';
import OffCanvas from '../offcanvas/off-canvas';
import LeftAside from '../profile_layout/left_aside';
import RightAside from '../profile_layout/right_aside';
=======
import logo from './.././../asset/logo1.png'
import { Link } from 'react-router-dom'
import './style.css'
import OffCanvas from '../offcanvas/off-canvas'
import LeftAside from '../aside/left_aside'
import RightAside from '../aside/right_aside'
>>>>>>> f3081cdaa41cb900742eae0aabb2773ceea25fb0


export default function PhoneBook() {



    function goBack() {
        window.history.back()
    }

    return <div className='features-main'>

        <div className="features-navbar">
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

                <div style={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px",width:'350px' }} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div style={{ paddingBottom: "10px", borderBottom: '1px solid #f0edee', margin: "0px 15px" }}>
                        <div class="offcanvas-header">
                            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                                <div className='user-icon' >
                                    <svg viewBox="0 0 600 500" height='55' width='55' fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1 h-full w-full text-white/40"><path d="M14.261 537.722c-2.886-42.898 18.145-71.219 62.132-82.603 32.028-8.33 63.507-17.771 93.198-32.348 13.471-6.525 25.98-14.438 38.214-23.184 11.684-8.33 13.058-20.547 13.883-33.042.413-6.664-.412-13.327-.687-20.13 0-1.666-.138-3.332-1.512-4.443-11.409-9.995-13.471-24.295-17.045-37.761-1.512-5.97-2.749-12.217-3.712-18.326-.824-5.137-1.374-9.718-8.247-10.135-3.712-.277-5.773-3.748-6.323-7.357-2.887-17.771-7.286-35.263-7.561-53.311-.137-5.97-1.374-12.495 7.836-13.189 2.886-.139 1.512-3.193 1.237-5.137-2.2-17.631-3.987-35.401-2.337-53.171 1.375-16.105 3.711-31.792 16.083-43.732 1.374-1.25 1.787-3.61 2.474-5.553 5.086-13.189 14.983-22.49 24.743-31.93.55-.556 1.924-1.39 2.199-1.25 4.949 4.442 7.973-.556 11.272-2.638 23.78-14.716 49.623-17.77 76.702-14.022 14.983 2.082 29.829 4.304 44.812 6.525 2.062.278 4.536-.416 3.162 3.748-.962 3.055 3.024 3.471 5.086 4.582 12.234 6.247 23.231 13.883 30.653 25.961 5.361 8.885 7.286 18.326 4.674 28.46-.825 3.054-.687 5.831.275 8.746 8.11 24.434 10.859 49.563 6.873 75.107-.275 2.083-1.237 4.165 2.062 4.582 5.773.555 6.873 5.136 6.598 9.579-.962 11.523-.962 23.046-3.712 34.43-1.512 6.247-2.886 12.633-3.436 19.019-.55 6.248-3.299 10.69-10.035 10.968-4.398.139-4.123 3.193-4.536 6.247-2.199 15.41-5.498 30.543-11.134 44.981-.825 2.083-1.787 4.304-3.024 6.248-11.959 18.325-7.56 37.345-1.787 56.087 2.062 6.802 9.072 10.134 14.708 14.022 35.19 24.017 74.366 38.455 115.329 48.451 16.357 4.026 32.303 8.608 45.774 19.436 15.945 12.773 25.155 29.016 25.842 49.84.138 5.553 1.65 10.968.688 16.521H20.31c-1.925-.139-3.987-.278-6.048-.278Z" fill="#dadfe5"></path></svg>
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    <h2>Hi Sunit!</h2>
                                    <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
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
        <div id="landing-body">

            <LeftAside />

            <div className='phone-box'>
                <div className='settings-head'>
                    <div style={{ display: 'inline' }} onClick={(e) => { e.preventDefault(); goBack() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 text-neutral-800"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"></path></svg>
                    </div>
                    <div style={{ display: 'inline', marginLeft: '35%', textAlign: 'center' }}>
                        <h4 ><b>Phonebook</b></h4>
                    </div>
                </div>
                <br /><br />
                <div className='phone-body'>
                    <div style={{ height: '144px', width: '144px' }}>
                        <svg viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-16 h-36 w-36">
                            <circle cx="74" cy="74" r="74" fill="#F3F8FF"></circle>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.514 143H2.01C.898 143 0 142.101 0 141.014V77.477c0-1.112.898-2.01 2.01-2.01h109.504c1.111 0 1.986.898 1.986 2.01v63.537a1.983 1.983 0 0 1-1.986 1.986Z" fill="#156CDD"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.75 75.467H2.01c-1.112 0-2.01.898-2.01 2.01v63.537C0 142.101.898 143 2.01 143h54.74V75.467Z" fill="#0795FF"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m56.75 140.635-46.203-14.117a1.973 1.973 0 0 1-1.396-1.868V54.965c0-1.395 1.42-2.34 2.696-1.82L56.751 71.54v69.094Z" fill="#DFE8F4"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m56.75 140.635 46.228-14.117a1.95 1.95 0 0 0 1.371-1.868V54.965a1.957 1.957 0 0 0-2.695-1.82L56.75 71.54v69.094Z" fill="#CCD8E5"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m20.005 82.23 25.915 9.269v-3.216l-25.916-9.27v3.216ZM20.005 93.793l25.915 8.606v-3.215l-25.916-8.631v3.24ZM20.005 104.763l25.915 8.513v-3.216l-25.916-8.512v3.215Z" fill="#fff"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m93.52 82.23-25.917 9.269v-3.216l25.917-9.27v3.216ZM93.52 93.793l-25.917 8.606v-3.215l25.917-8.631v3.24ZM93.52 104.763l-25.917 8.513v-3.216l25.917-8.512v3.215ZM139.288 83.733a4.012 4.012 0 0 1-5.692 0l-12.197-12.192a4.02 4.02 0 0 1 0-5.687 4.011 4.011 0 0 1 5.692 0l12.197 12.192a4.02 4.02 0 0 1 0 5.687Z" fill="#DFE8F4"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.478 66.782c-8.114-6.284-8.112-18.443.003-24.727 5.53-4.285 13.455-4.285 18.985 0 8.114 6.284 8.113 18.454-.001 24.738-5.532 4.273-13.457 4.273-18.987-.011Z" fill="#F3F8FF"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.478 66.782c-8.114-6.284-8.112-18.443.003-24.727 5.531-4.285 13.455-4.285 18.985 0 8.115 6.284 8.113 18.454-.001 24.738-5.532 4.273-13.457 4.273-18.987-.011Zm38.735 11.187-6.297-6.295c-2.375-2.375-3.244-5.942-2.022-9.067 3.095-7.93 1.536-17.26-4.696-23.754-8.3-8.647-22.31-9.189-31.228-1.182-9.654 8.669-9.954 23.589-.898 32.644 6.496 6.505 16.002 8.173 24.06 5.036 3.155-1.225 6.747-.331 9.141 2.065l6.323 6.317a4.03 4.03 0 0 0 6.225-.651c1.062-1.601.75-3.755-.608-5.113Z" fill="#DFE8F4"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m135.459 74.214-5.692 5.698 3.829 3.821a4.012 4.012 0 0 0 5.692 0 4.02 4.02 0 0 0 0-5.687l-3.829-3.832Z" fill="#156CDD"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m135.459 74.214-5.692 5.698 1.726 1.723 5.691-5.699-1.725-1.722ZM116.563 56.702l-.787-.787a2.743 2.743 0 0 0-3.872 0 .948.948 0 0 0-.273.663.927.927 0 0 1-.794.924 5.163 5.163 0 0 1-5.773-5.774c.058-.458.466-.793.928-.793a.925.925 0 0 0 .659-.273 2.737 2.737 0 0 0 0-3.872l-.787-.787c-1.111-1.111-2.999-.98-3.861.335-.898 1.37-1.35 2.999-1.236 4.652a11.61 11.61 0 0 0 3.386 7.423 11.61 11.61 0 0 0 7.423 3.386 7.517 7.517 0 0 0 4.652-1.232c1.315-.863 1.449-2.75.335-3.865Z" fill="#0795FF"></path>
                        </svg>
                    </div><br /><br />
                    <div><b>Discover your viewed contacts here</b></div>
                    <div style={{ width: '75%', textAlign: 'center' }}>Find contact details of your matches &amp; get to know them better with a membership</div>
                    <div style={{ color: 'red' }}>Upgrade Membership</div>
                </div>
            </div>

            <RightAside />

        </div>

    </div>
}