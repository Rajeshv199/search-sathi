import React, {Component} from "react";
import {Link} from "react-router-dom";

class Membership extends Component{
    state={
        
    }
    render(){
        return(
            <React.Fragment >
                <div className="sideBorder"></div>
                <div className="free-Membership">
                    <span className="membership-Title">Free</span>
                    <div className="membership-text">
                        <div className="materialIcons"></div>
                        Browse Profiles
                    </div>
                    <div className="membership-text">
                        <div className="materialIcons"></div>
                        
                        Shortlist & Send Interest
                    </div>
                    <div className="membership-text">
                        <div className="materialIcons"></div>
                        
                        Message and chat with unlimited users
                    </div>
                    <span className="colorGray">
                        <div className="membership-text">
                        <div className="materialIcons2"></div>
                            Get up to 3x more matches daily
                        </div>
                        <div className="membership-text">
                        <div className="materialIcons2"></div>
                            Unlock access to advanced search
                        </div>
                        <div className="membership-text">
                            <div className="materialIcons2"></div>
                            View contact details
                        </div>
                        <div className="membership-text">
                            <div className="materialIcons2"></div>
                            Make unlimited voice and video calls
                        </div>
                    </span>
                    <div className="text-center"><Link to="/user_registration"><button className="freeRegister">Register Free</button></Link></div>
                </div>
                <div className="sideBorder2"></div>
                <div className="paid-Membership">
                    <span className="membership-Title ">Paid</span>
                    <div className="membership-text ">
                        <div className="materialIcons"></div>
                        Browse Profiles
                    </div>
                    <div className="membership-text ">
                        <div className="materialIcons"></div>
                        Shortlist & Send Interest
                    </div>
                    <div className="membership-text ">
                        <div className="materialIcons"></div>
                        Message and chat with unlimited users
                    </div>
                    <div className="membership-text ">
                        <div className="materialIcons"></div>
                        Get up to 3x more matches daily
                    </div>
                    <div className="membership-text ">
                        <div className="materialIcons"></div>
                        Unlock access to advanced search
                    </div>
                    <div className="membership-text ">
                     <div className="materialIcons"></div>
                        View contact details
                    </div>
                    <div className="membership-text  ">
                        <div className="materialIcons"></div>
                        Make unlimited voice and video calls
                    </div>
                    <div className="membership-text  ">
                        <div className="materialIcons"></div>
                        Message and Chat with unlimited users
                    </div>
                    <div className="text-center"><button className="paidRegister">Browse Membership Plans</button></div>
                </div>

            </React.Fragment>
        );
    }

}
export default Membership;