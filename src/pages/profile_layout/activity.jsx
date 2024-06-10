import React,{useState,useRef,useEffect} from "react";
// import './style.css';
import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import { Link} from 'react-router-dom';

export default function Activity() {

    const [interestOpt,setInterestOpt] = useState(false);
    let item1ref = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setInterestOpt(false);
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    return (
    <div className='profile-details'>
        <ProfileHeader/>

        
        <div className='profile-detail-body'>

          <LeftAside/>

            <div className='profile-box'>
                <div className="">
                    <div className="activtyContainer">
                        <div className="boxActivity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.29,8.71a1,1,0,0,0,1.42,0l4-4a1,1,0,1,0-1.42-1.42L17,6.59l-1.29-1.3a1,1,0,0,0-1.42,1.42ZM21,8a1,1,0,0,0-1,1v9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.41L9.88,14.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L12.7,12.88a1,1,0,0,1-1.4,0L5.41,7H11a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A1,1,0,0,0,21,8Z"></path></svg>
                            <h3 className="my-1">00</h3>
                            <div>Accepted Interests</div>
                        </div>
                        <div className="boxActivity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0l1.64-1.64a1,1,0,1,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H11.5a1,1,0,0,0,0-2h-7a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Zm1.71-6.71a1,1,0,0,0-1.42,0L19.5,8.59V3a1,1,0,0,0-2,0V8.59l-1.29-1.3a1,1,0,1,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,22.21,7.29Z"></path></svg>
                            <h3 className="my-1">00</h3>
                            <div>Interests Received</div>
                        </div>
                        <div className="boxActivity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.791 1.291a1 1 0 0 0 0 1.42l1.3 1.29h-5.59a1 1 0 1 0 0 2h5.59l-1.3 1.29a1.004 1.004 0 1 0 1.42 1.42l3-3a1 1 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 0Zm1.002 10.242a1 1 0 0 1 1.707.707V17a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2H3.91l5.89 5.88a1 1 0 0 0 1.4 0l1.64-1.64a1.004 1.004 0 0 1 1.42 1.42l-1.64 1.64a3 3 0 0 1-4.24 0L2.5 7.41V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.76a1 1 0 0 1 .293-.707Z"></path></svg>
                            <h3 className="my-1">00</h3>
                            <div>Interests Sent</div>
                        </div>
                        <div className="boxActivity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5,13a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V8.41L9.38,14.3a3,3,0,0,0,2.11.87,3,3,0,0,0,2.15-.9l.89-.88A1,1,0,0,0,13.13,12l-.93.91a1,1,0,0,1-1.4,0L4.91,7H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3V18a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V14A1,1,0,0,0,20.5,13Zm1.05-9a3.33,3.33,0,0,0-3.88-.54,3.25,3.25,0,0,0-3.88,5.13L17,11.71a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l3.17-3.17A3.26,3.26,0,0,0,21.55,4ZM20.14,7.12,17.67,9.59,15.21,7.12A1.24,1.24,0,0,1,17,5.36a1,1,0,0,0,1.42,0,1.28,1.28,0,0,1,1.76,0A1.26,1.26,0,0,1,20.14,7.12Z"></path></svg>
                            <h3 className="my-1">00</h3>
                            <div>Shortlisted Profiles</div>
                        </div>
                        <div className="boxActivity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21,11a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.41L9.88,14.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L12.7,12.88a1,1,0,0,1-1.4,0L5.41,7H13a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V12A1,1,0,0,0,21,11Zm-.59-5,1.3-1.29a1,1,0,1,0-1.42-1.42L19,4.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L17.59,6l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L19,7.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                            <h3 className="my-1">00</h3>
                            <div>Declined Interests</div>
                        </div>
                        <div className="boxActivity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.21,10.29,20.48,8.57a4.37,4.37,0,0,0,.65-2.26,4.31,4.31,0,1,0-4.32,4.32A4.37,4.37,0,0,0,19.07,10l1.72,1.73a1,1,0,0,0,1.42,0A1,1,0,0,0,22.21,10.29ZM18.45,8a2.37,2.37,0,0,1-3.27,0,2.3,2.3,0,0,1-.68-1.64A2.32,2.32,0,0,1,16.81,4a2.3,2.3,0,0,1,1.64.68,2.28,2.28,0,0,1,.68,1.63A2.3,2.3,0,0,1,18.45,8ZM20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0L15,13.88a1,1,0,0,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Z"></path></svg>
                            <h3 className="my-1">00</h3>
                            <div>Filtered Interests</div>
                        </div>
                       
                        
                        
                    </div>
                    <div className="interstHeder">
                        <div>This might interest you</div>
                    </div>
                    <div className="interstPople">
                        <div className="proImg2">
                            <div >
                                <img width="48" height="48" src='https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg' alt=""/>
                            </div>
                            <div className="-ml-5">
                                <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 h-full w-full text-white/40"><path d="M77 527.075c1.47-25.378 13.5-40.472 37.96-47.952 31.009-9.483 61.884-19.768 90.755-34.728 5.079-2.672 9.891-5.877 15.104-8.549 16.039-8.148 18.044-22.974 18.445-38.602.267-9.751 0-19.635 0-29.386 0-2.27-.668-4.407-1.871-6.277-9.624-15.762-15.104-33.126-19.247-50.891-.802-3.74-1.738-5.209-6.015-4.274-6.149 1.202-9.624-3.073-11.228-8.282-2.406-8.281-4.143-16.696-6.683-26.848-3.341 12.289-2.138 22.307 2.005 32.191 3.208 7.48 8.02 13.758 13.366 19.902 24.327 27.783 24.46 75.201.535 101.247-1.604 1.737-3.208 3.607-4.812 5.343-.401-.267-.935-.668-1.336-.935 2.004-4.675 4.009-9.35 5.881-14.158 8.821-22.841 11.093-45.682-.268-68.389-4.41-8.949-10.826-16.296-18.044-22.974-15.772-14.56-20.584-33.126-19.782-53.83.535-11.754 2.406-23.375 5.347-34.862.534-2.003.668-3.873-.268-5.743-15.504-30.989-13.499-62.512-1.737-93.767 14.168-37.801 37.425-67.454 74.85-84.284 8.821-4.007 18.178-6.144 27.668-6.946 46.113-4.274 89.018 3.206 121.631 39.003 33.415 36.732 42.103 79.742 27.133 127.16-2.005 6.145.935 11.354 2.539 16.563 8.822 27.916 5.213 57.302-17.643 77.872-15.504 13.892-26.999 30.054-29.672 51.292-2.406 19.501 2.94 37.4 10.826 54.897.668 1.603 2.272 2.805 1.738 4.809-12.965-6.011-20.584-31.122-21.787-70.793-3.876 9.884-12.831 17.364-11.628 29.787 1.069 11.487.534 23.107 1.202 34.595.802 15.227 10.56 22.707 21.787 29.252 30.876 18.032 64.692 28.851 98.508 39.403 10.96 3.473 21.118 8.148 29.138 16.697 9.356 9.884 12.564 21.772 11.361 34.995-45.979 0-92.092.134-138.071.134H85.822c-3.075 0-6.95 1.469-8.822-2.672Zm304.078-208.504c3.074-3.874 6.015-7.748 9.223-11.755-5.08-2.27-7.886-1.87-8.287 4.007-.268 2.538-1.203 5.076-.936 7.748-.134.4-.267.801-.401 1.068.134-.401.267-.668.401-1.068Zm18.846-23.108c5.614-7.881 7.084-14.426 5.213-22.975a1849.089 1849.089 0 0 0-5.213 22.975Z" fill="currentColor"></path></svg>
                            </div>
                            <div className="-ml-5">
                                <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 h-full w-full text-white/40"><path d="M77 527.075c1.47-25.378 13.5-40.472 37.96-47.952 31.009-9.483 61.884-19.768 90.755-34.728 5.079-2.672 9.891-5.877 15.104-8.549 16.039-8.148 18.044-22.974 18.445-38.602.267-9.751 0-19.635 0-29.386 0-2.27-.668-4.407-1.871-6.277-9.624-15.762-15.104-33.126-19.247-50.891-.802-3.74-1.738-5.209-6.015-4.274-6.149 1.202-9.624-3.073-11.228-8.282-2.406-8.281-4.143-16.696-6.683-26.848-3.341 12.289-2.138 22.307 2.005 32.191 3.208 7.48 8.02 13.758 13.366 19.902 24.327 27.783 24.46 75.201.535 101.247-1.604 1.737-3.208 3.607-4.812 5.343-.401-.267-.935-.668-1.336-.935 2.004-4.675 4.009-9.35 5.881-14.158 8.821-22.841 11.093-45.682-.268-68.389-4.41-8.949-10.826-16.296-18.044-22.974-15.772-14.56-20.584-33.126-19.782-53.83.535-11.754 2.406-23.375 5.347-34.862.534-2.003.668-3.873-.268-5.743-15.504-30.989-13.499-62.512-1.737-93.767 14.168-37.801 37.425-67.454 74.85-84.284 8.821-4.007 18.178-6.144 27.668-6.946 46.113-4.274 89.018 3.206 121.631 39.003 33.415 36.732 42.103 79.742 27.133 127.16-2.005 6.145.935 11.354 2.539 16.563 8.822 27.916 5.213 57.302-17.643 77.872-15.504 13.892-26.999 30.054-29.672 51.292-2.406 19.501 2.94 37.4 10.826 54.897.668 1.603 2.272 2.805 1.738 4.809-12.965-6.011-20.584-31.122-21.787-70.793-3.876 9.884-12.831 17.364-11.628 29.787 1.069 11.487.534 23.107 1.202 34.595.802 15.227 10.56 22.707 21.787 29.252 30.876 18.032 64.692 28.851 98.508 39.403 10.96 3.473 21.118 8.148 29.138 16.697 9.356 9.884 12.564 21.772 11.361 34.995-45.979 0-92.092.134-138.071.134H85.822c-3.075 0-6.95 1.469-8.822-2.672Zm304.078-208.504c3.074-3.874 6.015-7.748 9.223-11.755-5.08-2.27-7.886-1.87-8.287 4.007-.268 2.538-1.203 5.076-.936 7.748-.134.4-.267.801-.401 1.068.134-.401.267-.668.401-1.068Zm18.846-23.108c5.614-7.881 7.084-14.426 5.213-22.975a1849.089 1849.089 0 0 0-5.213 22.975Z" fill="currentColor"></path></svg>
                            </div>
                        </div>
                        <div className=" profileVist">10 Profiles Visited by You</div>
                    </div>

                    <div className="interstHeder d-flex justify-content-between" >
                        <div>Shortlisted Profiles <span>(2)</span> <span className="text-end"></span></div>
                        <div className="mt-1"><i className="fa-solid fa-arrow-right fa-xs"></i></div>
                    </div>
                    <div className="shortlstContner">
                        <div className="boxShortlst">
                            <img width="255px" height="300px" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt=""/>
                            <div className="activtyLst">
                                {/* <div>
                                    <input type="text" className="activtyInpt"/>
                                    <button className="activeSend"><span class="material-symbols-outlined">send</span></button>
                                </div> */}
                                <div className="activityitem"><i className="fa-regular fa-envelope"></i>Send Interest</div>
                                <div className="activityitem"><i className="fa-star fa-solid"></i>Shortlisted</div>
                                {/* <div><i className="fa-star fa-regular"></i>Shortlist</div> */}
                                <div className="activityitem"><Link to="/chat"><div className="activityitem"><i className="fa-regular fa-comment"></i>Chat</div></Link></div>
                            </div>
                        </div>
                        <div className="boxShortlst">
                            <img width="255" height="300" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt=""/>
                            <div className="activtyLst">
                                <div className="activityitem"><i className="fa-regular fa-envelope"></i>Send Interest</div>
                                <div className="activityitem"><i className="fa-star fa-solid"></i>Shortlisted</div>
                                {/* <div><i className="fa-star fa-regular"></i>Shortlist</div> */}
                                <div className="activityitem"><Link to="/chat"><div className="activityitem"><i className="fa-regular fa-comment"></i>Chat</div></Link></div>
                            </div>
                        </div>

                    </div>
                    <div className="interstHeder d-flex justify-content-between" >
                        <div>Interests Sent<span>(2)</span> <span className="text-end"></span></div>
                        <div className="mt-1"><i className="fa-solid fa-arrow-right fa-xs"></i></div>
                    </div>
                    <div className="shortlstContner">
                        <div className="boxInterest">
                            <i className="fa-solid fa-ellipsis-vertical" onClick={()=>setInterestOpt(true)}></i>
                            <img width="120" height="120" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt=""/>
                            <div className="textIntest">Kajal Kumari, 20</div>
                            <span>4ft 5in • Ranchi</span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        <div>
            {interestOpt&&
            <div className="popup-box2">
                <div className="box6" ref={item1ref} >
                <span className="closePop" onClick={()=>setInterestOpt(false)}><i class="fa-solid fa-xmark"></i></span>
                    <div className="interestBox" >
                        <Link to="/chat"><div className="mb-3"><i class="fa-regular fa-comment fa-lg"></i>Chat</div></Link>
                        <div><i class="fa-solid fa-xmark fa-lg ml-1"></i>Cancel Interest</div>
                    </div>
                </div>
            </div>
            }
        </div>
        

    </div>
)
}


