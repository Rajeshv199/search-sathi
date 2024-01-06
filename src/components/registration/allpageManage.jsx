import React, {useState,useEffect} from "react";
import {Switch, Route, Redirect,useHistory,useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer";
import WhyRegister from "./whyRegister";
import RegiHeader from "./regi_header";
import Profile from "../register_Form/profile_Form";
import Career from "../register_Form/career_form";
import LifeStyle from "../register_Form/lifeStyleFamly_form";
import Partner from "../register_Form/partner_Form";
 
    
function Profiles(){
    const history =  useHistory();
    // window.scrollTo({ top: 1000, behavior: 'smooth' })
    // window.scrollTo( 1000,0)

    const[showProfile,setShowProfile] = useState(false);
    const[showCareer,setshowCareer] = useState(false);
    const[showLifeStyle,setShowLifeStyle] = useState(false);
    const[showPartner,setShowPartner] = useState(false);
    const {state} = useLocation();

    useEffect(()=>{
        if(state==1)setShowProfile(true);
        if(state==2){
            setShowProfile(true);
            setshowCareer(true);
        }
        if(state==3){
            setShowLifeStyle(true);
            setShowProfile(true);
            setshowCareer(true);
        }
        if(state==4){
            setShowProfile(true);
            setshowCareer(true);
            setShowLifeStyle(true);
            setShowPartner(true);
        }
        if(state==-2){
            setShowProfile(true);
            setshowCareer(false);
            setShowLifeStyle(false);
            setShowPartner(false);
        }
        if(state==-3){
            setShowLifeStyle(false);
            setShowPartner(false);
        }
        if(state==-4){
            setShowPartner(false);
        }
        
        // window.scrollTo({ top: 1850, behavior: 'smooth' })
    
    },[state]);

   



    return(
        <div className="proDetailBg" >
            <RegiHeader/>
            <div className="register-wid" >
                <div className="regi-info">Hi! </div>
                {showProfile?
                    <div className="pt-4 d-flex mt-2" >
                    <div className="reg-wid80">
                        <Profile viewBtn={showCareer?true:false}/>
                    </div>
                    <WhyRegister/>                 
                </div>
                :null}
                
                {showCareer?
                <React.Fragment>
                    <div className="headFont"><span>Career Details</span></div>
                    <div className="pt-4 d-flex mt-2" >
                        <div className="reg-wid80">
                            <Career viewBtn={showLifeStyle?true:false}/>
                        </div>
                        <WhyRegister/>                 
                    </div>
                </React.Fragment>
                :null}

                {showLifeStyle?
                <React.Fragment>
                    <div className="headFont"><span>LifeStyle & Family</span></div>
                    <div className="pt-4 d-flex mt-2" >
                        <div className="reg-wid80">
                            <LifeStyle viewBtn={showPartner?true:false}/>
                        </div>               
                    </div>
                </React.Fragment>
                :null}

                {showPartner?
                <React.Fragment>
                    <div className="headFont"><span>Partner Basic</span></div>
                    <div className="pt-4 d-flex mt-2" >
                        <div className="reg-wid80">
                            <Partner/>
                        </div>               
                    </div>
                </React.Fragment>
                :null}
                

               

            </div>
            
            
            <div>
                <Footer/>
            </div>
        </div>
                 
    );

}

export default Profiles;
