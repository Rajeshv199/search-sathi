import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import  "./styles/style.css";
import  "./styles/styleMobile.css";
import Index from "./index";
import User_registration from "./../components/registration/user_registration";
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
    state={isPopSign:false,mobileNo:"",erorr:""}

    componentDidMount(){
        // setTimeout(this.togglePopup, 2000);
    }
    handleChange=(e)=>{
        const {currentTarget: input} = e;
        let s1={...this.state};
        s1.mobileNo=input.name=="mobileNo"?input.value:"";
        this.setState(s1);
        

    }
    togglePopup=()=>{
        let s1={...this.state};
        s1.isPopSign=true;
        this.setState(s1);
    }
    handleClose=()=>{
        let s1={...this.state}; 
        // setTimeout(this.togglePopup, 50000);
        !s1.isPopSign?s1.isPopSign=true:s1.isPopSign=false;
        this.setState(s1);
    }
    handlePopup=()=>{
        let s1={...this.state}; 
        s1.isPopSign=false;
        this.setState(s1);
    }
    handleSubmit=()=>{
        let s1={...this.state}; 
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        s1.erorr= !s1.mobileNo?"Enter your mobile no":filter.test(s1.mobileNo)&&s1.mobileNo.length==10?"":"Not a valid number";
        if(!s1.erorr){
            s1.isPopSign=false;
        }
       
        this.setState(s1);
    }
    
    render(){
        const {isPopSign,erorr} = this.state;
        return(
            

            <div>
                <Switch>
                
                    

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
                    <Route path="/login" component={User_Login}/>
                    <Route path="/home" component={Index}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                <div>
                    {isPopSign&&
                    <div className="popForm errorhide">
                        <div className="popBox">
                            <span className="closeIcon" onClick={this.handleClose}>✕</span>
                            <div className="p-1 ">
                                <h4 className="text-center mb-4">Login ...</h4>
                                <input className="popInput" type="text" name="mobileNo"  placeholder="Mobile Number" onChange={this.handleChange} onBlur={this.handleError}/> 
                                {erorr&&<span className="erorrSign">{erorr}</span> }
                                <button className="popSubmit" onClick={this.handleSubmit}>Submit</button>
                                <Link to="/user_registration" onClick={this.handlePopup}><div className="register_Button">Register Free</div></Link>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                

                
            </div>
        );
    }

}
export default MainComponent;
