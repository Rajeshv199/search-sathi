import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registrations";
import User_regi from "./../components/registration/user_registration";
import LandingPage from "./landing_page/landing-page";
import Details from "./profile_layout/profile_details";
import Settings from "./features/settings";
import User_Login from "./../components/login/user_login";
import profileDetails from "./../components/registration/profileDetails";
import CareerDetails from "./../components/registration/careerDetails";
import Family from "./../components/registration/family";
import Verification from "./../components/registration/verification";
import RegisterMobile from "./../components/registration/user-register-mobile";
import PersonalDetails from "./../components/registration/personalDetails";
import CareerDetailsMob from "./../components/registration/careerDetailsMobile";
import SocialDetails from "./../components/registration/socialDetails";
import VerificationMob from "./../components/registration/verificationMob";
import Help from "./features/help";
import PhoneBook from "./features/phone-book";
import Demo from  "./../components/registration/demoAmi";
import Notification from "./profile_layout/Notification";



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
                
                    

                    <Route path="/test" component={User_regi}/>

                    <Route path="/registr/page5" component={VerificationMob}/>
                    <Route path="/registr/page4" component={SocialDetails}/>
                    <Route path="/registr/page3" component={CareerDetailsMob}/>
                    <Route path="/registr/page2" component={PersonalDetails}/>
                    <Route path="/registr/page1" component={RegisterMobile}/>

                    <Route path="/user_registration5" component={Verification}/>
                    <Route path="/user_registration4" component={Family}/>
                    <Route path="/user_registration3" component={CareerDetails}/>
                    <Route path="/user_registration2" component={profileDetails}/>
                    <Route path="/user_registration" component={User_registration}/>

                    <Route path="/notification" component={Notification} />
                    <Route path="/landing" component={LandingPage} />
                    <Route path="/profile_details" component={Details} />
                    <Route path="/settings" component={Settings}/>
                    <Route path="/features/help" component={Help}/>
                    <Route path="/features/phone-book" component={PhoneBook}/> 

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
