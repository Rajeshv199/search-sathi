import React,{ useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Education() {
    const[eductionData,setEductionData] = useState({highestDegree:"MCA",pgDegree:"MCA",pgCollege:"University Evening College",ugDegree:"BCA",ugCollege:"Annamalai University",school:"Independent HPS, Haroorgeri",aboutEducton:"The term education can be applied to primitive cultures only in the sense of enculturation"})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();
    
    function handleChange(e){
        const {currentTarget: input} = e;
        let eductionData1 = {...eductionData}
        eductionData1[input.name] = input.value;
        setEductionData(eductionData1);
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
                                    <input type='radio' name={name} value={a1} checked={a1===value} onChange={handleChange} />
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


    let heighDegreesArr = ["ACDA","B.IT","BCA","BBA","DCA","MCA","MBA","B.Tech","MCM","B.Com","CA","CS"];
    let pgDegreeArr=["MCA","MCM","MBA"];
    let ugDegreeArr=["BBA","BMS","BFA","BEM","B.Sc","BA","B.Tech","BCA","BPT","CA","CS"]

    const{highestDegree,pgDegree,pgCollege,ugDegree,ugCollege,school,aboutEducton}=eductionData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Education Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    {multiInputs("Highest Degree",highestDegree,1)}

                    {pgDegreeArr.find(p1=>p1===highestDegree)&&
                    <React.Fragment>
                        {multiInputs("PG Degree",pgDegree,2)}

                        <div className='custom-form'>
                            <label>PG College</label>
                            <input type='text' name='pgCollege' value={pgCollege} onChange={handleChange}/>
                        </div>
                    </React.Fragment>
                    }
                    
                    {pgDegreeArr.find(p1=>p1===highestDegree)|| ugDegreeArr.find(p1=>p1===highestDegree)?
                    <React.Fragment>
                        {multiInputs("UG Degree",ugDegree,3)}
                        
                        <div className='custom-form'>
                            <label>UG College</label>
                            <input type='text' name='ugCollege' value={ugCollege} onChange={handleChange}/>
                        </div>
                    </React.Fragment>
                    :null}

                    <div className='custom-form'>
                        <label>School</label>
                        <input type='text' name='school' value={school} onChange={handleChange}/>
                    </div>
                    
                    <div className='custom-textarea mt-4'>
                        <label>About My Education</label>
                        <textarea name="aboutEducton" value={aboutEducton}  className='w-100' rows="6" onChange={handleChange}></textarea>
                    </div>
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop===1?multiRadioBtn("Highest Degree",heighDegreesArr,"highestDegree",highestDegree):null}
            {ispop===2?multiRadioBtn("Height",pgDegreeArr,"pgDegree",pgDegree):null}
            {ispop===3?multiRadioBtn("Religion",ugDegreeArr,"ugDegree",ugDegree):null}
        </div>


    </div>
)
}