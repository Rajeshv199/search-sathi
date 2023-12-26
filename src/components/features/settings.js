import { useState } from 'react'
import logo from './.././../asset/logo1.png'
import { Link } from 'react-router-dom'
import './style.css'
import OffCanvas from '../offcanvas/off-canvas'
import LeftAside from '../aside/left_aside'
import RightAside from '../aside/right_aside'

export default function Settings() {


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

            <div className="setting-box">
                <div className='settings-head'>
                    <div style={{ display: 'inline' }} onClick={(e) => { e.preventDefault(); goBack() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 text-neutral-800"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"></path></svg>
                    </div>
                    <div style={{ display: 'inline', marginLeft: '35%', textAlign: 'center' }}>
                        <h4 >Account & settings</h4>
                        <p style={{ color: 'rgb(156, 156, 156' }} className='hide-mobile-update'>Update these details to get suitable matches</p>
                    </div>
                </div>
                <br /><br />
                <div className='settings-body'>
                    <br />
                    <p><small style={{ float: "left", margin: "-10px 15px" }}>Manage Account</small></p><br /><br />
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div className='settings-item'>
                            <div className='settingts-item-element'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                                <h5 style={{ paddingLeft: '7%' }}>Privacy Settings</h5>
                            </div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </div>
                        <br />
                        <div className='settings-item'>
                            <div className='settingts-item-element'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                                </svg>
                                <h5 style={{ paddingLeft: '7%' }}>Alert Manager</h5>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </div>
                        <br />
                        <div className='settings-item'>
                            <div className='settingts-item-element'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
                                </svg>
                                <h5 style={{ paddingLeft: '7%' }}>Hide Profile</h5>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </div>
                        <br />
                        <div className='settings-item'>
                            <div className='settingts-item-element'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                                <h5 style={{ paddingLeft: '7%' }}>Delete Profile</h5>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </div>
                        <br />
                        <div className='settings-item'>
                            <div className='settingts-item-element'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                                </svg>

                                <h5 style={{ paddingLeft: '7%' }}>Change Password</h5>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

            <RightAside />
        </div>

    </div>
}