
import { Link } from 'react-router-dom';
import yogjodiLogo from "../image/YogJodiLogo.png";
import Footer from "../footer/footer";
import { useState,useEffect } from 'react';

export default function SettingVisibility(props) {

    const[handalOpt,setHandalOpt] = useState(1);
    const[hideProfile,setHideProfile] = useState(1);
    const[deleteIdOpt,setDeleteIdOpt] = useState(0);
    const { state } = props.location;
    
    function handleDeleteOpt(val){
        if(deleteIdOpt===val) setDeleteIdOpt(0);
        else setDeleteIdOpt(val);
    }

    function multleDiv(prag,desc){
        return(
            <div className='setting-option'>
                <div>
                    <span>{prag}</span>
                    <small>{desc}</small>
                </div>
                <div className={'px-2 '+(desc?"mt-2":"")}><input type='checkbox'/></div>
            </div>
        )
    }

    useEffect(() => {
        setHandalOpt(state);
      }, [state]);

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
                    <div className='menu-navbar3'>
                    </div>
                
                </div>
            </header>

            <div className='footer-List'>
                <div>
                    <ul className='profile-setting-lists'>
                        <li className={'borderRight '+(handalOpt===1?"active3":null)} onClick={()=>setHandalOpt(1)}>Profile Visibility</li>
                        <li className={'borderRight '+(handalOpt===2?"active3":null)} onClick={()=>setHandalOpt(2)}>Alert Manager</li>
                        <li className={'borderRight '+(handalOpt===3?"active3":null)} onClick={()=>setHandalOpt(3)}>Hide Profile</li>
                        <li className={'borderRight '+(handalOpt===4?"active3":null)} onClick={()=>setHandalOpt(4)}>Delete Profile</li>
                        <li className={'borderRight '+(handalOpt===5?"active3":null)} onClick={()=>setHandalOpt(5)}>Change Password</li>
                    </ul>
                </div>
                {handalOpt===1&&
                <div>
                    {multleDiv("Allow my detailed profile to be viewed by all visitors.")}
                    {multleDiv("Allow my detailed profile to be viewed only by registered users who pass my filters.")}
                    {multleDiv("Don't show my detailed profile or summary profile to any user, I will search and contact profiles.","Summary profile will also not viewable by any visitor")}
                    
                </div>
                }
                {handalOpt===2&&
                <div>
                    {multleDiv("Membership Mails.","Receive mails from Yogjodi about membership options and offers")}
                    {multleDiv("New Matches Mails","Receive mails where Yogjodi recommends new profiles to you.")}
                    {multleDiv("Contact Alert Mails","Receive mails when someone on Yogjodi 'Expresses Interest' in your profile.")}
                    {multleDiv("Photo Request Mails","Receive mails when someone in Yogjodi Requests you to upload photo in your profile.")}
                    {multleDiv("Kundli Alert Mails","Receive mails where Yogjodi recommends a profile to you based on astrological compatibility.")}
                    {multleDiv("Service Mails","Receive mails (other than Visitor Alert/ Match Alert / Photo request) from Yogjodi.")}
                    {multleDiv("Promotional Mails","Receive mails from 3rd Party other than Yogjodi.")}
                    {multleDiv("Membership SMS","Receive membership information and special offers from Yogjodi for your profile.")}
                    {multleDiv("Transactional SMS","Receive important notifications from Yogjodi on your profile.")}
                    {multleDiv("Membership Calls","Receive calls for Paid Membership options.")}
                    {multleDiv("Offer Calls","Receive calls for Special offers / discounts on Membership")}
                    {multleDiv("Website Help","Receive calls for Explanation of site features")}
                    {multleDiv("Profile Completion","Receive calls which aid in Completion of Profile")}
                </div>
                }
                {handalOpt===3&&
                <div className='hideProfile'>
                    <h5>Hide Your Profile</h5>
                    <p>Use this feature when you have decided to stop looking temporarily since you are busy, moving, in the middle of some big lifestyle changes and cannot spare the time to look seriously.</p>
                
                    <h6 className='my-4'>Hide My Profile For</h6>
                    <div>
                        <button className={hideProfile===1?'bg-danger text-white border-0':null} onClick={()=>setHideProfile(1)}>7 days</button>
                        <button className={hideProfile===2?'bg-danger text-white border-0':null} onClick={()=>setHideProfile(2)}>15 days</button>
                        <button className={hideProfile===3?'bg-danger text-white border-0':null} onClick={()=>setHideProfile(3)}>30 days</button>
                    </div>
                    <div className='my-3'>
                        <input type='number' placeholder='Your Password'/>
                    </div>
                    <div className='mt-4'><button className='bg-danger text-white border-0'>Hide My Profile</button></div>
                
                </div>
                }
                {handalOpt===4&&
                <div className='hideProfile text-start'>
                    
                    <h4 className='text-secondary'>Looks like this is goodbye!</h4>
                    <p>Before you go, help us understand why you've decided to delete your account permanently</p>

                    <div>
                        <div className='deleteOpt' onClick={()=>handleDeleteOpt(1)}>
                            <div>I found my match</div>
                            <div>{deleteIdOpt===1?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</div>
                        </div>
                        <div className='deleteOpt' onClick={()=>handleDeleteOpt(2)}>
                            <div>Not satisfied with services</div>
                            <div>{deleteIdOpt===2?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</div>
                        </div>
                        <div className='deleteOpt' onClick={()=>handleDeleteOpt(3)}>
                            <div>Marry Later/ Create profile later</div>
                            <div>{deleteIdOpt===3?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</div>
                        </div>
                        <div className='deleteOpt' onClick={()=>handleDeleteOpt(4)}>
                            <div>Profile/Privacy Issue</div>
                            <div>{deleteIdOpt===4?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</div>
                        </div>
                        <div className='deleteOpt' onClick={()=>handleDeleteOpt(5)}>
                            <div>Other Reasons</div>
                            <div>{deleteIdOpt===5?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</div>
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button className='bg-danger text-white border-0 '>Continue Deleting</button>
                    </div>
                    
                </div>
                }
                {handalOpt===5&&
                <div className='hideProfile'>
                    
                    <div><input type='number' placeholder='Current Password'/></div>
                    <div><input type='number' placeholder='New Password'/></div>
                    <div><input type='number' placeholder='Re-Enter New Password'/></div>
                    <div className='mt-4'><button className='bg-danger text-white border-0'>Save New Password</button></div>
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