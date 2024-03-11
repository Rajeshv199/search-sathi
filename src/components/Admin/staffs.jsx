import React, { useState,useRef,useEffect } from "react";

function Staffs(props) {
    
   const[addStaff,setAddStaff] = useState(false)

      const{staffList}=props;
    return(
        <div className="members-section">
            <h5 className="m-0 py-4">
                {staffList===1?"All Staffs":staffList===2?"All Roles":""}
            </h5>
            <div>
                
                {staffList===1&& !addStaff &&
                <div className="bg-white py-3">
                    <div className="d-flex px-4 justify-content-between">
                        <div>Staffs</div>
                        <div><button className="btn btn-danger" onClick={()=>setAddStaff(true)}>Add New Staffs</button></div>
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
                {staffList===2&&
                <div className="bg-white py-3">
                    <div className="d-flex px-4 justify-content-between">
                        <div>Roles</div>
                        <div><button className="btn btn-danger">Add New Roles</button></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-14">Id</div>
                        <div className="wid-40">Name</div>
                        <div className="wid-14">Options</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-14">01</div>
                            <div className="wid-40">Super Admin</div>
                            <div className="wid-14"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-14">02</div>
                            <div className="wid-40">Manager</div>
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
        </div>
    )


}
export default Staffs;