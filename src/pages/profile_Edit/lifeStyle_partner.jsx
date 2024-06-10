import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function LifeStyle_Partner() {
    const[lifeStyleData,setLifeStyleData] = useState({drinkingHabits:[],dietaryHabits:[],smokingHabits:[],specialCase:[]});
    const history = useHistory();

    
    function handleMutiSelected(val,arr){
        let lifeStyleData1 = {...lifeStyleData}
        let find = arr.find(b1=>b1===val);
        if(find){
            let index = arr.findIndex(b1=>b1===val);
            if(index>=0) arr.splice(index,1);
        }else{
            if(val==="Doesn't Matter"){
                arr.splice(0, arr.length);
                arr.push("Doesn't Matter");
            }
            else{
                let index = arr.findIndex(b1=>b1==="Doesn't Matter");
                if(index>=0) arr.splice(index,1);
                arr.push(val);
            }
        }
        setLifeStyleData(lifeStyleData1);
    }
     
    function handleSubmit(){
        history.push("/my-partner")
    }

    let drinkingHabitArr=["Doesn't Matter","Yes", "No","Occasionally"];
    let dietaryHabitArr=["Doesn't Matter","Vegetarian","Non Vegetarian","Jain"];
    let specialCaseArr=["Doesn't Matter","None","Physically disabled from birth","Physically disabled due to accident","Mentally disabled from birth","Mentally disabled due to accident"];
    const{drinkingHabits,dietaryHabits,smokingHabits,specialCase}= lifeStyleData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/my-partner"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>LifeStyle Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    <div className='custom-form'>
                        <label>Drinking Habits</label>
                        <div className='habitsOpt'>
                            {drinkingHabitArr.map((h1,index)=>(
                                <button className={drinkingHabits.find(m1=>m1===h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,drinkingHabits)} key={index}>
                                    {h1} {drinkingHabits.find(m1=>m1===h1)?<i className="fa-solid fa-check fa-sm text-danger"></i>:<i className="fa-solid fa-plus fa-sm"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='custom-form'>
                        <label>Dietary Habits</label>
                        <div className='habitsOpt'>
                            {dietaryHabitArr.map((h1,index)=>(
                                <button className={dietaryHabits.find(m1=>m1===h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,dietaryHabits)} key={index}>
                                    {h1} {dietaryHabits.find(m1=>m1===h1)?<i className="fa-solid fa-check fa-sm text-danger"></i>:<i className="fa-solid fa-plus fa-sm"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='custom-form'>
                        <label>Smoking Habits</label>
                        <div className='habitsOpt'>
                            {drinkingHabitArr.map((h1,index)=>(
                                <button className={smokingHabits.find(m1=>m1===h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,smokingHabits)} key={index}>
                                    {h1} {smokingHabits.find(m1=>m1===h1)?<i className="fa-solid fa-check fa-sm text-danger"></i>:<i className="fa-solid fa-plus fa-sm"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='custom-form'>
                        <label>Special Case</label>
                        <div className='habitsOpt'>
                            {specialCaseArr.map((h1,index)=>(
                                <button className={specialCase.find(m1=>m1===h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,specialCase)} key={index}>
                                    {h1} {specialCase.find(m1=>m1===h1)?<i className="fa-solid fa-check fa-sm text-danger"></i>:<i className="fa-solid fa-plus fa-sm"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
)
}