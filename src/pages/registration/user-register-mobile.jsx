import React from "react";
import {Link} from "react-router-dom";
import yogjodi from "../../assets/images/YogJodiLogo.png";


function UserRegisterMobile(){

    return(
        <div className="">
            <div className="bgImageMb">
                <header className="header-container">
                    <Link className="regi-logo" to="/">
                        <img width="100%"  src={yogjodi} alt=""/>
                    </Link>
                    <Link to="/login"><div className="regi-loginBtn">Login</div></Link>
                            
                </header>
                <div className="looking-text">
                    <div className="nowChatForFree mt-3">Now, chat for free!</div>
                    <div className="isLooking">Finding your perfect match just became easier</div>
                </div>
                
            </div>
            <div className="containerAction">
                <div className="createPro">Choose who you’re creating a profile for!</div>
                <div className="listContainer">
                    <Link to="/registr/page2" className="forBtn">Myself</Link>
                    <Link to="/registr/page2" className="forBtn">Son</Link>
                    <Link to="/registr/page2" className="forBtn">Daughter</Link>
                    <Link to="/registr/page2" className="forBtn">Brother</Link>
                    <Link to="/registr/page2" className="forBtn">Sister</Link>
                    <Link to="/registr/page2" className="forBtn">Relative</Link>
                    <Link to="/registr/page2" className="forBtn">Friend</Link>
                    <Link to="/registr/page2" className="forBtn">Marriage Bureau</Link>

                </div>

            </div>
        </div>
                 
    );

}

export default UserRegisterMobile;

