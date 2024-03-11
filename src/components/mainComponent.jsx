import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import  "./styles/adminStyle.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registrations";
// import LandingPage from "./landing_page/landing-page";
import MyMatches from "./profile_layout/myMatches";
import Activity from "./profile_layout/activity";
import Settings from "./features/settings";
import User_Login from "./../components/login/user_login";
import profileDetails from "./../components/registration/profileDetails";
import RegisterMobile from "./../components/registration/user-register-mobile";
import PersonalDetails from "./../components/registration/personalDetails";
import CareerDetailsMob from "./../components/registration/careerDetailsMobile";
import SocialDetails from "./../components/registration/socialDetails";
import VerificationMob from "./../components/registration/verificationMob";
import Help from "./features/help";
import Notification from "./profile_layout/Notification";
import SearchBar from "./header/searchBar";
import SuccessStories from "./features/success_stories";
import ProfileEdit from "./profile_layout/profile_Edit";
import PartnerEdit from "./profile_layout/pertner_edit";
import Messenger from "./profile_layout/messanger";
import Chat from "./profile_layout/chat";
import UploadImg from "./profile_layout/uploadImg";
import MatchesProfile from "./profile_layout/matchesProfile";
import Basic from "./profile_Edit/basic";
import About from "./profile_Edit/about";
import Education from "./profile_Edit/education";
import Career from "./profile_Edit/career";
import Contact from "./profile_Edit/contact";
import LifeStyle from "./profile_Edit/lifeStyle";
import Family from "./profile_Edit/family";
import BasicPartner from "./profile_Edit/basic_partner";
import Eduction_Occupation from "./profile_Edit/education_Occuption";
import Religion from "./profile_Edit/religion";
import LifeStyle_Partner from "./profile_Edit/lifeStyle_partner";
import About_Partner from "./profile_Edit/about_partner";
import Search from "./profile_layout/search";
import Block_Ignore from "./features/block_ignore";
import PhoneBook from "./features/phoneBook";
import Exclusive from "./features/exclusive";
import SettingVisibility from "./features/settingVisibility";
import UserLogout from "./login/userLogout";
import Demo from "./demo";

import AdminHome from "./Admin/home";





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


                    <Route path="/test" component={Demo}/>
                    <Route path="/search" component={SearchBar}/>

                    <Route path="/registr/page5" component={VerificationMob}/>
                    <Route path="/registr/page4" component={SocialDetails}/>
                    <Route path="/registr/page3" component={CareerDetailsMob}/>
                    <Route path="/registr/page2" component={PersonalDetails}/>
                    <Route path="/registr/page1" component={RegisterMobile}/>
                    <Route path="/profile" component={profileDetails}/>
                    <Route path="/user_registration" component={User_registration}/>

                    <Route path="/phone-book" component={PhoneBook} />
                    <Route path="/activity/blocked" component={Block_Ignore} />
                    <Route path="/notification" component={Notification} />


                    <Route path="/partner/about" component={About_Partner} />
                    <Route path="/partner/lifeStyle" component={LifeStyle_Partner} />
                    <Route path="/partner/religion" component={Religion} />
                    <Route path="/partner/eduction_occupation" component={Eduction_Occupation} />
                    <Route path="/partner/basic" component={BasicPartner} />
                    <Route path="/edit/partner" component={PartnerEdit} />

                    <Route path="/profile_edit/family" component={Family} />
                    <Route path="/profile_edit/lifeStyle" component={LifeStyle} />
                    <Route path="/profile_edit/contact" component={Contact} />
                    <Route path="/profile_edit/career" component={Career} />
                    <Route path="/profile_edit/education" component={Education} />
                    <Route path="/profile_edit/about" component={About} />
                    <Route path="/profile_edit/basic" component={Basic} />
                    <Route path="/mymatches/profile" component={MatchesProfile} />
                    <Route path="/chat" component={Chat} />
                    <Route path="/profile_edit/upload-photo" component={UploadImg} />
                    <Route path="/profile_edit" component={ProfileEdit} />
                    <Route path="/byCriteria" component={Search} />
                    <Route path="/activity" component={Activity} />
                    <Route path="/mymatches" component={MyMatches} />
                    <Route path="/messenger" component={Messenger} />


                    <Route path="/settingVisibility" component={SettingVisibility}/>
                    <Route path="/ydexclusive" component={Exclusive}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/features/help" component={Help}/> 
                    <Route path="/success/story" component={SuccessStories} />

                    <Route path="/login" component={User_Login}/>
                    <Route path="/forgotPass" component={UserLogout}/>
                    {/* <Route path="/login"  render={(props)=><User_Login {...props} />}/> */}

                    {/* <Route path="/login" component={User_Login}/> */}
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                

                
            </div>
        );
    }

}
export default MainComponent;
