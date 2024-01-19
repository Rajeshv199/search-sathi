import { useState } from 'react';
import logo from './.././../asset/logo1.png';
import { Link, Prompt,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Career() {

    const[careerData,setCareerData] = useState({employee:"Private Sector",occupation:"Operator",organization:"Sobha Developers Limited",aboutCareer:"You must consider a number of factors before deciding on your career. Each factor plays a significant role in your choice. Firstly,"})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let careerData1 = {...careerData}
        careerData1[input.name] = input.value;
        setCareerData(careerData1);
    }

    function multiInputs(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value} onClick={()=>setIsPop(no)}/>
            </div>
        )
    }

    function closePopup(){
        setIsPop(-1)
    }

    function multiSelected(title,arr,name,value){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'>{title}</h5>
                        <div className='popContaner'>
                            {arr.map((a1,index)=>(
                                <label key={index} onClick={()=>{setTimeout(closePopup, 100)}}>
                                    <input type='radio' name={name} value={a1} checked={a1==value} onChange={handleChange} />
                                    <div className='px-2'>{a1}</div>
                                </label>
                            ))}
                        </div>
                        {/* <button className="ubmitopt2" onClick={()=>setIsPop(false)}>Done</button> */}
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i class="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </div>
            </div>
        )
    }

    function handleSubmit(){
        history.push("/profile_edit")
    }


    let EmployeeArr = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let occupationArr=["Technician","Operator","Engineer","Aviator","Plumber","Architect","Scientist","Mechanical engineer","Civil engineer","Plasterer"]
    let organizationArr = ["United Nations","International Monetary Fund","World Health Organization","World Bank","Commonwealth of Nations"]
    const{employee,occupation,organization,aboutCareer} = careerData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Career Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    {multiInputs("Employed In",employee,1)}
                    {multiInputs("Occupation",occupation,2)}
                    {multiInputs("Organization",organization,3)}
                    <div className='custom-textarea mt-4'>
                        <label>About My Career</label>
                        <textarea  name="aboutCareer" value={aboutCareer} className='w-100' rows="6" onChange={handleChange}></textarea>
                    </div>
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop==1?multiSelected("Employed In",EmployeeArr,"employee",employee):null}
            {ispop==2?multiSelected("Occupation",occupationArr,"occupation",occupation):null}
            {ispop==3?multiSelected("Organization",organizationArr,"organization",organization):null}
        </div>

    </div>
)
}