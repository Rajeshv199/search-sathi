import React,{ useState ,useRef, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Religion() {
    const[religionData,setReligionData] = useState({religion:[],caste:[],motherTongue:[]});
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();
    let item1ref = useRef(null);

    function handleChange(e){
        const {currentTarget: input} = e;
        let religionData1 = {...religionData}
        input.type === "checkbox"?
        religionData1[input.name] = updateCBs(religionData1[input.name],input.checked,input.value):
        religionData1[input.name] = input.value;
        setReligionData(religionData1);
    }
    function updateCBs(inpArr, checked, value){
        if(checked) inpArr.push(value);
        else{
            let index = inpArr.findIndex((ele)=> ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
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
    function handleDelete(arr,val){
        let religionData1 = {...religionData};
        let index = arr.findIndex(a1=>a1===val);
        if(index>=0) arr.splice(index,1);
        setReligionData(religionData1);
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

    let religionArr=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let motherToungArr = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"];
    
    const{religion,caste,motherTongue} = religionData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                <div className='edit-header'>
                    <Link className='text-dark' to="/my-partner"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Religion</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    {multiInputs2("Religion",religion,1)}
                    {multiInputs2("Caste",caste,2)}
                    {multiInputs2("Mother Tongue",motherTongue,3)}
                    
                    
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop===1?multiCheckBox("Religion",religionArr,"religion",religion):null}
            {ispop===2?multiCheckBox("Caste",motherToungArr,"caste",caste):null}
            {ispop===3?multiCheckBox("Mother Tongue",motherToungArr,"motherTongue",motherTongue):null}
        </div>

    </div>
)
}