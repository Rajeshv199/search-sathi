import React from "react";
import {Link} from "react-router-dom";



function UserLogOut(){


   

    return(
        <div className="popup-box">
            <div className="box">
            <Link to="/"><span className="close-icon"></span></Link>
                    <div className="loginView">
                        <div className="loginFrm">
                            <div className="loginTxt">Provide Email </div>
                            <div className="mt-3">
                                <div className="loginInput">
                                    <input type="text" name="email" placeholder="Registered Email" autoComplete="off"/>
                                </div>
                            </div>
                            
                            <div  className="">
                                <button className="loginBtns mt-4">GET OTP</button>
                            </div>
                        </div>
                        
                    </div>

            </div>

        </div>
    );

}

export default UserLogOut;



                            