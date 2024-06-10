import { useState } from "react";
import Footer from "../footer/footer"
import { Link } from "react-router-dom"
import yogjodiLogo from "../../assets/images/YogJodiLogo.png";
import BrowseContent from "../header/browseContent";
import Questions from "../features/questions";


import LoginForm from '../../pages/login/user_login';
import UserRegisterPop from "../../pages/registration/userRegisterPop";

export default function Help() {
    const[showList,setShowList] = useState(1);
    const[quesMark,setQuesMark] = useState(0);
    const[quesTitle,setQuesTitle] = useState("");
    const[loginPgOpen,setLoginPgOpen] = useState(false);
    const[regiPgopen,setRegiPgopen] = useState(false);

    function handelloginPg(){
        !loginPgOpen?setLoginPgOpen(true):setLoginPgOpen(false);
        setRegiPgopen(false);
    }
    function handelRegiPg(){
        !regiPgopen?setRegiPgopen(true):setRegiPgopen(false);
        setLoginPgOpen(false);
    }

    return (
        <div className="help-main">
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
                                <div className="search-menu"><Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link></div>
                                    
                            </li>
                            <li className="search-ml">
                                <Link to="/features/help">HELP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-navbar--second">
                    <div className={"signupMenu2"}>
                        <div className="loginPart" onClick={()=>setLoginPgOpen(true)}>LOGIN <i className="login-icon"></i></div>
                        <Link to="/user_registration">
                            <div className="registerPart2" > REGISTER FREE</div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        
        <div className="help-body">
    
            <div className="help-body-sub" >
                {quesMark<=0&&
                <div>
                    <h4>How can we help you?</h4>
                        <br />
                    <div className="input-group w-75 m-auto">
                        <input type="text" className="form-control" placeholder="What can we help with?" aria-describedby="button-addon2" />
                        <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
                    </div><br />
                    <h4 className="text-start mt-4">Categories</h4>
           
                    <div className="help-body-list" >
                        <ul >
                            <li>
                                <p>Getting Started</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(1);setQuesTitle("Getting Started")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Search Profile</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(2);setQuesTitle("Search Profile")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Membership</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(3);setQuesTitle("Membership")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Fraud Alert</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(4);setQuesTitle("Fraud Alert")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Common Issue</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(5);setQuesTitle("Common Issue")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Getting Response</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(6);setQuesTitle("Getting Response")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Managing your Profie</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(7);setQuesTitle("Managing your Profie")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Video Profiles</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(8);setQuesTitle("Video Profiles")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Introducing Free Chat on Yogjodi</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(9);setQuesTitle("Introducing Free Chat on Yogjodi")}}>View all questions </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Privacy Settings</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(10);setQuesTitle("Privacy Settings")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Initiate Contact</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(11);setQuesTitle("Initiate Contact")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Login/Password</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(12);setQuesTitle("Login/Password")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Help Center/Customer Support</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(13);setQuesTitle("Help Center/Customer Support")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Changing Basic details</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(14);setQuesTitle("Changing Basic details")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Add On Services</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(15);setQuesTitle("Add On Services")}}>View all questions </span>
                            </li>
                            <br />
                            
                            <li>
                                <p>Match Hour</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(16);setQuesTitle("Match Hour")}}>View all questions </span>
                            </li>
                            <br />
                            <li>
                                <p>Profile Verification</p>
                                <span className="text-danger" onClick={()=>{setQuesMark(17);setQuesTitle("Profile Verification")}}>View all questions </span>
                            </li>
                        </ul>

                    </div>
                </div>
                }
                {quesMark>=1&&
                <div>
                    <small onClick={()=>setQuesMark(0)}>Back</small>
                    <Questions quesMark={quesMark} quesTitle={quesTitle}/>
                    
                </div>
                }
                
                
            </div>
        </div>
        <Footer />
        <div className="copyRight"> All rights reserved © 2024 Yogjodi Internet Services. </div>

        <div className="">
            {loginPgOpen &&
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={handelloginPg}></span>
                    <LoginForm/>
                    <div className="loginFrm2">
                        <p>New on Yogjodi?</p>
                        <div className="mt-3">
                            <button className="registerBtn" onClick={handelRegiPg}>REGISTER FREE</button>
                        </div>
                    </div>
                </div>
            </div>
            }
            {regiPgopen&&
            <div className="popup-box">
                <div className="box2">
                    <span className="close-icon" onClick={handelRegiPg} ></span>
                    <div className="registerFields">
                        <UserRegisterPop/>
                        <div className="login_Button" onClick={handelloginPg}> Login</div>
                    </div>
                </div>
            </div>
            }
        </div>
    </div>
    )
}