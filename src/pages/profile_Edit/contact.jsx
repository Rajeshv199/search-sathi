import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Contact() {

    const[contactData,setContactData] = useState({email:"Abcsdd@gmail.com",alternateEmail:"",mobileNo:"+91 8965214542",alternateMobileNo:""});
    const history = useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let contactData1 = {...contactData}
        contactData1[input.name] = input.value;
        setContactData(contactData1);
    }

    function multiInputs(label,name,value){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' name={name} value={value} onChange={handleChange} />
            </div>
        )
    }
    function handleSubmit(){
        history.push("/view/my-profile")
    }

    const{email,alternateEmail,mobileNo,alternateMobileNo} = contactData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/view/my-profile"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Contact Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    {multiInputs("Email ID","email",email)}
                    {multiInputs("Alternate Email Id","alternateEmail",alternateEmail)}
                    <div className='custom-form'>
                        <label>Mobile No</label>
                        <input type='number' name="mobileNo" value={mobileNo} onChange={handleChange} />
                    </div>
                    <div className='custom-form'>
                        <label>Alternate Mobile No</label>
                        <input type='number' name="alternateMobileNo" value={alternateMobileNo} onChange={handleChange} />
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