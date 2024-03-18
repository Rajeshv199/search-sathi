import React, { useState,useRef,useEffect } from "react";

function Staffs(props) {
    
   const[addStaff,setAddStaff] = useState(false);
   const[addRole,setAddRole] = useState(false);

   const[memberData,setMemberData] = useState({showsMembers:"",createMembers:"",editMembers:"",deleteMembers:"",viewMembersProfile:"",blockMembers:"",approveMembers:"",updateMembersPackage:"",deleteMembersShow:"",viewReportedProfile:""})
   const[ProfileAtributData,setProfileAtributData] = useState({})

   function handleChange(e){
    const{"currentTarget":input} = e;
    let memberData1 = {...memberData};
    input.type==="checkbox"?
    memberData1[input.name] = input.checked:
    memberData1[input.name] = input.value;
    setMemberData(memberData1);

   }

   function multipleSlider(name,value){
    return(
        <label class="switch">
            <input type="checkbox" class="toggle-input" name={name} value={value}  onChange={handleChange}/>
            <span class={value?"slider slider2":"slider"}></span>
        </label>
    )
   }
   useEffect(()=>{
    setAddStaff(false);
    setAddRole(false);
   },[props]);

    const{showsMembers,createMembers,editMembers,deleteMembers,viewMembersProfile,blockMembers,approveMembers,updateMembersPackage,deleteMembersShow,viewReportedProfile} = memberData;
    const{staffList}=props;
    console.log(memberData);
    return(
        <div className="members-section">
            <h5 className="m-0 py-4">
                {staffList===1?"All Staffs":staffList===2?"All Roles":""}
            </h5>
            <div>
                {staffList===1&& !addStaff &&
                <div className="bg-white py-3 mb-3">
                    <div className="d-flex px-4 justify-content-between">
                        <div>Staffs</div>
                        <div><button className="btn btn-danger" onClick={()=>{setAddStaff(true);setAddRole(false)}}>Add New Staffs</button></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-14">Id</div>
                        <div className="wid-22">Name</div>
                        <div className="wid-19">Email</div>
                        <div className="wid-19">Phone</div>
                        <div className="wid-19">Role</div>
                        <div className="wid-14">Options</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-14">01</div>
                            <div className="wid-22">Abc Kumar</div>
                            <div className="wid-19">abc@gmail.com</div>
                            <div className="wid-19">9652415278</div>
                            <div className="wid-19">Super Admin</div>
                            <div className="wid-14"></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-14">02</div>
                            <div className="wid-22">Amar Kumar</div>
                            <div className="wid-19">amar@gmail.com</div>
                            <div className="wid-19">9856254125</div>
                            <div className="wid-19">Manager</div>
                            <div className="wid-14"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i><i class="fa-solid fa-trash fa-xs deleteIcon"></i></div>
                        </div>
                    </div>
                </div> 
                }
                {staffList===2&& !addRole &&
                <div className="bg-white py-3 mb-3">
                    <div className="d-flex px-4 justify-content-between">
                        <div>Roles</div>
                        <div><button className="btn btn-danger" onClick={()=>{setAddRole(true);setAddStaff(false)}}>Add New Roles</button></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-14">Id</div>
                        <div className="wid-80">Name</div>
                        <div className="wid-14">Options</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-14">01</div>
                            <div className="wid-80">Super Admin</div>
                            <div className="wid-14"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-14">02</div>
                            <div className="wid-80">Manager</div>
                            <div className="wid-14"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i><i class="fa-solid fa-trash fa-xs deleteIcon"></i></div>
                        </div>
                    </div>
                </div>
                }
                
            </div>
            <div>
            {addStaff&&
                <div className="bg-white w-75 m-auto py-3">
                    <div className="d-flex px-4 fw-bold">
                        <div>Staff Information</div>
                    </div>
                    <div className="row m-2 px-1 mt-4">
                        <div className="col-3">First Name</div>
                        <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-4">
                        <div className="col-3">Last Name</div>
                        <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-4">
                        <div className="col-3">Email</div>
                        <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-4">
                        <div className="col-3">Phone</div>
                        <div className="col-7"><input className="appereInput w-100" type="number" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-4">
                        <div className="col-3">Password</div>
                        <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-4">
                        <div className="col-3">Role</div>
                        <div className="col-7">
                            <select className="appereInput bg-white w-100">
                                <option disabled>Select</option>
                                <option>Manager</option>
                                <option>Super Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-end px-4"><button className="updateBtn" onClick={()=>setAddStaff(false)}>Save</button></div>
                </div>
            }

            </div>
            <div>
            {addRole &&
                <div className="bg-white  py-3">
                    <div className="d-flex px-4 fw-bold">
                        <div>Add Role Information</div>
                    </div>
                    <div className="row m-2 w-75 m-auto px-1 mt-4">
                        <div className="col-2">Role Name</div>
                        <div className="col-7"><input className="appereInput w-100" type="text" /></div>
                    </div>
                    <div className="px-4 mt-4 fw-bold">Permisions</div>
                    <div className="bg-light border m-3 rounded">
                        <div className="px-3 py-2">Member</div>
                        <div className="bg-white rounded ">
                            <div className="memberCard">
                                <div>Shows Members</div>
                                {multipleSlider("showsMembers",showsMembers)}
                            </div>
                            <div className="memberCard">
                                <div>Create Members</div>
                                {multipleSlider("createMembers",createMembers)}
                            </div>
                            <div className="memberCard">
                                <div>Edit Members</div>
                                {multipleSlider("editMembers",editMembers)}
                            </div>
                            <div className="memberCard">
                                <div>Delete Members</div>
                                {multipleSlider("deleteMembers",deleteMembers)}
                            </div>
                            <div className="memberCard">
                                <div>View Members Profile</div>
                                {multipleSlider("viewMembersProfile",viewMembersProfile)}
                            </div>
                            <div className="memberCard">
                                <div>Block Members</div>
                                {multipleSlider("blockMembers",blockMembers)}
                            </div>
                            <div className="memberCard">
                                <div>Approve Members</div>
                                {multipleSlider("approveMembers",approveMembers)}
                            </div>
                            <div className="memberCard">
                                <div>Update Members Package</div>
                                {multipleSlider("updateMembersPackage",updateMembersPackage)}
                            </div>
                            <div className="memberCard">
                                <div>Delete Members Show</div>
                                {multipleSlider("deleteMembersShow",deleteMembersShow)}
                            </div>
                            <div className="memberCard">
                                <div>View Reported Profile</div>
                                {multipleSlider("viewReportedProfile",viewReportedProfile)}
                            </div>
                        </div>
                    </div>
                    <div className="bg-light border m-3 rounded">
                        <div className="px-3 py-2">Profile Attributes</div>
                        <div className="bg-white rounded ">
                            <div className="memberCard">
                                <div>Shows Religions</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add Religion</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Religion</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Religion</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show Castes</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add Castes</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Castes</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Castes</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show Sab Castes</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Sab Castes</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show Countries</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add Country</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Conutry</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Country</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show States</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add State</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit State</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete State</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show Cities</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add City</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit City</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete City</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show Family value</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add Family value</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Family value</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Family value</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Show Marital Status</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add Marital Status</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Marital Status</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Marital Status</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-light border m-3 rounded">
                        <div className="px-3 py-2">Package</div>
                        <div className="bg-white rounded ">
                            <div className="memberCard">
                                <div>Show Packages</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Add Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Delete Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light border m-3 rounded">
                        <div className="px-3 py-2">Package Payment</div>
                        <div className="bg-white rounded ">
                            <div className="memberCard">
                                <div>Show Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>View Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Edit Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="memberCard">
                                <div>Manage Package</div>
                                <label class="switch">
                                    <input type="checkbox" class="toggle-input"/>
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                   
                   
                    <div className="text-end px-4"><button className="updateBtn" onClick={()=>setAddRole(false)}>Save</button></div>
                </div>
            }

            </div>
        </div>
    )


}
export default Staffs;