import React, {useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer"


function Verification(){


    return(
        <div className="proDetailBg">
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            <Link to="/" className="ml-2"><img src="https://www.jeevansathi.com/images/jspc/commonimg/logo1.png" /></Link>
                        </div>
                        <div className="liveChat-Help">
                            <span>LIVE CHAT</span>
                            <span>1-800-419-6299 (Toll Free)</span>
                        </div>
                    </div>
                    <div className="phoneVriy text-center">Phone Verification</div>
                </div>
            </div>

            <div className="profile-container">
                <ul className="phoneVryDesc">
                    <li className="phoneVerTxt">We are almost done!</li>
                    <li>To let you connect with other members or for you to get contacted by them, we need to verify that this number belongs to you</li>
                    <li>Just click the button below and follow the instructions - it will just take a few seconds</li>
                </ul>

                <div className="ml117">
                    <div className="d-flex">
                        <div className="mobTitle">Mobile number</div>
                        <div className="mobpostion">
                                <input type="text" className="phoneISD" value="+91"/>
                                <input type="text" className="mobileNuber"/>
                        </div>
                    </div>
                    <button className="verifyButton">Verify this number</button>
                    <div>
                        <p className="phnTxt">We would like to inform you that by by verifying the above number you are agreeing to receive calls from the Yogjodi customer 
                        support team and SMS from Yogjodi, even though your number is registered with the NCPR.<br/><br/>                        
                        Please note that you can change your preference from the ‘Alert Manager Settings’ page on the Desktop site any time.</p>
                    </div>
                    
                </div>
                <div className="customerSport">For assistance, contact customer care at 1-800-419-6299 or <Link>help@xyz.com</Link></div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
                 
    );

}

export default Verification;

