import { useState } from "react";
import Footer from "../footer/footer"
import { Link } from "react-router-dom"
import yogjodiLogo from "../image/YogJodiLogo.png";
import BrowseContent from "../header/browseContent";


export default function Help() {
    const[showList,setShowList] = useState(1);

    return (
        <div className="help-main" style={{ position: 'relative' }}>
        <header className="coverImg">
            <div className="searchWid">
                <div>
                    <Link className="yogjodi-logo" to="/">
                        <img height="100%" width="100%" alt="logo"  src={yogjodiLogo}/>
                    </Link>
                </div>
                <div className="menu-navbar">
                    <div className="menupl">
                        <ul className="menu-list list-inline">
                            <li>
                                <div className="browse-menu pb-4" >BROWSE PROFILES BY<i className="fa-solid fa-chevron-down fa-sm"></i></div>
                                <div className="contentHome">
                                    <div className="browse-link-list">
                                        <div className="mother_Tongue" onMouseEnter={()=>setShowList(1)}>Mother Tongue</div>
                                        <div className="caste" onMouseEnter={()=>setShowList(2)}>Caste</div>
                                        <div className="religion" onMouseEnter={()=>setShowList(3)}>Religion</div>
                                        <div className="city" onMouseEnter={()=>setShowList(4)}>City</div>
                                        <div className="occupation" onMouseEnter={()=>setShowList(5)}>Occupation</div>
                                        <div className="state" onMouseEnter={()=>setShowList(6)}>State</div>
                                        <div className="NRI" onMouseEnter={()=>setShowList(7)}>NRI</div>
                                        <div className="college" onMouseEnter={()=>setShowList(8)}>College</div>
                                    </div>
                                    <div className="browseContent">
                                        <BrowseContent showList={showList}/>
                                    </div>
                                </div>
                            </li>
                            <li className="search-ml" >
                                <div className="search-menu"><Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link></div>
                                    
                            </li>
                            <li className="search-ml">
                                <Link to="/features/help">HELP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-navbar--second">
                    <div className={"signupMenu2"}>
                        <div className="loginPart" >LOGIN <i className="login-icon"></i></div>
                        <Link to="/user_registration">
                            <div className="registerPart2" > REGISTER FREE</div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        
        <div className="help-body">
       
            <div className="help-body-sub" >
                <h4>How can we help you?</h4>
                <br />
                <div class="input-group w-75 m-auto">
                    <input type="text" class="form-control" placeholder="What can we help with?" aria-describedby="button-addon2" />
                    <button class="btn btn-danger" type="button" id="button-addon2">Search</button>
                </div><br />
                <h4 className="text-start mt-4">Categories</h4>
           
                <div className="help-body-list" >
                    <ul >
                        <li>
                            <p>Getting Started</p>
                            <p  className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Search Profile</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Membership</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Fraud Alert</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Common Issue</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Getting Response</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Managing your Profie</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Video Profiles</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Introducing Free Chat on Yogjodi</p>
                            <p style={{color:'red'}}>View all questions</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Privacy Settings</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Initiate Contact</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Login/Password</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Help Center/Customer Support</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Changing Basic details</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Add On Services</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>JSExclusive</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Match Hour</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                        <br />
                        <li>
                            <p>Profile Verification</p>
                            <p className="text-danger">View all questions</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <Footer />
        <div className="copyRight"> All rights reserved © 2024 Yogjodi Internet Services. </div>
    </div>
    )
}