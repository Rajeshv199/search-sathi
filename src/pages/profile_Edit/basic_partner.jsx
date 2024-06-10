import React,{ useState,useRef, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function BasicPartner() {
    const[basicPartner,setBasicPartner] = useState({minHeight:`4' 0" (1.22 mts)`,maxHeight:`4' 3" (1.22 mts)`,minAge:"18 Years",maxAge:"20 Years",maritalStatus:[],country:[],residentialStatus:[]})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();
    let item1ref = useRef(null);
  
    function handleChange(e){
        const {currentTarget: input} = e;
        let basicPartner1 = {...basicPartner};
        input.type === "checkbox"?
        basicPartner1[input.name] = updateCBs(basicPartner1[input.name],input.checked,input.value):
        basicPartner1[input.name] = input.value;
        setBasicPartner(basicPartner1);
    }
    function handleDelete(arr,val){
        let basicPartner1 = {...basicPartner};
        let index = arr.findIndex(a1=>a1===val);
        if(index>=0) arr.splice(index,1);
        setBasicPartner(basicPartner1);
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setIsPop(-1);
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    function handleMutiSelected(val,arr){
        let basicPartner1 = {...basicPartner}
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

    function closePopup(val){
        setIsPop(-1);
        if(ispop===1)setTimeout(()=>{setIsPop(2);},100);
        if(ispop===4)setTimeout(()=>{setIsPop(5);},100);
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
                    <div className="checkbox-Custom" ref={item1ref}>
                        <h5 className='mb-2'>{title}</h5>
                        <div className='popContaner'>
                            {arr.map((a1,index)=>(
                                <label key={index} onClick={()=>{setTimeout(closePopup, 100)}}>
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
    function multiRadioBtnSecond(title,arr,name,value,minval,prevPop){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom" ref={item1ref}>
                        <h5 className='mb-2'><i className="fa-solid fa-chevron-left fa-xs" onClick={()=>setIsPop(prevPop)}></i>{title}</h5>
                        <ul className='select-item'><li>{minval} <i className="fa-solid fa-xmark fa-sm"></i></li></ul>
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
    function multiCheckBox(title,arr,name,value){
        console.log(value);
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom" ref={item1ref}>
                        <h5 className='mb-2'>{title}</h5>
                        <ul className='select-item'>
                            {value.length<=3? value.map((v1,index)=><li key={index} onClick={()=>handleDelete(value,v1)}>{v1}<i className="fa-solid fa-xmark fa-sm"></i></li>):
                            <React.Fragment>
                            <li onClick={()=>handleDelete(value,value[0])}>{value[0]}<i className="fa-solid fa-xmark fa-sm"></i></li>
                            <li onClick={()=>handleDelete(value,value[1])}>{value[1]}<i className="fa-solid fa-xmark fa-sm"></i></li>
                            <li onClick={()=>handleDelete(value,value[2])}>{value[2]}<i className="fa-solid fa-xmark fa-sm"></i></li>
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
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i className="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </div>
            </div>
        )
    }
    
    function handleSubmit(){
        history.push("/my-partner")
    }
    let ageArr = [];for(let i=18;i<=70;i++) ageArr.push(i+" Years");
    
    let heightArr = [];
    for(let i=0;i<10;i++){heightArr.push(`4' ${i}" (1.22 mts)`);}
    let maritalStatusArr=["Doesn't Matter","Never Married","Awaiting Divorce","Divorced","Widowed","Married"];
    let residentialStatusArr = ["Doesn't Matter","Citizen","Work Permit","Student Visa  ","Permanent Resident"];
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina","Kazakhstan","Algeria"];
    const{minHeight,maxHeight,minAge,maxAge,maritalStatus,country,residentialStatus} = basicPartner;

    let heightArr2= [...heightArr].splice(heightArr.indexOf(minHeight,1)+1);
    let ageArr2 =[...ageArr].splice(ageArr.indexOf(minAge,1)+1);

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/my-partner"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Basic Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    {multiInputs("Height",`${minHeight} - ${maxHeight}`,1)}
                    {multiInputs("Age",`${minAge} - ${maxAge}`,4)}
                    
                    <div className='custom-form w-100'>
                        <label>Marital Status</label>
                        <div className='habitsOpt'>
                            {maritalStatusArr.map((h1,index)=>(
                                <button className={maritalStatus.find(m1=>m1===h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,maritalStatus)} key={index}>
                                    {h1} {maritalStatus.find(m1=>m1===h1)?<i className="fa-solid fa-check fa-sm text-danger"></i>:<i className="fa-solid fa-plus fa-sm"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                    {multiInputs2("Country",country,6)}
                    <div className='custom-form'>
                        <label>Residential Status</label>
                        <div className='habitsOpt'>
                            {residentialStatusArr.map((h1,index)=>(
                                <button className={residentialStatus.find(m1=>m1===h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,residentialStatus)} key={index}>
                                    {h1} {residentialStatus.find(m1=>m1===h1)?<i className="fa-solid fa-check fa-sm text-danger"></i>:<i className="fa-solid fa-plus fa-sm"></i>}
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
            {ispop===1?multiRadioBtn("Minimum Height",heightArr,"minHeight",minHeight):null}
            {ispop===2?multiRadioBtnSecond("Maximum Height",heightArr2,"maxHeight",maxHeight,minHeight,1):null}
            {ispop===4?multiRadioBtn("Minimum Age",ageArr,"minAge",minAge):null}
            {ispop===5?multiRadioBtnSecond("Maximum Age",ageArr2,"maxAge",maxAge,minAge,4):null}
            {ispop===6?multiCheckBox("Country",countries,"country",country):null}
        </div>

    </div>
)
}
