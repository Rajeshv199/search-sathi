import React,{ useState } from 'react';
import { Link, Prompt } from 'react-router-dom';
import './style.css';

import ProfileHeader from './profileHeader';
import Leftaside from './left_aside';

export default function Details() {
    const[searchData,setSearchData] = useState({minHeight:`4' 0" (1.22 mts)`,maxHeight:`4' 5" (1.22 mts)`,minAge:"18 Years",maxAge:"22 Years",maritalStatus:[],religions:[],caste:[],minIncome:"18 Years",maxIncome:"20 Years",motherTongue:[],country:[],residentialStatus:[],education:[],occupation:[],byprofileId:""})
    const[searchByCriteria,setSearchByCriteria] = useState(true);
    const[ispop,setIsPop] = useState(-1);
    // function goBack() {
    //     window.history.back()
    // }
    function handleChange(e){
        const {currentTarget: input} = e;
        let searchData1 = {...searchData}
        input.type === "checkbox"?
        searchData1[input.name] = updateCBs(searchData1[input.name],input.checked,input.value):
        searchData1[input.name] = input.value;
        setSearchData(searchData1);
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
        if(ispop==1)setTimeout(()=>{setIsPop(2);},100);
        if(ispop==3)setTimeout(()=>{setIsPop(4);},100);
        if(ispop==8)setTimeout(()=>{setIsPop(9);},100);

    }
    function handleDelete(arr,val){
        let searchData1 = {...searchData};
        let index = arr.findIndex(a1=>a1==val);
        if(index>=0) arr.splice(index,1);
        setSearchData(searchData1);
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
    function handleMutiSelected(val,arr){
        let searchData1 = {...searchData}
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
        setSearchData(searchData1);
    }
    function multiCheckBox(title,arr,name,value){
        console.log(value);
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'>{title}</h5>
                        <ul className='select-item'>
                            {value.length<=3? value.map((v1,index)=><li key={index} onClick={()=>handleDelete(value,v1)}>{v1}<i class="fa-solid fa-xmark fa-sm"></i></li>):
                            <React.Fragment>
                            <li onClick={()=>handleDelete(value,value[0])}>{value[0]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <li onClick={()=>handleDelete(value,value[1])}>{value[1]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <li onClick={()=>handleDelete(value,value[2])}>{value[2]}<i class="fa-solid fa-xmark fa-sm"></i></li>
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
    function multiRadioBtnSecond(title,arr,name,value,minval,prevPop){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'><i class="fa-solid fa-chevron-left fa-xs" onClick={()=>setIsPop(prevPop)}></i>{title}</h5>
                        <ul className='select-item'><li>{minval} <i class="fa-solid fa-xmark fa-sm"></i></li></ul>
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

    let ageArr = [];for(let i=18;i<=70;i++) ageArr.push(i+" Years");
    let heightArr = [];
    for(let i=0;i<10;i++){heightArr.push(`4' ${i}" (1.22 mts)`);}
    let maritalStatusArr=["Doesn't Matter","Never Married","Awaiting Divorce","Divorced","Widowed","Married"];
    let religionArr=["Doesn't Matter","Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let motherToungArr = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"];
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina","Kazakhstan","Algeria"];
    let residentialStatusArr = ["Doesn't Matter","Citizen","Work Permit","Student Visa  ","Permanent Resident"];
    let heighDegreesArr = ["ACDA","B.IT","BCA","BBA","DCA","MCA","MBA","B.Tech","MCM","B.Com","CA","CS"];
    let occupationArr=["Engineer","Architect","Scientist","Teacher","Technician","Civil engineer","Electrical engineer","Psychologist"];
    let incomeArr=["Rs. 0","Rs. 1 Lakh","Rs. 2 Lakh","Rs. 3 Lakh","Rs. 4 Lakh","Rs. 5 Lakh","Rs. 7 Lakh","Rs. 9 Lakh","Rs. 12 Lakh","Rs. 15 Lakh","Rs. 18 Lakh","Rs. 20 Lakh","Rs. 22 Lakh","Rs. 14 Lakh","Rs. 26 Lakh"];

    const{minHeight,maxHeight,minAge,maxAge,maritalStatus,religions,minIncome,maxIncome,caste,motherTongue,country,residentialStatus,education,occupation,byprofileId} = searchData;

    let heightArr2= [...heightArr].splice(heightArr.indexOf(minHeight,1)+1);
    let ageArr2 =[...ageArr].splice(ageArr.indexOf(minAge,1)+1);
    let incomeArr2= [...incomeArr].splice(incomeArr.indexOf(minIncome,1)+1);
    return (
    <div className='profile-details'>
        <ProfileHeader/>

        
        <div className='profile-detail-body'>

           <Leftaside/>

            <div className='profile-box p-4'>
                <div className='searchBy'>
                    <span className={searchByCriteria?"bodercolo2":""} onClick={()=>setSearchByCriteria(true)}>Search by Criteria</span>
                    <span className={searchByCriteria?"":"bodercolo2"} onClick={()=>setSearchByCriteria(false)}>Serach by Profile ID</span>
                </div>
                <div >
                    {searchByCriteria&&
                    <div>
                        {multiInputs("Height",`${minHeight} - ${maxHeight}`,1)}
                        {multiInputs("Age",`${minAge} - ${maxAge}`,3)}
                        <div className='custom-form '>
                            <label>Marital Status</label>
                            <div className='habitsOpt'>
                                {maritalStatusArr.map((h1,index)=>(
                                    <button className={maritalStatus.find(m1=>m1==h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,maritalStatus)} key={index}>
                                        {h1} {maritalStatus.find(m1=>m1==h1)?<i class="fa-solid fa-check fa-sm text-danger"></i>:<i class="fa-solid fa-plus fa-sm"></i>}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='custom-form'>
                            <label>Religion</label>
                            <div className='habitsOpt'>
                                {religionArr.map((h1,index)=>(
                                    <button className={religions.find(m1=>m1==h1)?"bgcolor":""} onClick={()=>handleMutiSelected(h1,religions)} key={index}>
                                        {h1} {religions.find(m1=>m1==h1)?<i class="fa-solid fa-check fa-sm text-danger"></i>:<i class="fa-solid fa-plus fa-sm"></i>}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {multiInputs2("Caste",caste,5)}
                        {multiInputs2("Mother Tongue",motherTongue,6)}
                        {multiInputs2("Country",country,7)}
                    
                        {multiInputs("Anuual Income",`${minIncome} - ${maxIncome}`,8)}
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
                        {multiInputs2("Education",education,10)}
                        {multiInputs2("Occupation",occupation,11)}
                    </div>
                    }
                    {!searchByCriteria&&
                        <div className="serchCriteri">
                            <label>Enter Profile ID</label>
                            <input type='text' name='byprofileId' value={byprofileId} onChange={handleChange}/>
                        </div>
                    }
                    
                </div>
                <div className='serchBtn2'>
                    {!searchByCriteria&&!byprofileId?
                        <button className='opacity-50' disabled>Show Me Profiles </button>
                    :   <button>Show Me Profiles </button>
                    }
                </div>
               
            </div>
        </div>
        <div>
            {ispop==1?multiRadioBtn("Minimum Height",heightArr,"minHeight",minHeight):null}
            {ispop==2?multiRadioBtnSecond("Maximum Height",heightArr2,"maxHeight",maxHeight,minHeight,1):null}
            {ispop==3?multiRadioBtn("Minimum Age",ageArr,"minAge",minAge):null}
            {ispop==4?multiRadioBtnSecond("Maximum Age",ageArr2,"maxAge",maxAge,minAge,3):null}
            {ispop==5?multiCheckBox("Caste",motherToungArr,"caste",caste):null}
            {ispop==6?multiCheckBox("Mother Tongue",motherToungArr,"motherTongue",motherTongue):null}
            {ispop==7?multiCheckBox("Country",countries,"country",country):null}
            {ispop==8?multiRadioBtn("Minimum Income",incomeArr,"minIncome",minIncome):null}
            {ispop==9?multiRadioBtnSecond("Maximum Income",incomeArr2,"maxIncome",maxIncome,minIncome,8):null}
            {ispop==10?multiCheckBox("Education",heighDegreesArr,"education",education):null}
            {ispop==11?multiCheckBox("Occupation",occupationArr,"occupation",occupation):null}
            
        </div>

    </div>
)
}