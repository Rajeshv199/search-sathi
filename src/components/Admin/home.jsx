import React, { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import yogjodiLogo from "../image/yogJodiLogo3.png";
import EarningChart from "./earningChart";
import AllMembers from "./allMembers";
import WebsiteSetup from "./websiteSetup";
import Staffs from "./staffs";

function Home() {

    const[activeMenu,setActiveMenu] = useState(0);
    const[memberList,setMemberList] = useState(1);
    const[websiteList,setWebsiteList] = useState(1);
    const[staffList,setStaffList] = useState(1);

    // function handleOption(val){
    //     if(val===activeMenu)
    //         setActiveMenu(0);
    //     else
    //         setActiveMenu(val);
    // }
      
    return (
        <div>

        <div className="headerAdmin">
            <div className='px-3'>
                <img  src={yogjodiLogo} alt="" />
            </div>
            <div className="profile-img">
                <img src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt=""/>
                <div className="d-block mt-2">
                    <div className="adm-name">Rajesh Kumar</div>
                    <small className="text-light">admin</small>
                </div>
            </div>
        </div>
        <div className="d-flex">
            <div className="leftMenu">
                <div className="dashbord" onClick={()=>{setActiveMenu(0);setMemberList(1)}}>Dashboard</div>
                <ul>
                    <li className={activeMenu===1?"text-white":null} onClick={()=>setActiveMenu(1)}>Members {activeMenu===1?<i className="fa-solid fa-angle-down float-right"></i>:<i className="fa-solid fa-angle-right float-right"></i>}
                        {activeMenu===1&&
                        <ul className="meniList p-0">
                            <li className={memberList===1?"text-white":null} onClick={()=>setMemberList(1)}>Premium Members</li>
                            <li className={memberList===2?"text-white":null} onClick={()=>setMemberList(2)}>Free Members</li>
                            <li className={memberList===3?"text-white":null} onClick={()=>setMemberList(3)}>Reported Members</li>
                            <li className={memberList===4?"text-white":null} onClick={()=>setMemberList(4)}>Deleted Members</li>
                            <li className={memberList===5?"text-white":null} onClick={()=>setMemberList(5)}>Unapproved Profile Pictures</li>
                            <li className={memberList===6?"text-white":null} onClick={()=>setMemberList(6)}>Profile Section</li>
                        </ul>
                        }
                    
                    </li>
                    <li className={activeMenu===2?"text-white":null} onClick={()=>setActiveMenu(2)}>Premium Packages</li>
                    <li className={activeMenu===3?"text-white":null} onClick={()=>setActiveMenu(3)}>Packages Payment </li>
                    <li className={activeMenu===4?"text-white":null} onClick={()=>setActiveMenu(4)}>Happy Stories</li>
                    <li className={activeMenu===5?"text-white":null} onClick={()=>setActiveMenu(5)}>Contact Messenger</li>
                    <li className={activeMenu===6?"text-white":null} onClick={()=>setActiveMenu(6)}>Website Setup {activeMenu===6?<i className="fa-solid fa-angle-down float-right"></i>:<i className="fa-solid fa-angle-right float-right"></i>}
                        {activeMenu===6&&
                        <ul className="meniList p-0">
                            <li className={websiteList===1?"text-white":null} onClick={()=>setWebsiteList(1)}>Header</li>
                            <li className={websiteList===2?"text-white":null} onClick={()=>setWebsiteList(2)}>Footer</li>
                            <li className={websiteList===3?"text-white":null} onClick={()=>setWebsiteList(3)}>Page</li>
                            <li className={websiteList===4?"text-white":null} onClick={()=>setWebsiteList(4)}>Appearance</li>
                            <li className={websiteList===5?"text-white":null} onClick={()=>setWebsiteList(5)}>Registration form</li>
                        </ul>
                        }
                    </li>
                    <li className={activeMenu===7?"text-white":null} onClick={()=>setActiveMenu(7)}>Manager Admin Profile</li>
                    <li className={activeMenu===8?"text-white":null} onClick={()=>setActiveMenu(8)}>Staffs {activeMenu===8?<i className="fa-solid fa-angle-down float-right"></i>:<i className="fa-solid fa-angle-right float-right"></i>}
                        {activeMenu===8&&
                        <ul className="meniList p-0">
                            <li className={staffList===1?"text-white":null} onClick={()=>setStaffList(1)}>All Staffs</li>
                            <li className={staffList===2?"text-white":null} onClick={()=>setStaffList(2)}>Staffs Roles</li>
                        </ul>
                        }
                    
                    </li>
                    <li className={activeMenu===9?"text-white":null} onClick={()=>setActiveMenu(9)}> Settings</li>
                </ul>
            </div>

            <div className="rightMenu">
                {activeMenu===0&&
                <div>
                    <div className="d-flex">
                        <div className="membersCard bgcard1">
                            <div>Total Members</div>
                            <h4>100</h4>
                        </div>
                        <div className="membersCard bgcard2">
                            <div>Premium Members</div>
                            <h4>40</h4>
                        </div>
                        <div className="membersCard bgcard3">
                            <div>Free Members</div>
                            <h4>60</h4>
                        </div>
                        <div className="membersCard bgcard4">
                            <div>Block Members</div>
                            <h4>0</h4>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="graphEarn">
                            <div><EarningChart/></div>
                        </div>
                        <div>
                            <div className="membersCard bgearn">
                                <div><h4><i class="fa-solid fa-money-bill px-2"></i> &#8377;  10,000</h4></div>
                                <div>Total Earning</div>
                            </div>
                            <div className="membersCard bgearn2">
                                <div><h4>&#8377;  10,000</h4></div>
                                <div>Last Month Earning</div>
                            </div>
                            <div className="membersCard bgearn3">
                                <div><h4>&#8377;  10,000</h4></div>
                                <div>Last 6 Months Earning</div>
                            </div>
                            <div className="membersCard bgearn4">
                                <div><h4>&#8377;  10,000</h4></div>
                                <div>Last 12 Months Earning</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                }

                {activeMenu===1&&
                <div>
                    <AllMembers memberList={memberList}/>
                </div>
                }
                {activeMenu===2&&
                <div className="members-section">
                    <h5 className="m-0 py-4">Premium Packages</h5>

                    <div className="bg-white py-3">
                        <div className="d-flex px-4 justify-content-between">
                            <div>All Packages</div>
                        </div>
                        <div className="membrs-list">
                            <div className="wid-14">Id</div>
                            <div className="wid-19">Image</div>
                            <div className="wid-19">Name</div>
                            <div className="wid-22">Price</div>
                            <div className="wid-19">Status</div>
                            <div className="wid-19">Options</div>
                        </div>
                        <div className="membrs-listData">
                            <div className="multipleData">
                                <div className="wid-14">2</div>
                                <div className="wid-19"><img className="bg-danger " width="60px" height="40px" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
                                <div className="wid-19">Pro Lite</div>
                                <div className="wid-22">100</div>
                                <div className="wid-19">active</div>
                                <div className="wid-19"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i><i class="fa-solid fa-trash fa-xs deleteIcon"></i></div>
                            </div>
                            <div className="multipleData">
                                <div className="wid-14">3</div>
                                <div className="wid-19"><img className="bg-danger " width="60px" height="40px" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
                                <div className="wid-19">Pro</div>
                                <div className="wid-22">160</div>
                                <div className="wid-19">active</div>
                                <div className="wid-19"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i><i class="fa-solid fa-trash fa-xs deleteIcon"></i></div>
                            </div>
                        
                        </div>
                        
                    </div>
                </div>
                }
                {activeMenu===3&&
                <div className="members-section">
                    <h5 className="m-0 py-4">Packages Payment List</h5>

                    <div className="bg-white py-3">
                        <div className="d-flex px-4 justify-content-between">
                            <div>All Payment</div>
                        </div>
                        <div className="membrs-list">
                            <div className="wid-7">Id</div>
                            <div className="wid-22">Member Name</div>
                            <div className="wid-22">Payment Method</div>
                            <div className="wid-14">Amount</div>
                            <div className="wid-22">Payment Status</div>
                            <div className="wid-22">Payment Code</div>
                            <div className="wid-22">Purchage Date</div>
                            <div className="wid-7">Options</div>
                        </div>
                        <div className="membrs-listData">
                            <div className="multipleData">
                                <div className="w-100 text-center">
                                    <div className="text-secondary my-4"><i class="fa-regular fa-face-frown fa-2xl"></i></div>
                                    <div >Nothing Found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {activeMenu===4&&
                <div className="members-section">
                    <h5 className="m-0 py-4">Happy Stories</h5>

                    <div className="bg-white py-3">
                        
                        <div className="membrs-list">
                            <div className="wid-7">Id</div>
                            <div className="wid-22">Member Name</div>
                            <div className="wid-22">Partner Name</div>
                            <div className="wid-19">Post Time</div>
                            <div className="wid-19">Approval</div>
                            <div className="wid-19">Payment Status</div>
                            <div className="wid-19">Options</div>
                        </div>
                        <div className="membrs-listData">
                            <div className="multipleData ">
                                <div className="w-100 text-center">
                                    <div className="text-secondary my-4"><i class="fa-regular fa-face-frown fa-2xl"></i></div>
                                    <div >Nothing Found</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                }
                {activeMenu===5&&
                <div className="members-section">
                    <h5 className="m-0 py-4">Contact Messenger</h5>

                    <div className="bg-white py-3">
                        <div className="d-flex px-4 justify-content-between">
                            <div>Contact Messenger List</div>
                        </div>
                        <div className="membrs-list">
                            <div className="wid-5">Id</div>
                            <div className="wid-18">Name</div>
                            <div className="wid-40">Subject</div>
                            <div className="wid-14">Date</div>
                            <div className="wid-14">Status</div>
                            <div className="wid-8">Options</div>
                        </div>
                        <div className="membrs-listData">
                            <div className="multipleData ">
                                <div className="wid-5">01</div>
                                <div className="wid-18">Gautam Kumar</div>
                                <div className="wid-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                <div className="wid-14">20-01-2024</div>
                                <div className="wid-14">Replay</div>
                                <div className="wid-8"><i class="fa-solid fa-trash fa-xs deleteIcon"></i></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                }
                {activeMenu===6&&
                <div>
                    <WebsiteSetup websiteList={websiteList}/>
                </div>
                }
                {activeMenu===7&&
                    <div className="members-section">
                    <h5 className="m-0 py-4">Manager Admin Profile</h5>

                    <div className="bg-white w-75 m-auto py-3 border">
                        <div className="d-flex px-4 fw-bold">
                            <div>Manage Details</div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Name</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" value="Gourav Sharma" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Email</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" value="gourav123@gmail.com" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Phone</div>
                            <div className="col-7"><input className="appereInput w-100" type="number" value="9856214587" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Address</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" value="NY" /></div>
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Save</button></div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-4">
                        <div className="d-flex px-4 fw-bold">
                            <div>Change Password</div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Current Password</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">New Password</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Confirm Password</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                        </div>
                        
                        <div className="text-end px-4"><button className="updateBtn">Save</button></div>
                    </div>
                </div>
                }
                {activeMenu===8&&
                    <Staffs staffList={staffList}/>
                
                }
                {activeMenu===9&&
                <div className="members-section">
                    <div className="bg-white w-75 m-auto py-3 mt-4">
                        <div className="d-flex px-4 fw-bold">
                            <div>General Settings</div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">System Name</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">System Logo</div>
                            <div className="col-7"><input className="appereInput w-100" type="file" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">System Timezone</div>
                            <div className="col-7"><input className="appereInput w-100" type="time" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Member Minimum Age</div>
                            <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Member Profile Picture Privacy</div>
                            <div className="col-7">
                                <select className="appereInput bg-white w-100">
                                    <option disabled>Select</option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-3">Member Gallery Image Privacy</div>
                            <div className="col-7">
                                <select className="appereInput bg-white w-100">
                                    <option disabled>Select</option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 my-4">
                        <div className="d-flex px-4 fw-bold">
                            <div>Activation</div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-9">Maintance Mode Activation</div>
                            <div className="col-3">
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-9">Wallet System Activation </div>
                            <div className="col-3">
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-9">Email Varificaion</div>
                            <div className="col-3">
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-9">Member Approval Admin Acrivation</div>
                            <div className="col-3">
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-9">
                                Only Premium Member Can See Other Member Full Profile.
                                <small className="text-danger px-2 fontItalic">(if you disable this all registered members will be able to see the members full profile)</small>
                            </div>
                            <div className="col-3">
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row m-2 px-1 mt-4">
                            <div className="col-9">
                                Member Profile Picture Approval By Admin.99
                                <small className="text-danger px-2 fontItalic">(if you disable this, all redistered members will br able to see the members full profile.)</small>
                            </div>
                            <div className="col-3">
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                }


            </div>
            
        </div>


        </div>
                          
    )
}
export default Home;