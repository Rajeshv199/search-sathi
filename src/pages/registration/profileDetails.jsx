import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../components/footer/regi_footer";
import WhyRegister from "./whyRegister";
import YogJodiLogo from "../../assets/images/YogJodiLogo.png"; 
import Profile from "../register_Form/profile_Form"; 
import Career from "../register_Form/career_form"; 
import LifeSyle from "../register_Form/lifeStyleFamly_form"; 
import Partner from "../register_Form/partner_Form"; 
 
    
function ProfileDetails(){
    // window.scrollTo(0,0);

    const[profile,setProfile] = useState(true);
    const[career,setCareer] = useState(false);
    const[lifeStyle,setLifeStyle] = useState(false);
    const[partner,setPartner] = useState(false);
    const[titleShow,setTitleShow] = useState(false);

    const {state} = useLocation();

    const [showPop,setShowPop] = useState(false);

    function handleOption(value){
        if(value==="profile"){setProfile(true);setCareer(false);setLifeStyle(false);setPartner(false)};
        if(value==="career"){setProfile(false);setCareer(true);setLifeStyle(false);setPartner(false)};
        if(value==="lifeSyle"){setProfile(false);setCareer(false);setLifeStyle(true);setPartner(false)};
        if(value==="partner"){setProfile(false);setCareer(false);setLifeStyle(false);setPartner(true)};
        setTitleShow(false);
    }
   
    function scrollCareer(){
       window.scrollTo({ top: 990, behavior: 'smooth' });
    }
    function scrollLife(){
        window.scrollTo({ top: 1860, behavior: 'smooth' });
    }
    function scrollPartner(){
        window.scrollTo({ top: 2820, behavior: 'smooth' });
    }
    function handleShowMore(value){
        if(value==="career"){
            setProfile(true);setCareer(true);
            setTimeout(scrollCareer, 0);
        };
        if(value==="lifeSyle"){
            setProfile(true);setLifeStyle(true);
            setTimeout(scrollLife, 0);
        };
        if(value==="partner"){
            setProfile(true);setCareer(true);
            setPartner(true);
            setTimeout(scrollPartner, 0);
        };

        if(value==="careerHide"){
            setCareer(false);setLifeStyle(false);setPartner(false);
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
        if(value==="lifeSyleHide"){
            setLifeStyle(false);setPartner(false);
            window.scrollTo({ top: 990, behavior: 'smooth'});
        }
        if(value==="partnerHide"){
            setPartner(false);
            window.scrollTo({ top: 1860, behavior: 'smooth'});
        }
        setTitleShow(true);
    }

    function handlePop(){
        setShowPop(true);
        // console.log("ff");
    }
  
    // console.log(showPop);

    let data = state?state.takeData:null;

    return(
        <div className="proDetailBg" onClick={handlePop}>
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            <Link to="/" className="ml-2"><img src={YogJodiLogo} alt=""/></Link>
                        </div>
                        <div className="liveChat-Help">
                            <span>LIVE CHAT</span>
                            <span>1-800-419-6299 (Toll Free)</span>
                        </div>
                    </div> 
                       
                    <div className="proSection"> 
                        <div className="proSText">
                            <div className={profile?"reg-active":null} onClick={()=>handleOption("profile")}>Profile Details</div>
                            <div className={career?"reg-active":null} onClick={()=>handleOption("career")}>Career Details</div>
                            <div className={lifeStyle?"reg-active":null} onClick={()=>handleOption("lifeSyle")}>Lifestyle & Family</div>
                            <div className={partner?"reg-active":null} onClick={()=>handleOption("partner")}>Partner Basic Details</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-wid" >
                <div className="regi-info">Hi! {state?<span>{data.firstName+" "+data.middleName+" "+data.lastName}</span>:""} </div>
                
                    {profile&&
                    <div className="pt-4 d-flex mt-2" >
                        <div className="reg-wid80">
                            <Profile career={career} showPop={showPop} onSubmit={handleOption} onShowMore={handleShowMore}/>
                        </div>
                        <WhyRegister/>     
                    </div> 
                    }
                    {career&&
                    <React.Fragment>
                        {titleShow&&<div className="headFont" >Career Details</div>}
                        <div className="pt-4 d-flex mt-2" >
                            <div className="reg-wid80">
                                <Career lifeStyle={lifeStyle} onSubmit={handleOption} onShowMore={handleShowMore}/>     
                            </div>
                                <WhyRegister/>     
                        </div> 
                    </React.Fragment>
                    }

                    {lifeStyle&&
                    <React.Fragment>
                        {titleShow&&<div className="headFont" >LifeStyle & Family</div>}
                        <div className="pt-4 d-flex mt-2" >
                            <div className="reg-wid80">
                                <LifeSyle partner={partner} onSubmit={handleOption}  onShowMore={handleShowMore}/>
                            </div>
                            <WhyRegister/>     
                        </div>  
                    </React.Fragment>
                    }
                    {partner&&
                    <React.Fragment>
                        {titleShow&&<div className="headFont">Partner Basic</div>}
                        <div className="pt-4 d-flex mt-2" >
                            <div className="reg-wid80">
                                <Partner onSubmit={handleOption}/>
                            </div>
                            <WhyRegister/>     
                        </div>
                    </React.Fragment>
                    }   
                </div>
            <div>
                <Footer/>
            </div>
            
        </div>
                 
    );

}

export default ProfileDetails;
