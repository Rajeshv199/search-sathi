import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import  "../assets/styles/App.css";
import  "../assets/styles/style.css";
import  "../assets/styles/styleMobile.css";
import  "../assets/styles/adminStyle.css";
import Index from "./index";
import User_registration from "../pages/registration/user_registrations";
// import LandingPage from "./landing_page/landing-page";
import MyMatches from "../pages/profile_layout/myMatches";
import Activity from "../pages/profile_layout/activity";
import Settings from "./features/settings";
import User_Login from "../pages/login/user_login";
import profileDetails from "../pages/registration/profileDetails";
import RegisterMobile from "../pages/registration/user-register-mobile";
import PersonalDetails from "../pages/registration/personalDetails";
import CareerDetailsMob from "../pages/registration/careerDetailsMobile";
import SocialDetails from "../pages/registration/socialDetails";
import VerificationMob from "../pages/registration/verificationMob";
import Help from "./features/help";
import Notification from "../pages/profile_layout/Notification";
import SearchBar from "./header/searchBar";
import SuccessStories from "./features/success_stories";
import ProfileEdit from "../pages/profile_layout/profile_Edit";
import PartnerEdit from "../pages/profile_layout/pertner_edit";
import Messenger from "../pages/profile_layout/messanger";
import Chat from "../pages/profile_layout/chat";
import UploadImg from "../pages/profile_layout/uploadImg";
import MatchesProfile from "../pages/profile_layout/matchesProfile";
import Basic from "../pages/profile_Edit/basic";
import About from "../pages/profile_Edit/about";
import Education from "../pages/profile_Edit/education";
import Career from "../pages/profile_Edit/career";
import Contact from "../pages/profile_Edit/contact";
import LifeStyle from "../pages/profile_Edit/lifeStyle";
import Family from "../pages/profile_Edit/family";
import BasicPartner from "../pages/profile_Edit/basic_partner";
import Eduction_Occupation from "../pages/profile_Edit/education_Occuption";
import Religion from "../pages/profile_Edit/religion";
import LifeStyle_Partner from "../pages/profile_Edit/lifeStyle_partner";
import About_Partner from "../pages/profile_Edit/about_partner";
import Search from "../pages/profile_layout/search";
import Block_Ignore from "./features/block_ignore";
import PhoneBook from "./features/phoneBook";
import Exclusive from "./features/exclusive";
import SettingVisibility from "./features/settingVisibility";

import UserLogout from "../pages/login/userLogout";

import AdminHome from "../pages/Admin/home";





class MainComponent extends Component{
    state={}

    componentDidMount(){
        // setTimeout(this.togglePopup, 2000);
    }
 

    
    render(){
        
        return(
            

            <div>
                <Switch>
                

                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/search" component={SearchBar}/>

                    <Route path="/registr/page5" component={VerificationMob}/>
                    <Route path="/registr/page4" component={SocialDetails}/>
                    <Route path="/registr/page3" component={CareerDetailsMob}/>
                    <Route path="/registr/page2" component={PersonalDetails}/>
                    <Route path="/registr/page1" component={RegisterMobile}/>

                    <Route path="/create-profile" component={profileDetails}/>  create-profile
                    <Route path="/user-registration" component={User_registration}/>

                    <Route path="/phone-book" component={PhoneBook} />
                    <Route path="/activity/blocked" component={Block_Ignore} />
                    <Route path="/notification" component={Notification} />

                    <Route path="/partner/about" component={About_Partner} />
                    <Route path="/partner/lifeStyle" component={LifeStyle_Partner} />
                    <Route path="/partner/religion" component={Religion} />
                    <Route path="/partner/eduction-occupation" component={Eduction_Occupation} /> //-
                    <Route path="/basic-details" component={BasicPartner} /> 
                    <Route path="/my-partner" component={PartnerEdit} />

                    <Route path="/update/profile/my-family" component={Family} />  my-family
                    <Route path="/update/profile/my-life-Style" component={LifeStyle} /> my-life-Style
                    <Route path="/update/profile/my-contact" component={Contact} /> my-contact
                    <Route path="/update/profile/my-career" component={Career} /> my-career
                    <Route path="/update/profile/my-education" component={Education} /> my-education
                    <Route path="/update/profile/about-me" component={About} /> about-me
                    <Route path="/update/profile/basic-details" component={Basic} />   basic-details
                    <Route path="/update/profile/upload-photo" component={UploadImg} />
                    <Route path="/view/my-profile" component={ProfileEdit} /> 

                    <Route path="/view/profile/my-matches" component={MatchesProfile} /> // view/profile/my-matches
                    <Route path="/chat" component={Chat} /> 
                    <Route path="/search/by-criteria" component={Search} />// search/by-criteria
                    <Route path="/my-activity" component={Activity} /> //my-activity
                    <Route path="/view/my-matches-list" component={MyMatches} />//view/my-matches-list
                    <Route path="/messenger" component={Messenger} />

                    <Route path="/settingVisibility" component={SettingVisibility}/>
                    <Route path="/ydexclusive" component={Exclusive}/> //save/consultation
                    <Route path="/settings" component={Settings}/>
                    <Route path="/features/help" component={Help}/> 
                    <Route path="/success/story" component={SuccessStories} />

                    <Route path="/login" component={User_Login}/>
                    <Route path="/forgotPass" component={UserLogout}/>
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                

                
            </div>
        );
    }

}
export default MainComponent;
