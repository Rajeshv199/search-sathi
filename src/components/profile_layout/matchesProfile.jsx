import React, {useState,useRef,useEffect} from "react";
import { Link } from 'react-router-dom';
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';

export default function MatchesProfile() {
    let item1ref = useRef(null);
    const [profileOpt,setProfileOpt] = useState(false);
    const [imageShow,setImageShow] = useState(false);

    function multipleValue(label,value,width){
        return(
            <div className='d-flex w-50 flotLeft my-2'>
                <div className={'d-flex justify-content-between '+width}>{label}<span >:</span></div>
                <div className='px-2'>{value}</div>
            </div>
        )
    }
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setProfileOpt(false);
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    function matchesData(title,value){
        return(
            <div className="d-flex mt-4 pb-2 border-bottom justify-content-between">
                <div>
                    <h6 className="mb-1">{title}</h6>
                    <h6 className="text-secondary">{value}</h6>
                </div>
                <div className="mt-2 mr-3 text-success">
                    <i class="fa-solid fa-check fa-lg"></i>
                </div>
            </div>
        )
    }
    return (
    <div className='profile-details'>
        <ProfileHeader/>

        <div className='profile-detail-body'>
            <LeftAside/>

            <div className='profile-box'>
               <div className="px-4 pt-3"><Link to="/mymatches" className="text-dark"><i class="fa-solid fa-angle-left p-1"></i></Link></div>
                
                <div className='prfile-panel mt-3'>
                    <div className="moreOption">
                        <span onClick={()=>setImageShow(true)}><i class="fa-regular fa-images fa-sm px-1 "></i>4</span>
                        <i class="fa-solid fa-ellipsis-vertical" onClick={()=>setProfileOpt(true)}></i>
                    </div>
                    <div className="userContainer">
                        <img className='user-image' src='https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=""/>
                    </div>
                    <div className='absoluteDiv'>
                        <h4 className="mb-1">Kajal Kumari, <span>25</span></h4>
                        <h6 className="m-0">ID - SWD4521</h6>
                        <small>Last seen on 08-Jan-24</small>
                    </div>
                </div>

                <div className="postion-sticky">
                    <button className="activeBtn ">About Me</button>
                    <button>Family</button>
                    <button>Partner </button>
                </div>
                <div className="basicData cursorNot ">
                    <div className='d-flex'>
                        <div>
                            {multipleValue("Height",`4' 11" (1.50 mts)`,"widh80")}
                            {multipleValue("Annual Income","Rs. 5 - 7.5 Lakh","widh100")}
                            {multipleValue("Religion","Hindu • Bari","widh80")}
                            {multipleValue("Marital Status","Never Married","widh100")}
                            {multipleValue("Location","Kolkata, West Bengal, India","widh80")}
                            {multipleValue("Mother Tongue","Hindi","widh100")}
                            {multipleValue("Profile Managed By","Sibling","widh130")}
                        </div>
                    </div>
                </div>
                <div className="basicData cursorNot">
                    <div className='d-flex'>
                        Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.
                    </div>
                </div>
                <div className="basicData cursorNot">
                    <div className='d-flex justify-content-between'>
                        <h5 className='m-0'>Education </h5>
                    </div>
                    <div className="d-flex">
                        <div className="lookfor">BCA - Annamalai University</div>
                    </div>
                </div>
                <div className="basicData cursorNot">
                    <div className='d-flex justify-content-between'>
                        <h5 className='m-0'>Career </h5>
                    </div>
                    <div className="d-flex">
                        <div className="lookfor">Not Working</div>
                        {/* <div className="d-block">Not Working</div> */}
                    </div>
                </div> 
                <div className="basicData cursorNot">
                    <div className='d-flex justify-content-between'>
                        <h5 className='m-0'>Family </h5>
                    </div>
                    <div className="d-flex">
                        <div className="lookfor">From Hazaribagh, Jharkhand, india</div>
                    </div>
                </div>
                <div className="basicData cursorNot">
                    <div className=''>
                        <h5 className='m-0'>Who is she looking for... </h5>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div className="text-center">
                            <h6>Her Preference</h6>
                            <div className="lookingsImg">
                                <img className="lookingImg" src="https://img.freepik.com/free-photo/portrait-happy-mature-businessman-with-handbag_23-2147955311.jpg?size=626&ext=jpg&ga=GA1.1.623821449.1706697601&semt=sph" alt="" />
                            </div>
                        </div>
                        <div className="text-center w-25">
                            <div>You match 8/10 of her preference</div>
                        </div>
                        <div className="text-center">
                            <h6>Your Match</h6>
                            <div className="lookingsImg">
                                <img className="lookingImg" src="https://img.freepik.com/free-photo/portrait-happy-mature-businessman-with-handbag_23-2147955311.jpg?size=626&ext=jpg&ga=GA1.1.623821449.1706697601&semt=sph" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-4">
                            <h5 className="text-dark">Basic Details</h5>
                        </div>
                        {matchesData("Height",`5' 2" to 5' 11"`)}
                        {matchesData("Age","20 to 23 Years")}
                        {matchesData("Marital Status","Never Married")}
                        {matchesData("Religion","Hindu")}
                        {matchesData("Mother Tongue","Hindi")}
                    </div>
                    <div>
                        <div className="mt-4">
                            <h5 className="text-dark">Education & Occupation</h5>
                        </div>
                        {matchesData("Earning","Rs. 1 Lakh and above")}
                    </div>
                    
                </div>
            </div>
        </div>
       
        <div>
            {profileOpt&&
            <div className="popup-box2">
                
                <div className="box6" ref={item1ref} >
                    <span className="closePop" onClick={()=>setProfileOpt(false)}><i class="fa-solid fa-xmark"></i></span>
                    <div className="interestBox" >
                        <Link to="#"><div className="mb-3"><i class="fa-solid fa-ban"></i>Block Profile</div></Link>
                        <div><i class="fa-solid fa-circle-exclamation"></i>Report Profile</div>
                    </div>
                </div>
            </div>
            }
        </div>
        <div>
            {imageShow&&
                <div className="img-popup-box">
                <span className="imgClosePop" onClick={()=>setImageShow(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="absolute top-2 right-2 text-white lg:right-7 lg:top-7"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></span>
                <div className="boxImg">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div className="img-indicators">
                            <div  class="active" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1">
                                <img src="https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            </div>
                            <div type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                                <img src="https://images.unsplash.com/photo-1707333572517-986169cdb639?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            </div>
                            <div type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                                <img src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            </div>
                            <div type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
                                <img src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            </div>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1707333572517-986169cdb639?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block " alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>



                </div>
            </div>
            }

        </div>

    </div>
)
}