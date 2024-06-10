import React, { useState,useRef,useEffect } from "react";

function AllMembers(props) {

    const[activeMembs,setActiveMembs] = useState(1);
    const[optionPop,setOptionPop] = useState(0);
    let item1ref = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setOptionPop(0);
          }
        };
      
        document.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

      const{memberList}=props;
    return(
        <div className="members-section">
            <h5 className="m-0 py-4">
                {memberList===1?"All Members":memberList===2?"All Members":memberList===3?"Profile Reports":memberList===4?
                "Deleted Members":memberList===5?"Unapproved Profile Pictures":memberList===6?"Member Profile Sections Configuration ":""}
            </h5>
            <div className="bg-white py-3">
                
                {memberList===1&&
                <div>
                    <div className="d-flex px-4 justify-content-between">
                        <div>Premium Members</div>
                        <div><input type="text" className="inpt" placeholder="Type first name"/></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-5">Id</div>
                        <div className="wid-8">Image</div>
                        <div className="wid-14">Members Code</div>
                        <div className="wid-19">Name</div>
                        <div className="wid-7">Gender</div>
                        <div className="wid-14">Profile Reported</div>
                        <div className="wid-14">Members Science</div>
                        <div className="wid-14">Members Status</div>
                        <div className="wid-28">Options</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-5">01</div>
                            <div className="wid-8 "><img className="bg-danger " width="40px" height="45px" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
                            <div className="wid-14">4225245</div>
                            <div className="wid-19">Rajesh Kumar</div>
                            <div className="wid-7">Male</div>
                            <div className="wid-14">0</div>
                            <div className="wid-14">01-02-2012</div>
                            <div className="wid-14 accActive"><span>Active</span></div>
                            <div className=""><i class="fa-solid fa-ellipsis-vertical px-3" onClick={()=>setOptionPop(1)}></i>
                            {optionPop===1&&
                                <div className="optionPopup" ref={item1ref}>
                                    <div onClick={()=>setOptionPop(0)}>View</div>
                                    <div>Edit</div>
                                    <div>Block</div>
                                    <div>Delete</div>
                                </div>
                            }
                            </div>
                        </div>
                        
                    </div>
                </div>
                }
                {memberList===2&&
                <div>
                    <div className="d-flex px-4 justify-content-between">
                        <div>Free Members</div>
                        <div><input type="text" className="inpt" placeholder="Type first name"/></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-5">Id</div>
                        <div className="wid-8">Image</div>
                        <div className="wid-14">Members Code</div>
                        <div className="wid-19">Name</div>
                        <div className="wid-7">Gender</div>
                        <div className="wid-14">Profile Reported</div>
                        <div className="wid-14">Members Science</div>
                        <div className="wid-14">Members Status</div>
                        <div className="wid-28">Options</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-5">02</div>
                            <div className="wid-8 "><img className="bg-danger " width="40px" height="45px" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
                            <div className="wid-14">S12134</div>
                            <div className="wid-19">Vishal Kumar</div>
                            <div className="wid-7">Male</div>
                            <div className="wid-14">0</div>
                            <div className="wid-14">30-05-2020</div>
                            <div className="wid-14 accActive"><span>Active</span></div>
                            <div className=""><i class="fa-solid fa-ellipsis-vertical px-3" onClick={()=>setOptionPop(1)}></i>
                            {optionPop===1&&
                                <div className="optionPopup" ref={item1ref}>
                                    <div onClick={()=>setOptionPop(0)}>View</div>
                                    <div>Edit</div>
                                    <div>Block</div>
                                    <div>Delete</div>
                                </div>
                            }
                            </div>
                        </div>
                        
                    </div>
                </div>
                }
                {memberList===3&&
                <div>
                    <div className="d-flex px-4 justify-content-between">
                        <div>Profile Reports</div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-8">Id</div>
                        <div className="wid-14">Photo</div>
                        <div className="wid-19">Members Code</div>
                        <div className="wid-22">Members Name</div>
                        <div className="wid-19">Approval</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-8">02</div>
                            <div className="wid-14 "><img className="bg-danger " width="40px" height="45px" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
                            <div className="wid-19">S12134</div>
                            <div className="wid-22">Vishal Kumar</div>
                            <div className="wid-7"></div>
                            
                        </div>
                        
                    </div>
                </div>
                }
                {memberList===4&&
                <div>
                    <div className="d-flex px-4 justify-content-between">
                        <div>All Deleted Members</div>
                        <div><input type="text" className="inpt" placeholder="Type first name"/></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-5">Id</div>
                        <div className="wid-8">Image</div>
                        <div className="wid-14">Members Code</div>
                        <div className="wid-19">Name</div>
                        <div className="wid-7">Gender</div>
                        <div className="wid-14">Profile Reported</div>
                        <div className="wid-14">Members Science</div>
                        <div className="wid-14">Members Status</div>
                        <div className="wid-28">Options</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-5">02</div>
                            <div className="wid-8 "><img className="bg-danger " width="40px" height="45px" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
                            <div className="wid-14">S12134</div>
                            <div className="wid-19">Vishal Kumar</div>
                            <div className="wid-7">Male</div>
                            <div className="wid-14">0</div>
                            <div className="wid-14">30-05-2020</div>
                            <div className="wid-14 accActive"><span>Active</span></div>
                            <div className=""><i class="fa-solid fa-ellipsis-vertical px-3" onClick={()=>setOptionPop(1)}></i>
                            {optionPop===1&&
                                <div className="optionPopup" ref={item1ref}>
                                    <div onClick={()=>setOptionPop(0)}>View</div>
                                    <div>Edit</div>
                                    <div>Block</div>
                                    <div>Delete</div>
                                </div>
                            }
                            </div>
                        </div>
                        
                    </div>
                </div>
                }
                {memberList===5&&
                <div>
                    <div className="d-flex px-4 justify-content-between">
                        <div>Profile Pictures</div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-8">Id</div>
                        <div className="wid-14">Photo</div>
                        <div className="wid-19">Members Code</div>
                        <div className="wid-22">Members Name</div>
                        <div className="wid-19">Approval</div>
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
                }
                {memberList===6&&
                <div>
                    <div className="profilSection">
                        <div >
                            <label>
                                <input type="checkbox" className="mx-2" /><span>Basic Details</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" /><span>About Me</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" /><span>Education</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" /><span>Career</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" /><span>Contact</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" /><span>LifeStyle</span>
                            </label>
                        </div>

                    </div>
                </div>
                }

            </div>
            

        </div>
    )


}
export default AllMembers;