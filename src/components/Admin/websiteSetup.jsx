import React, { useState,useRef,useEffect } from "react";

function WebsiteSetup(props) {
    
   

      const{websiteList}=props;
    return(
        <div className="members-section">
            <h5 className="m-0 py-4">
                {websiteList===1?"Website Header":websiteList===2?"Website Footer":websiteList===3?"Website Pages":websiteList===4?
                "General":""}
            </h5>
            <div >
                
                {websiteList===1&&
                <div className="bg-white w-75 m-auto py-3">
                    <div className="d-flex px-4 fw-bold">
                        <div>Header Settings</div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-4">
                            <div className="mb-4 pb-2">Header Logo</div>
                            <div className="mb-4 pb-2">Meta Image</div>
                        </div>
                        <div className="col-7">
                            <div className="mb-4 pb-2"><input type="file" /></div>
                            <div className="mb-4 pb-2"><input type="file" /></div>
                        </div>
                    </div>
                    <div className="text-center"><button className="updateBtn">Update</button></div>
                </div>
                }
                {websiteList===2&&
                <div>
                    <div className="bg-white w-75 m-auto py-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Footer Settings</div>
                        </div>
                        <div className="row m-2 px-1 mt-5">
                            <div className="col-4">
                                <div className="mb-4 pb-2">Footer Logo</div>
                            </div>
                            <div className="col-7">
                                <div className="mb-4 pb-2"><input type="file" /></div>
                            </div>
                            <div className="text-end"><button className="updateBtn">Update</button></div>
                        </div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Contact widget</div>
                        </div>
                        <div className="setupInut">
                            <label>Address</label>
                            <input type="text" />
                        </div>
                        <div className="setupInut">
                            <label>Website</label>
                            <input type="text" />
                        </div>
                        <div className="setupInut">
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className="setupInut">
                            <label>Phone</label>
                            <input type="number" />
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Footer Copyright</div>
                        </div>
                        <div className="setupInut">
                            <label>Copyright Text</label>
                            <textarea rows="3" cols="76"></textarea>
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                    <div className="bg-white w-75 m-auto py-3 mt-3">
                        <div className="d-flex px-4 fw-bold">
                            <div>Social Link widget</div>
                        </div>
                        <div >
                            <div className="setupInut">
                                <label>Social Link</label>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-facebook-f"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-twitter"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-square-instagram"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-youtube"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                            <div className="setupInut2">
                                <i class="fa-brands fa-linkedin"></i>
                                <input type="text" placeholder="http://"/>
                            </div>
                        </div>
                        <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                    </div>
                </div>
                }
                {websiteList===3&&
                <div className="bg-white m-auto py-3 mt-3">
                    <div className="d-flex px-4 fw-bold justify-content-between">
                        <div>All pages</div>
                        <div><button className="btn btn-danger">Add New page</button></div>
                    </div>
                    <div className="membrs-list">
                        <div className="wid-40">Name</div>
                        <div className="wid-40">URL</div>
                        <div className="wid-22">Actions</div>
                    </div>
                    <div className="membrs-listData">
                        <div className="multipleData">
                            <div className="wid-40">Home Page</div>
                            <div className="wid-40">http://yogjodi.com</div>
                            <div className="wid-22"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-40">Terms conditions Page</div>
                            <div className="wid-40">http://yogjodi.com/terms-conditions</div>
                            <div className="wid-22"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        <div className="multipleData">
                            <div className="wid-40">Privacy Policy Page</div>
                            <div className="wid-40">http://yogjodi.com/privacy-policy</div>
                            <div className="wid-22"><i class="fa-solid fa-pen-to-square fa-xs editIcon"></i></div>
                        </div>
                        
                    </div>
                </div>
                }
                
                {websiteList===4&&
                <div className="bg-white m-auto py-3 mt-3">
                    <div className="d-flex px-4 fw-bold justify-content-between">
                        <div>General</div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Frontend Website Name</div>
                        <div className="col-7"><input className="appereInput w-75" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Site Icon</div>
                        <div className="col-7"><input className="appereInput w-75" type="file" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Website Base Color</div>
                        <div className="col-7"><input className="appereInput w-75" type="text" /></div>
                    </div>
                    <div className="row m-2 px-1 mt-5">
                        <div className="col-3">Member Profile Page Banner</div>
                        <div className="col-7"><input className="appereInput w-75" type="file" /></div>
                    </div>
                    <div className="text-end px-4"><button className="updateBtn">Update</button></div>
                   
                </div>
                }
                
            </div>
            

        </div>
    )


}
export default WebsiteSetup;