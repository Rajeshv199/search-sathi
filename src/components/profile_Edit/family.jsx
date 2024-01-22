import { useState } from 'react';
import { Link, Prompt,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Family() {
    const[familyData,setFamilyData] = useState({familyStatus:"",fatherOccupation:"",familyType:"",motherOccupation:"",noOfBrother:"",familyLiving:"",noOfSister:"",aboutFmaily:""})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let familyData1 = {...familyData}
        familyData1[input.name] = input.value;
        setFamilyData(familyData1);
    }

    function handleSelected(val,name){
        let familyData1 = {...familyData};
        familyData1[name]= val;
        setFamilyData(familyData1);
    }

    function multiInputs(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value} onClick={()=>setIsPop(no)}/>
            </div>
        )
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

    let fatherOccuArr = ["Business/Entrepreneur","Service-Private","Army/Armed Forces","Civil Services","Retired"];
    let motherOccuArr = ["Housewife","Service-Private","Teacher","Civil Services","Retired"];

    const{familyStatus,fatherOccupation,familyType,motherOccupation,noOfBrother,familyLiving,noOfSister,aboutFmaily} = familyData;
    
    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'> About My Family</h5>
                    <div>Talk about your family members</div>
                </div>
                <div className=''>

                    <div className='custom-form'>
                        <label>Family Status</label>
                        <div className='habitsOpt'>
                            <button className={familyStatus=="Rich"?"bgcolor":""} onClick={()=>handleSelected("Rich","familyStatus")}>Rich</button>
                            <button className={familyStatus=="Upper Class"?"bgcolor":""} onClick={()=>handleSelected("Upper Class","familyStatus")}>Upper Middle Class</button>
                            <button className={familyStatus=="Middle Class"?"bgcolor":""} onClick={()=>handleSelected("Middle Class","familyStatus")}>Middle Class</button>
                        </div>
                    </div>

                    <div className='custom-form'>
                        <label>Family Type</label>
                        <div className='habitsOpt'>
                            <button className={familyType=="Joint Family"?"bgcolor":""} onClick={()=>handleSelected("Joint Family","familyType")}>Joint Family</button>
                            <button className={familyType=="Nuculear Family"?"bgcolor":""} onClick={()=>handleSelected("Nuculear Family","familyType")}>Nuculear Family</button>
                            <button className={familyType=="Other"?"bgcolor":""} onClick={()=>handleSelected("Other","familyType")}>Other</button>
                        </div>
                    </div>
                    
                    {multiInputs("Father's Occupation",fatherOccupation,1)} 
                    {multiInputs("Mother's Occupation",motherOccupation,2)} 

                    <div className='custom-form'>
                        <label>No. of Brothers</label>
                        <div className='habitsOpt'>
                            <button className={noOfBrother=="0"?"bgcolor":""} onClick={()=>handleSelected("0","noOfBrother")}>0</button>
                            <button className={noOfBrother=="1"?"bgcolor":""} onClick={()=>handleSelected("1","noOfBrother")}>1</button>
                            <button className={noOfBrother=="2"?"bgcolor":""} onClick={()=>handleSelected("2","noOfBrother")}>2</button>
                            <button className={noOfBrother=="3"?"bgcolor":""} onClick={()=>handleSelected("3","noOfBrother")}>3</button>
                            <button className={noOfBrother=="3+"?"bgcolor":""} onClick={()=>handleSelected("3+","noOfBrother")}>3+</button>
                        </div>
                    </div>
                    <div className='custom-form'>
                        <label>No. of Sisters</label>
                        <div className='habitsOpt'>
                            <button className={noOfSister=="0"?"bgcolor":""} onClick={()=>handleSelected("0","noOfSister")}>0</button>
                            <button className={noOfSister=="1"?"bgcolor":""} onClick={()=>handleSelected("1","noOfSister")}>1</button>
                            <button className={noOfSister=="2"?"bgcolor":""} onClick={()=>handleSelected("2","noOfSister")}>2</button>
                            <button className={noOfSister=="3"?"bgcolor":""} onClick={()=>handleSelected("3","noOfSister")}>3</button>
                            <button className={noOfSister=="3+"?"bgcolor":""} onClick={()=>handleSelected("3+","noOfSister")}>3+</button>
                        </div>
                    </div>

                    <div className='custom-form'>
                        <label>Family Living in</label>
                        <input type='text' name='familyLiving' value={familyLiving} onChange={handleChange}/>
                    </div>
                    <div className='custom-textarea mt-4'>
                        <label>About My Family</label>
                        <textarea name="aboutFmaily" value={aboutFmaily} className='w-100' rows="6" onChange={handleChange}></textarea>
                    </div>
                   
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop==1?multiRadioBtn("Father's Occupation",fatherOccuArr,"fatherOccupation",fatherOccupation):null}
            {ispop==2?multiRadioBtn("Mother's Occupation",motherOccuArr,"motherOccupation",motherOccupation):null}
        </div>

    </div>
)
}