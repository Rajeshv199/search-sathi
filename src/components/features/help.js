import Footer from "./.././../footer/footer"
import background from './.././../asset/header-inner1.jpg'
import './style.css'
import logo from "./.././../asset/logo1.png"
import { Link } from "react-router-dom"
import userVector from './../../asset/user-vector.png'


export default function Help() {


    return <div className="help-main" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div style={{ zIndex: '-1', backgroundColor: 'white', width: '100%' }}>
                <img src={background} width={'100%'} />
            </div>
            <div className="help-nav">
                <div className="help-nav-child1">
                    <img src={logo} />
                </div>
                <div className="help-nav-child2">
                    <Link to={"/landing"}><p>MATCHES</p></Link>
                    <p>ACTIVITY</p>
                    <p>SEARCH</p>
                    <p>UPGREAD</p>
                    <p>HELP</p>
                </div>
                <div className="help-nav-child3"  >
                    <Link to="/notification">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                        </svg>
                    </Link>
                    <div >
                        <img src={userVector} height={40} width={40} style={{ border: '1px', borderRadius: '50%' }} />
                    </div>
                </div>

            </div>
        </div>
        <div className="help-body">
            <div className="help-body-sub" >
                <h3 style={{ color: 'rgb(143, 142, 142)' }}>How can we help you?</h3>
                <br />
                <div class="input-group mb-1 w-75">
                    <input type="text" class="form-control" placeholder="What can we help with?" aria-describedby="button-addon2" />
                    <button class="btn btn-danger" type="button" id="button-addon2">Button</button>
                </div><br /><br />
                <h4 style={{ width: '90%', color: 'rgb(100, 100, 100)' }}><b>Categories</b></h4>
                <br />
                <div className="help-body-list" >
                    <ul >
                        <li>
                            <p>Getting Started</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Search Profile</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Membership</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Fraud Alert</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Common Issue</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Getting Response</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Managing your Profie</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Video Profiles</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Introducing Free Chat on Jeevansathi</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Privacy Settings</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Initiate Contact</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Login/Password</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Help Center/Customer Support</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Changing Basic details</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Add On Services</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>JSExclusive</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Match Hour</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Profile Verification</p>
                            <p style={{ color: 'red' }}>View all questions</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <Footer />

        <div style={{ width: '100%', height: '40px', backgroundColor: '#e1e4e7' }}>
            <p style={{ textAlign: 'center', paddingTop: '10px' }}>All rights reserved © 2016 Jeevansathi Internet Services.</p>
        </div>
    </div>
}