import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registrations";
import LandingPage from "./landing_page/landing-page";
import Details from "./profile_layout/profile_details";
import Settings from "./features/settings";
import User_Login from "./../components/login/user_login";
import profileDetails from "./../components/registration/profileDetails";
import CareerDetails from "./../components/registration/careerDetails";
import Family from "./registration/lifeStyle_family";
// import Verification from "./../components/registration/verification";
import RegisterMobile from "./../components/registration/user-register-mobile";
import PersonalDetails from "./../components/registration/personalDetails";
import CareerDetailsMob from "./../components/registration/careerDetailsMobile";
import SocialDetails from "./../components/registration/socialDetails";
import PartnerBasicDetails from "./../components/registration/partnerBasicDetails";
// import PartnerEducatDetails from "./../components/registration/partnerEducatDetails";
import VerificationMob from "./../components/registration/verificationMob";
import Help from "./features/help";
import PhoneBook from "./features/phone-book";
import Notification from "./profile_layout/Notification";
import SearchBar from "./../header/searchBar";
import SuccessStories from "./features/success_stories";
import ProfileEdit from "./profile_layout/profile_Edit";
import AllPageManage from "./registration/allpageManage";



class MainComponent extends Component{
    state={}

    componentDidMount(){
        // setTimeout(this.togglePopup, 2000);
    }
 
 
   
   
  
    
    render(){
        const {isPopSign,erorr} = this.state;
        return(
            

            <div>
                <Switch>
                
                    

                    <Route path="/search" component={SearchBar}/>

                    <Route path="/registr/page5" component={VerificationMob}/>
                    <Route path="/registr/page4" component={SocialDetails}/>
                    <Route path="/registr/page3" component={CareerDetailsMob}/>
                    <Route path="/registr/page2" component={PersonalDetails}/>
                    <Route path="/registr/page1" component={RegisterMobile}/>

                    {/* <Route path="/user_registration8" component={Verification}/> */}
                    {/* <Route path="/user_registration7" component={PartnerEducatDetails}/> */}
                    <Route path="/partner" component={PartnerBasicDetails}/>
                    <Route path="/lifestyle&family" component={Family}/>
                    <Route path="/career" component={CareerDetails}/>
                    <Route path="/profile" component={profileDetails}/>
                    <Route path="/user_registration" component={User_registration}/>
                    <Route path="/profiles" component={AllPageManage}/>

                    <Route path="/notification" component={Notification} />
                    <Route path="/landing" component={LandingPage} />


                    <Route path="/profile_edit" component={ProfileEdit} />
                    <Route path="/profile_details" component={Details} />
                    <Route path="/settings" component={Settings}/>
                    <Route path="/features/help" component={Help}/>
                    <Route path="/features/phone-book" component={PhoneBook}/> 
                    <Route path="/success/story" component={SuccessStories} />

                    <Route path="/login" render={(props)=><User_Login {...props} onSubmit={this.handlePopView} />}/>

                    {/* <Route path="/login" component={User_Login}/> */}
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                

                
            </div>
        );
    }

}
export default MainComponent;
