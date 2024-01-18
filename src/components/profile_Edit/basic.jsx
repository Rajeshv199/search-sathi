import { useState } from 'react';
import logo from './.././../asset/logo1.png';
import { Link, Prompt } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Basic() {

    function multiInputs(label,name,value){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' name={name}  />
            </div>
        )
    }

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>
            <div className='profile-box p-4'>
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Basic Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    {multiInputs("Name","name")}
                    <div className='custom-form'>
                        <label>Gender</label>
                        <span class="material-symbols-outlined lock">lock</span>
                        <input type='text'/>
                    </div>
                    {multiInputs("Date of Birth","dob")}
                    {multiInputs("Marital Status","maritalStatus")}
                    {multiInputs("Height","height")}
                    {multiInputs("Religion","religion")}
                    {multiInputs("Caste","caste")}
                    {multiInputs("Mother Tongue","motherTongue")}
                    {multiInputs("Current Location","currentLocation")}
                    {multiInputs("Anuual Income ","anuualIncome")}
                    
                    <div className="saveBtn2">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            
        </div>

    </div>
)
}