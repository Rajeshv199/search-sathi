import React from 'react';
import {Link} from "react-router-dom";
import Smartbanner from "../image/smartbanner.jpg";

function Exclusive(){

    let day = new Date();
    let day2 = new Date(day.getTime() + (24 * 60 * 60 * 1000));
    let day3 = new Date(day.getTime() + (48 * 60 * 60 * 1000));

    const month = day.toLocaleString('default', { month: 'short' });
    const month2 = day2.toLocaleString('default', { month: 'short' });
    const month3 = day3.toLocaleString('default', { month: 'short' });
    
    let dayArr = [`${day.getDate()} ${month}`,`${day2.getDate()} ${month2}`,`${day3.getDate()} ${month3}`]
    let timeArr = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM"]
    let timeArr2 = ["10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 AM"]
    console.log(dayArr);
    
    return(
        <div className=''>
            <div className='row bg-light mx-0'>
                <div className='col-5 excluveEqry'>
                    <small className='text-dark'>Finding love, without looking for it</small>
                    <div className='font-italnreg'>Rishton Ka Expert</div>

                    <div className='custom-Excuve-frm'>
                        <div>
                            <label>Contact No</label>
                            <div className='d-flex w-100'>
                                <div className='excve-isdCde'>
                                    <select class="form-custom px-1" >
                                        <option>+ 91</option>
                                        <option>+ 636</option> 
                                    </select>
                                </div>
                                <div className='excve-mobile'>
                                    <input type='number' class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label >One Time Password(6 digits)</label>
                            <input type='number' class="form-control" />
                        </div>
                        <div className="mt-3">
                            <label >Date</label>
                            <select class="form-custom">
                            {dayArr.map((d1,index)=>(
                                <option key={index}>{d1}</option>
                            ))}
                            </select>
                        </div>

                        <div className='mt-3'>
                            <label>Time</label>
                            <div className='d-flex justify-content-between'>
                                <div className='w-50 pr-1'>
                                    <select class="form-custom" >
                                        {timeArr.map((t1,index)=>(
                                            <option key={index}>{t1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='w-50 pl-1'>
                                    <select class="form-custom swqas " >
                                        {timeArr2.map((t1,index)=>(
                                            <option key={index}>{t1}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='text-center'>
                            <button className='exclusve-Getbtn'>Get Free Consultation</button>
                        </div>
                    </div>
                </div>
                <div className='col-7'>
                    <div className='position-relative z-1'>
                        <img width="100%" height="580px" src={Smartbanner} alt=''/>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <div className='matchMaking-srvice'>
                    <div className='cabinmed-srvice'>
                        <h5>HERE TO HELP YOU</h5>
                        <div className='srvice-title'>Personalized <span>MatchMaking Service</span></div>
                        <p> 
                            Yogjodi Exclusive is a personalized matchmaking service by Yogjodi where an experienced 
                            relationship advisor helps you to find a perfect soulmate. Yogjodi Exclusive is recommended if you're busy,
                            need help in contacting the opposite profile or want an expert to work with your profile on your behalf to find a match faster.
                        </p>
                    </div>
                    <div className='cabinmed-srvice d-flex mt-5'>
                        <div className='w-50'>image</div>
                        <div className='w-50 text-start'>
                            <span>STEP 01</span>
                            <div className='srvice-title'>Relationship Manager</div>
                            <div className='srvice-info'>A Relationship Manager is assigned to understand your expectations and preferences</div>
                        </div>
                    </div>
                    <div className='cabinmed-srvice d-flex mt-5 pt-4'>
                        <div className='w-50 text-start'>
                            <span>STEP 02</span>
                            <div className='srvice-title'>Handpicked Matches</div>
                            <div className='srvice-info'>Sharing authentic mutual matches with you on a weekly basis</div>
                        </div>
                        <div className='w-50'>image</div>
                    </div>
                    <div className='cabinmed-srvice d-flex mt-5 pt-4'>
                        <div className='w-50'>image</div>
                        <div className='w-50 text-start'>
                            <span>STEP 03</span>
                            <div className='srvice-title'>Scheduled Meetings</div>
                            <div className='srvice-info'>Arranging calls and setting up meetings with prospect families</div>
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div className='w-50'>
                            
                        </div>
                        <div className='w-50'>
                            <h6>EXCLUSIVE BENEFITS</h6>
                            <div className='srvice-title'>Role of a <span>Relationship Manager</span></div>
                            <div className='benefits-future'>
                                <div>Relationship manager acts as an advisor</div>
                                <div>Understands your preferences and expectations</div>
                                <div>Sends interests and shares acceptances on a weekly basis</div>
                                <div>Connects with the members you choose on your behalf</div>
                                <div>Sets up meetings with interested prospects</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <h6>LET'S DISCOVER</h6> 
                        <div className='srvice-title'>Advantages <span>of JS Exclusive</span></div>
                    </div>
                    <div className='mx-3 d-flex mt-5'>
                        <div className='w-50 text-center px-5'>
                            <div>3x Faster Matching</div>
                            <p>Chances of finding a match are tripled with JS Exclusive.</p>
                        </div>
                        <div className='w-50 text-center px-5'>
                            <div>Profile Enhancement</div>
                            <p>Relationship Manager will help in editing profile details to showcase your best side.</p>
                        </div>
                    </div>
                
                    <div>
                        <div className='cabinmed-srvice mt-5'>
                            <h6>PLAYING CUPID</h6>
                            <div className='srvice-title'>Meet Our <span>Relationship Managers </span></div>
                            <p>Our Relationship managers use their rich experience and unwavering focus to help you find the right one</p>
                        </div>

                        <div>
                            <div className='p-3 d-flex'>
                                <div className='reationShip-MagerCard'>
                                    <div className='text-center'>
                                        <img className='reationShip-img' src='https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=740&t=st=1707304400~exp=1707305000~hmac=b509fd471b96e6b8b3e053af676264f434b182d3b5bd7eea5b8734d8df10a2a2' alt=''/>
                                    </div>
                                    <div className='reationShip-name'>Vishal Kumar</div>
                                    <p className='reationShip-exp'>5 Years Experience | 600+ Clients </p>
                                    <p className='reationShip-desc'>Ankita is an MBA professional from Delhi & has handled 600+ clients. She is skilled to handle versatile clients, especially from the Rajput community. She believes in going the extra mile to ensure you find and marry the Yogjodi of your dreams.</p>
                                </div>
                                <div className='reationShip-MagerCard'>
                                    <div className='text-center'>
                                        <img className='reationShip-img' src='https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=740&t=st=1707304400~exp=1707305000~hmac=b509fd471b96e6b8b3e053af676264f434b182d3b5bd7eea5b8734d8df10a2a2' alt=''/>
                                    </div>
                                    <div className='reationShip-name'>Vishal Kumar</div>
                                    <p className='reationShip-exp'>5 Years Experience | 600+ Clients </p>
                                    <p className='reationShip-desc'>Ankita is an MBA professional from Delhi & has handled 600+ clients. She is skilled to handle versatile clients, especially from the Rajput community. She believes in going the extra mile to ensure you find and marry the Yogjodi of your dreams.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="AppFollow bg4">
                <div className="AppFollow-List">
                    <div className="footerWid">
                        <div className="pb-2"> App available on </div>
                        <Link to="#" className="footerIcon iconPostion"></Link>
                        <Link to="#" className="footerIcon iconPostion2"></Link>
                    </div>
                    <div className="footerWid">
                        <div className="pb-2"> Follow us on </div>
                        <Link to="#" className="footerIcon iconPostion3"></Link>
                        <Link to="#" className="footerIcon iconPostion4"></Link>
                        <Link to="#" className="footerIcon iconPostion5"></Link>
                    </div>
                    <div>
                        <div>Customer Service (Toll Free)</div>
                        <div>1800-652-5777</div>
                    </div>
                </div>
            </div>
        </div>  
    );
 }

export default Exclusive;



