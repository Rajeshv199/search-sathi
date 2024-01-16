import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import icon1 from '../image/icon1.gif';
import icon2 from '../image/icon2.gif';
import icon3 from '../image/icon3.gif';
import icon4 from '../image/icon4.gif';

export default function LeftAside(){

    
    const[activeItem,setActiveItem] = useState(-1);
    const location=useLocation();
    const route=location.pathname;

    return (
    <div>
        <div className="matchContainer">
        <div className="profileDetils">
            <div className="d-flex" >
                <div className='user-icon'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                </div>
                
                <div className="text-detils mb-3">
                    <h4>Hi Sunit!</h4>
                    <p>UVA537 <a href='#'>Edit profile</a></p>
                    <div className="user-percent"><span>80%</span> Profile Completed!</div>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <Link to="/profile_details">
                    <div className="left-side-items">
                        <span class="material-symbols-outlined">join_inner</span>
                        <div>Matches</div>
                    </div>
                </Link>
                <Link to="/activity">
                    <div className="left-side-items colr5">
                        <span class="material-symbols-outlined">join_inner</span>
                        <div>Activity</div>
                    </div>
                </Link>
                <div className="left-side-items">
                    <span class="material-symbols-outlined">join_inner</span>
                    <div>Search</div>
                </div>
                <div className="left-side-items">
                    <span class="material-symbols-outlined">join_inner</span>
                    <div>Messanger</div>
                </div>
            </div>
            
        </div>

        <div className="premiumBefis">
            <h5 className="text-center">You are <span className="text-danger">missing</span> out on premium benefits!</h5>
        
            <div className="benefitsList">
                <img width="48" height="48" src={icon1}/>
                <div className="benefitTxt">Get upto 3x more porfile view</div>
            </div>
            <div className="benefitsList">
                <img width="48" height="48" src={icon2}/>
                <div className="benefitTxt">Unlimited voice and video call</div>
            </div>
            <div className="benefitsList">
                <img width="48" height="48" src={icon3}/>
                <div className="benefitTxt">Get access to contact details</div>
            </div>
            <div className="benefitsList">
                <img width="48" height="48" src={icon4}/>
                <div className="benefitTxt">Perform unlimited search</div>
            </div>

            <div className="getOffer text-center mt-4">
                <h6>Flat 38% OFF till 30 Jan</h6>
                <button>Upgrade Now <i class="fa-solid fa-chevron-right fa-2xs"></i></button>
            </div>
            
        </div>
        </div>



        {/* <div className='left-side'>
            <Link to="/profile_details">
                <div className={'left-side-items '+(route=="/profile_details"?"colr5":"")} onClick={()=>setActiveItem(1)}>
                    <h6>Matches</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </Link>
            <Link to="/activity">
                <div className={'left-side-items '+(route=="/activity"?"colr5":"")} onClick={()=>setActiveItem(2)}>
                    <h6>Activity</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </Link>
            <div className={'left-side-items '+(activeItem==3?"colr5":"")} onClick={()=>setActiveItem(3)}>
                <h6>Search</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
            <div className={'left-side-items '+(activeItem==4?"colr5":"")} onClick={()=>setActiveItem(4)}>
                <h6>Messanger</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
        </div> */}
    </div>
)

    
}