import React,{ useState } from 'react';
import logo from './.././../asset/logo1.png';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Education() {
    const[educt_occuption,setEduct_occuption] = useState({heightDegree:[],occupation:[],anuualIncome:[]});
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let educt_occuption1 = {...educt_occuption}
        input.type === "checkbox"?
        educt_occuption1[input.name] = updateCBs(educt_occuption1[input.name],input.checked,input.value):
        educt_occuption1[input.name] = input.value;
        setEduct_occuption(educt_occuption1);
    }
    function updateCBs(inpArr, checked, value){
        if(checked) inpArr.push(value);
        else{
            let index = inpArr.findIndex((ele)=> ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    function multiInputs2(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value.length<=3?value.join(", "):`${value[0]}, ${value[1]}, ${value[2]}, +${value.length-3} More`} onClick={()=>setIsPop(no)}/>
                
            </div>
        )
    }

    function multiCheckBox(title,arr,name,value){
        console.log(value);
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'>{title}</h5>
                        <ul className='select-item'>
                            {value.length<=3? value.map((v1,index)=><li key={index}>{v1}<i class="fa-solid fa-xmark fa-sm"></i></li>):
                            <React.Fragment>
                            <li>{value[0]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <li>{value[1]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <li>{value[2]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <div>+{value.length-3} More</div>
                            </React.Fragment>
                            }
                        </ul>
                        <div className='popContaner2'>
                            {arr.map((a1,index)=>(
                                <label key={index} >
                                    <input type='checkbox' name={name} value={a1} checked={value.findIndex((tech)=>tech===a1) >= 0} onChange={handleChange} />
                                    <div className='px-2'>{a1}</div>
                                </label>
                            ))}
                        </div>
                        <button className="submitopt2" onClick={()=>setIsPop(false)}>Done</button>
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i class="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </div>
            </div>
        )
    }
    function handleSubmit(){
        history.push("/edit/partner")
    }

    let heighDegreesArr = ["ACDA","B.IT","BCA","BBA","DCA","MCA","MBA","B.Tech","MCM","B.Com","CA","CS"];
    let occupationArr=["Engineer","Architect","Scientist","Teacher","Technician","Civil engineer","Electrical engineer","Psychologist"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    
    const{heightDegree,occupation,anuualIncome} =educt_occuption; 

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/edit/partner"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Education & Occupation</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    {multiInputs2("Height Degree",heightDegree,1)}
                    {multiInputs2("Occupation",occupation,2)}
                    {multiInputs2("Anuual Income",anuualIncome,3)}
                    
                    
                    
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop==1?multiCheckBox("Height Degree",heighDegreesArr,"heightDegree",heightDegree):null}
            {ispop==2?multiCheckBox("Occupation",occupationArr,"occupation",occupation):null}
            {ispop==3?multiCheckBox("Anuual Income",incomeArr,"anuualIncome",anuualIncome):null}
        </div>

    </div>
)
}