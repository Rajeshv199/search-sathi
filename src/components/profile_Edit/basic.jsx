import { useState } from 'react';
import {Link,useHistory } from "react-router-dom";

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Basic() {

    const[ispop,setIsPop] = useState(-1);
    const[basicData,setBasicData] = useState({name:"Rajesh",gender:"Male",date:"01/02/2000",maritalStatus:"Never Married",height:`4' 0" (1.22 mts)`,religion:"Hindu",caste:"Banik",motherTongue:"Hindi",currentLocation:"Kolkata",anualIncome:"Rs. 3 - 5 Lakh"})
    const history =  useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let basicData1 = {...basicData}
        basicData1[input.name] = input.value;
        setBasicData(basicData1);
    }
    function handleSelected(val,name){
        let basicData1 = {...basicData}
        basicData1[name]= val;
        setBasicData(basicData1);
    }


    function multiRadioBtn(title,arr,name,value){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'>{title}</h5>
                        <div className='popContaner'>
                            {arr.map((a1,index)=>(
                                <label key={index} onClick={()=>setTimeout(()=>setIsPop(-1),100)}>
                                    <input type='radio' name={name} value={a1} checked={a1===value} onChange={handleChange} />
                                    <div className='px-2'>{a1}</div>
                                </label>
                            ))}
                        </div>
                        {/* <button className="ubmitopt2" onClick={()=>setIsPop(false)}>Done</button> */}
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i className="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </div>
            </div>
        )
    }

    function handleSubmit(){
        history.push("/profile_edit")
    }

    let maritalStatusArr=["Never Married","Awaiting Divorce","Divorced","Widowed","Annulled"];
    let heightArr = [];  for(let i=0;i<10;i++){heightArr.push(`4' ${i}" (1.22 mts)`);}
    let religionArr=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let motherTongueArr = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"];
    let anualIncomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];

    const{name,gender,date,maritalStatus,height,religion,caste,motherTongue,currentLocation,anualIncome} = basicData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>
            <div className='profile-box p-4'>
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Basic Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    <div className='custom-form'>
                        <label>Name</label>
                        <input type='text' name='name' value={name} onChange={handleChange}/>
                    </div>
                    <div className='custom-form'>
                        <label>Gender</label>
                        <span className="material-symbols-outlined lock">lock</span>
                        <input type='text' readOnly name='gender' value={gender} />
                    </div>
                    <div className='custom-form'>
                        <label>Date</label>
                        <input type='date' name='date' value={date} onChange={handleChange}/>
                    </div>
                                       
                    <div className='custom-form'>
                        <label>Height</label>
                        <input type='text' readOnly value={height} onClick={()=>setIsPop(2)}/>
                    </div>
                    <div className='custom-form w-100'>
                        <label>Marital Status</label>
                        <div className='habitsOpt'>
                            {maritalStatusArr.map((h1,index)=>(
                                <button className={maritalStatus===h1?"bgcolor":""} onClick={()=>handleSelected(h1,"maritalStatus")} key={index}>{h1}</button>
                            ))}
                        </div>
                    </div>
                    <div className='custom-form'>
                        <label>Religion</label>
                        <input type='text' readOnly value={religion} onClick={()=>setIsPop(3)}/>
                    </div>
                    <div className='custom-form'>
                        <label>Caste</label>
                        <input type='text' readOnly value={caste} onClick={()=>setIsPop(4)}/>
                    </div>
                    <div className='custom-form'>
                        <label>Mother Tongue</label>
                        <input type='text' readOnly value={motherTongue} onClick={()=>setIsPop(5)}/>
                    </div>
                    <div className='custom-form'>
                        <label>Current Location</label>
                        <input type='text' name='currentLocation' value={currentLocation} onChange={handleChange}/>
                    </div>
                    <div className='custom-form'>
                        <label>Anuual Income</label>
                        <input type='text' readOnly value={anualIncome} onClick={()=>setIsPop(6)}/>
                    </div>
                    
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            
            {ispop===2?multiRadioBtn("Height",heightArr,"height",height):null}
            {ispop===3?multiRadioBtn("Religion",religionArr,"religion",religion):null}
            {ispop===4?multiRadioBtn("Caste",religionArr,"caste",caste):null}
            {ispop===5?multiRadioBtn("Mother Tongue",motherTongueArr,"motherTongue",motherTongue):null}
            {ispop===6?multiRadioBtn("Anuual Income",anualIncomeArr,"anualIncome",anualIncome):null}
        </div>

        

    </div>
)
}