import { useState } from 'react';
import logo from './.././../asset/logo1.png';
import { Link, Prompt } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function LifeStyle() {

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
                    <h5 className='m-0'>LifeStyle Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    {multiInputs("Drinking Habits","drinkingHabits")}
                    {multiInputs("Hobbies","hobbies")} 
                    {multiInputs("Dietary Habits","dietaryHabits")} 
                    {multiInputs("Interests","interests")} 
                    {multiInputs("Smoking Habits","smokingHabits")} 
                    {multiInputs("Languages","languages")} 
                    {multiInputs("Favourite Music","favouriteMusic")} 
                    {multiInputs("Movies","movies")} 
                    {multiInputs("Favourite Books","favouriteBooks")} 
                    {multiInputs("Sports","sports")} 
                   
                    <div className="saveBtn2">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}