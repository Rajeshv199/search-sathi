import React,{ useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function BasicPartner() {
    const[basicPartner,setBasicPartner] = useState({minHeight:`4' 0" (1.22 mts)`,maxHeight:`4' 3" (1.22 mts)`,minAge:18,maxAge:20,maritalStatus:[],country:[],residentialStatus:[]})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();

  
    function handleChange(e){
        const {currentTarget: input} = e;
        let basicPartner1 = {...basicPartner}
        input.type === "checkbox"?
        basicPartner1[input.name] = updateCBs(basicPartner1[input.name],input.checked,input.value):
        basicPartner1[input.name] = input.value;
        setBasicPartner(basicPartner1);
    }
    function handleMutiSelected(val,arr){
        let basicPartner1 = {...basicPartner}
        let find = arr.find(b1=>b1==val);
        if(find){
            let index = arr.findIndex(b1=>b1==val);
            if(index>=0) arr.splice(index,1);
        }else{
            if(val=="Doesn't Matter"){
                arr.splice(0, arr.length);
                arr.push("Doesn't Matter");
            }
            else{
                let index = arr.findIndex(b1=>b1=="Doesn't Matter");
                if(index>=0) arr.splice(index,1);
                arr.push(val);
            }
                
        }
            
        setBasicPartner(basicPartner1);
    }
    function updateCBs(inpArr, checked, value){
        if(checked) inpArr.push(value);
        else{
            let index = inpArr.findIndex((ele)=> ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    function closePopup(){
        setIsPop(-1);
        ispop==1?setTimeout(()=>{setIsPop(2);},100):
        setTimeout(()=>{setIsPop(5);},100);
    }
  

    function multiInputs(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value} onClick={()=>setIsPop(no)}/>
            </div>
        )
    }
    function multiInputs2(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value.length<=3?value.join(", "):`${value[0]}, ${value[1]}, ${value[2]}, +${value.length-3} More`} onClick={()=>setIsPop(no)}/>
                
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
                                <label key={index} onClick={()=>{setTimeout(closePopup, 100)}}>
                                    <input type='radio' name={name} value={a1} checked={a1==value} onChange={handleChange} />
                                    <div className='px-2'>{a1}{name=="minAge"?" Years":""}</div>
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
    function multiCheckBtnSecond(title,arr,name,value){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'><i class="fa-solid fa-chevron-left fa-xs" onClick={()=>{name=="maxHeight"?setIsPop(1):setIsPop(4)}}></i>{title}</h5>
                        <ul className='select-item'><li>{name=="maxHeight"?minHeight:minAge +" Years"} <i class="fa-solid fa-xmark fa-sm"></i></li></ul>
                        <div className='popContaner'>
                            {arr.map((a1,index)=>(
                                <label key={index} onClick={()=>setTimeout(()=>setIsPop(-1),100)}>
                                    <input type='radio' name={name} value={a1} checked={a1==value} onChange={handleChange} />
                                    <div className='px-2'>{a1}{name=="maxAge"?" Years":""}</div>
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
    let ageArr = [];for(let i=18;i<=70;i++) ageArr.push(i);
    
    let heightArr = [];
    for(let i=0;i<10;i++){heightArr.push(`4' ${i}" (1.22 mts)`);}
    let maritalStatusArr=["Doesn't Matter","Never Married","Awaiting Divorce","Divorced","Widowed","Married"];
    let residentialStatusArr = ["Doesn't Matter","Citizen","Work Permit","Student Visa  ","Permanent Resident"];
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina","Kazakhstan","Algeria"];
    const{minHeight,maxHeight,minAge,maxAge,maritalStatus,country,residentialStatus} = basicPartner;

    
    // let height2 = 
    if(minHeight<maxHeight){console.log("fff");}

    let ageArr2 = [];for(let i=+minAge+1;i<=70;i++) ageArr2.push(i);
    let index = heightArr.findIndex(h1=>h1==minHeight);
    let heightArr2 = [];
    for(let i=index+1;i<10;i++){heightArr2.push(`4' ${i}" (1.22 mts)`);}

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/edit/partner"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Basic Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                   
                    {multiInputs("Height",`${minHeight} - ${maxHeight}`,1)}
                    {multiInputs("Age",`${minAge} Years - ${maxAge} Years`,4)}
                    <div className='custom-form w-100'>
                        <label>Marital Status</label>
                        <div className='habitsOpt'>
                            {maritalStatusArr.map((h1,index)=>(
                                <button className={maritalStatus.find(m1=>m1==h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,maritalStatus)} key={index}>
                                    {h1} {maritalStatus.find(m1=>m1==h1)?<i class="fa-solid fa-check fa-sm text-danger"></i>:<i class="fa-solid fa-plus fa-sm"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                    {multiInputs2("Country",country,6)}
                    <div className='custom-form'>
                        <label>Residential Status</label>
                        <div className='habitsOpt'>
                            {residentialStatusArr.map((h1,index)=>(
                                <button className={residentialStatus.find(m1=>m1==h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,residentialStatus)} key={index}>
                                    {h1} {residentialStatus.find(m1=>m1==h1)?<i class="fa-solid fa-check fa-sm text-danger"></i>:<i class="fa-solid fa-plus fa-sm"></i>}
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
        <div>
            {ispop==1?multiRadioBtn("Minimum Height",heightArr,"minHeight",minHeight):null}
            {ispop==2?multiCheckBtnSecond("Maximum Height",heightArr2,"maxHeight",maxHeight):null}
            {ispop==4?multiRadioBtn("Minimum Age",ageArr,"minAge",minAge):null}
            {ispop==5?multiCheckBtnSecond("Maximum Age",ageArr2,"maxAge",maxAge):null}
            {ispop==6?multiCheckBox("Country",countries,"country",country):null}
            
        </div>

    </div>
)
}
