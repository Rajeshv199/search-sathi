
import { Link } from 'react-router-dom';
import yogjodiLogo from "../image/YogJodiLogo.png";
import Footer from "../footer/footer";
import { useState } from 'react';

export default function SettingVisibility() {

    const[pofileVisibility,setPofileVisibility] = useState(true);
    const[alertManager,setAlertManager] = useState(false);
    const[hideProfile,setHideProfile] = useState(false);
    const[deleteProfile,setDeleteProfile] = useState(false);

    return (
        <div className='profile-details'>
            <header className="coverImg">
                <div className="searchWid">
                    <div>
                        <Link className="yogjodi-logo" to="/">
                            <img height="100%" width="100%"  src={yogjodiLogo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="menu-navbar2">
                        <Link to="/mymatches"><div className='mt-3 py-1'>Matches</div></Link>
                        <Link to="/activity"><div className='mt-3 py-1'>Activity</div></Link>
                        <Link to="/search"><div className='mt-3 py-1'>Search</div></Link>
                        <Link to="#"><div className='mt-3 py-1'>Upgrade</div></Link>
                        <Link to="/features/help"><div className='mt-3 py-1'>Help</div></Link>
                        
                    </div>
                
                </div>
            </header>

            <div className='footer-List'>
                <div>
                    <ul className='profile-setting-lists'>
                        <li className='borderRight active3'>Profile Visibility</li>
                        <li className='borderRight'>Alert Manager</li>
                        <li className='borderRight'>Hide Profile</li>
                        <li className='borderRight'>Delete Profile</li>
                        <li>Change Password</li>
                    </ul>
                </div>
                

                {pofileVisibility&&
                <div>
                    <div className='setting-option'>
                        <div>
                            <span>Allow my detailed profile to be viewed by all visitors.</span>
                            
                        </div>
                        <small>Applied</small>
                    </div>
                    <div className='setting-option'>
                        <div>
                            <span>Allow my detailed profile to be viewed only by registered users who pass my filters.</span>
                            <small><Link className='text-success'>Manage Filters</Link></small>
                        </div>
                        <small>Set</small>
                    </div>
                    <div className='setting-option'>
                        <div>
                            <span>Don't show my detailed profile or summary profile to any user, I will search and contact profiles.</span>
                            <small>Summary profile will also not viewable by any visitor</small>
                        </div>
                        <small>Set</small>
                    </div>
                   

                   
                </div>
                }
            </div>
            

           
           <div>
            <Footer/>
            <div className="copyRight"> All rights reserved © 2024 Yogjodi Internet Services. </div>
           </div>

        </div>
    )
}