import React, {useState,useRef,useEffect} from "react";
import { Link } from 'react-router-dom';
import './style.css';

import ProfileHeader from './profileHeader';
import LeftAside from './left_aside';
import MobileAside from './MobileAside';
import RefindMatches from './refindMatches';

export default function MyMatches() {

    const[interest,setInterest] = useState(false);
    const[msgInput,setMsgInput] = useState(false);
    const[shotList,setShotList] = useState(false);
    const[matchfilter,setMatchfilter] = useState(false);
    let item1ref = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setMatchfilter(false);
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
                <div className='filterBtn '>
                    <div onClick={()=>setMatchfilter(true)}><i className="fa-solid fa-filter px-1"></i>Filters</div>
                    <div>Verified</div>
                    <div>Just Joined</div>
                    <div>Nearby</div>
                </div>
                <div className='matchDetails'>
                   <div className="custom-Card">
                        <div className='cover-object'>
                            <img src='https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=""/>
                        </div>
                        <div className='d-block w-100'>
                            <Link to="/mymatches/profile">
                                <div className='card-text'>
                                    <div className='lastSeen'>Last seen at 6:24 pm</div>
                                    <div className='profileName'>Rohit Kumar<span>, &nbsp; 20</span></div>
                                    <div className='d-flex'>
                                        <div className='profleHight mxWid375'>6ft 2in </div>
                                        <div className='profleHight mxWid50'><span className='mx-2'>•</span>Ranchi </div>
                                        <div className='profleHight mxWid50'><span className='mx-2'>•</span>Hindu </div>
                                    </div>
                                    <div className='d-flex pt6' >
                                        <div className='profleHight mxWid50 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13.45H7V14.5a1,1,0,0,0,2,0V13.45h6V14.5a1,1,0,0,0,2,0V13.45h3Zm0-7H4V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"></path></svg>
                                            Banking Professional
                                        </div>
                                        <div className='profleHight mxWid50'><span className='mx-2'>•</span>Rs. 1 - 2 Lakh p.a</div>
                                    </div>
                                    <div className='d-flex pt-1' >
                                        <div className='profleHight mxWid50 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" ><path d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"></path></svg>
                                            BBA
                                        </div>
                                        <div className='profleHight mxWid50 ml16'>
                                            <svg  xmlns="http://www.w3.org/2000/svg" idth="16" height="16" viewBox="0 0 18.93 18.92" ><path d="M13.76 1.44c.33 0 .65.14.86.39.11.13.27.2.44.2s.33-.07.44-.2c.21-.25.53-.39.86-.39.62 0 1.12.49 1.12 1.09 0 1.19-1.58 2.19-2.41 2.58-.63-.3-2.42-1.28-2.42-2.58 0-.6.5-1.09 1.12-1.09Zm1.08 4.82c.07.03.14.04.22.04s.15-.01.22-.04c.14-.06 3.34-1.39 3.34-3.74 0-1.23-1.01-2.23-2.26-2.23-.47 0-.92.14-1.3.4-.38-.26-.83-.4-1.3-.4-1.25 0-2.26 1-2.26 2.23 0 2.35 3.21 3.68 3.34 3.74ZM14.12 8.77v-.03l-.58.14.59-.12Zm-.59.11.59-.12v-.03l-.58.14Zm3.66 3.73c0 2.52-2.05 4.57-4.57 4.57v.6c2.85 0 5.17-2.32 5.17-5.17h-.6Zm-4.57-4.57c2.52 0 4.57 2.05 4.57 4.57h.6c0-2.85-2.32-5.17-5.17-5.17v.6Zm-4.57 4.57c0-2.52 2.05-4.57 4.57-4.57v-.6c-2.85 0-5.17 2.32-5.17 5.17h.6Zm1.29 3.17c-.8-.82-1.29-1.94-1.29-3.17h-.6c0 1.39.56 2.66 1.46 3.59l.43-.42Zm3.25-5.63c.22 2.44-1.27 4.73-3.56 5.56l.2.56c2.55-.92 4.2-3.46 3.96-6.18l-.6.05Zm0 0 .6-.05-.6.05Zm-.17-.95c.1.38.15.73.17.95l.6-.05c-.02-.25-.07-.63-.18-1.06l-.58.16Zm-.02-.08s0 .04.02.08l.58-.16-.01-.04-.59.12Zm.68-1.03c-.47.09-.78.55-.68 1.03l.59-.12c-.03-.15.07-.29.21-.32l-.12-.59Zm1.02.65a.878.878 0 0 0-1.02-.65l.12.59c.14-.03.28.06.32.2l.58-.14Zm0 0-.58.15.58-.15Zm.22 1.26a6.67 6.67 0 0 0-.22-1.26l-.58.16c.13.47.18.88.2 1.15l.6-.05Zm-4.04 7.07c2.65-1.27 4.31-4.09 4.04-7.07l-.6.05c.24 2.73-1.28 5.31-3.71 6.48l.26.54Zm2.34.1c-.84 0-1.64-.23-2.32-.63l-.31.52c.77.45 1.66.72 2.62.72v-.6Zm6.31-4.57c0-3.43-2.75-6.23-6.16-6.31v.6c3.07.07 5.56 2.6 5.56 5.71h.6Zm-6.31 6.31c3.48 0 6.31-2.83 6.31-6.31h-.6c0 3.15-2.56 5.71-5.71 5.71v.6ZM6.31 12.6c0 3.48 2.83 6.31 6.31 6.31v-.6c-3.15 0-5.71-2.56-5.71-5.71h-.6Zm5.01-6.18c-2.86.6-5.01 3.14-5.01 6.18h.6c0-2.75 1.95-5.05 4.54-5.59l-.12-.59ZM8.64 5.37c.97.27 1.83.8 2.52 1.55l.44-.41a5.93 5.93 0 0 0-2.8-1.72l-.16.58ZM3.19 6.92C4.6 5.39 6.63 4.81 8.64 5.37l.16-.58c-2.22-.61-4.49.03-6.05 1.72l.44.41ZM2.06 12.4c-.7-1.91-.28-3.96 1.13-5.48l-.44-.41C1.19 8.19.72 10.48 1.5 12.61l.56-.21Zm0 0-.56.2.57-.2Zm4.07 3.51a5.458 5.458 0 0 1-4.07-3.51l-.57.2c.71 2 2.44 3.49 4.52 3.9l.12-.59Zm.75.09c-.06 0-.37-.02-.76-.09l-.11.59c.41.08.75.1.86.1V16Zm.87.87a.87.87 0 0 0-.87-.87v.6c.15 0 .27.12.27.27h.6Zm-.87.87c.48 0 .87-.39.87-.87h-.6c0 .15-.12.27-.27.27v.6Zm-1.08-.12c.45.08.87.12 1.08.12v-.6c-.16 0-.54-.03-.97-.11l-.11.59Zm0 0h.01l.11-.59-.12.59ZM.43 13.01c.84 2.38 2.91 4.15 5.38 4.64l.11-.59a6.578 6.578 0 0 1-4.93-4.25l-.57.2ZM.17 9.06c-.29 1.31-.2 2.67.26 3.95l.56-.2A6.366 6.366 0 0 1 .75 9.2l-.59-.13Zm1.75-3.31C1.05 6.69.45 7.83.17 9.06l.59.13c.25-1.12.81-2.17 1.61-3.04l-.44-.41ZM5.1 3.74a7.235 7.235 0 0 0-3.18 2.01l.44.41c.8-.87 1.81-1.5 2.91-1.84l-.18-.57Zm4.02-.04a7.136 7.136 0 0 0-4.02.04l.18.57c1.18-.36 2.45-.38 3.68-.03l.16-.58Zm3.89 2.72c-.98-1.34-2.32-2.28-3.89-2.72l-.16.58c1.44.4 2.66 1.26 3.56 2.5l.49-.35Zm.82 2.41-.29.06.59-.12-.29.06Zm0-.02.29-.07-.58.14.29-.07Zm-4.69 7.18-.22.21.13.14.18-.07-.1-.28Zm3.76-5.87-.3.02.3-.02Zm0 0 .3-.02-.3.02Zm-.18-1 .29-.08-.29.08Zm-.02-.06-.29.06.29-.06Zm.45-.67.06.29-.06-.29Zm.67.43-.29.07.29-.07Zm0 0 .29-.08-.29.08Zm.21 1.21-.3.02.3-.02Zm-3.87 6.78-.13-.27-.51.24.48.29.15-.26Zm2.61-10.2-.24.18.09.12h.15v-.3Zm5.87 6.01h-.3.3ZM11.4 6.74l.06.29.52-.11-.36-.39-.22.2ZM8.74 5.11l.08-.29-.08.29ZM2.99 6.75l.22.2-.22-.2ZM1.8 12.54l.28-.1-.28.1Zm0 0-.28.1.28-.1Zm4.29 3.7-.06.29.05-.29Zm-.21 1.13.05-.29-.05.29Zm0 0 .06-.29-.06.29ZM.71 12.9l.28-.1-.28.1ZM.46 9.12l-.29-.07.29.07Zm1.68-3.17-.22-.2.22.2Zm3.04-1.93.09.29-.09-.29Zm3.85-.04.08-.29-.08.29Z"></path></svg>
                                            Never Married
                                        </div>
                                    </div>
                                
                                </div>
                            </Link>

                            <div className="connectItem">
                                {!msgInput&& !interest &&
                                <React.Fragment>
                                    <button onClick={()=>setMsgInput(true)}>
                                        <i className="fa-regular fa-envelope px-1"></i>Send Interest
                                    </button>
                                    <button onClick={()=>shotList?setShotList(false):setShotList(true)}>
                                        <i className={"fa-star px-1 "+(shotList?"fa-solid":"fa-regular")}></i>
                                        {shotList?"Shortlisted":"Shortlist"}
                                    </button>
                                    {/* <Link><i className="fa-regular fa-comment px-1"></i>Chat</Link> */}
                                    <button>
                                        <Link to="/chat"><i className="fa-regular fa-comment px-1"></i>Chat</Link>
                                    </button>
                                </React.Fragment>
                                }
                                {msgInput&& !interest&&
                                 <div className='sentMsgInput'>
                                    <input type="text" className=''  placeholder='Send a personal message'/>
                                    <button onClick={()=>setInterest(true)}><span className="material-symbols-outlined">send</span></button>
                                 </div>
                                }
                                {interest&&
                                    <div className="msgText"><i className="fa-solid fa-check px-2"></i>Message sent</div>
                                }
                                 
                            </div>
                        </div>

                   </div>
                </div>
               
               
            </div>

            <MobileAside />
        </div>
        {matchfilter&&
            <div className="popup-box2" >
                <span className="closePop2" onClick={()=>setMatchfilter(false)}><i class="fa-solid fa-xmark"></i></span>
                <div className="box7" ref={item1ref}>
                    <RefindMatches/>
                </div>
            </div>
        }
        

    </div>
)
}