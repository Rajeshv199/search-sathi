import React, {useState} from "react";
import {Switch, Route, Redirect,useHistory,useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import YogJodiLogo from "../../image/YogJodiLogo.png"; 

 
    
function RegiHeader(){
    return(
        <div className="pro-coverImg">
            <div className="profile-container">
                <div className="proheader">
                    <div className="pro-jeevanLogo">
                        <Link to="/" className="ml-2"><img src={YogJodiLogo} /></Link>
                    </div>
                    <div className="liveChat-Help">
                        <span>LIVE CHAT</span>
                        <span>1-800-419-6299 (Toll Free)</span>
                    </div>
                </div> 

                <div className="proSection">
                    <div className="proSText">
                        <div className="reg-active">Profile Details</div>
                        <div>Career Details</div>
                        <div>Lifestyle & Family</div>
                        <div>Partner Basic Details</div>
                    </div>
                </div>
            </div>
        </div>  
                 
    );

}

export default RegiHeader;
