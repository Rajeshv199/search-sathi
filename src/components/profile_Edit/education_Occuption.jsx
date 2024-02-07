import React,{ useState ,useRef, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Education() {
    const[educt_occuption,setEduct_occuption] = useState({heightDegree:[],occupation:[],minIncome:"Rs. 1 Lakh",maxIncome:"Rs. 3 Lakh"});
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();
    let item1ref = useRef(null);

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
    function closePopup(){
        setIsPop(-1);
        setTimeout(()=>{setIsPop(4);},100);
    }
    function handleDelete(arr,val){
        let educt_occuption1 = {...educt_occuption};
        let index = arr.findIndex(a1=>a1===val);
        if(index>=0) arr.splice(index,1);
        setEduct_occuption(educt_occuption1);
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
    function multiRadioBtn(title,arr,name,value){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'>{title}</h5>
                        <div className='popContaner'>
                            {arr.map((a1,index)=>(
                                <label key={index} onClick={()=>{setTimeout(closePopup, 100)}}>
                                    <input type='radio' name={name} value={a1} checked={a1===value} onChange={handleChange} />
                                    <div className='px-2'>{a1}</div>
                                </label>
                            ))}
                        </div>
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i className="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </div>
            </div>
        )
    }
    function multiRadioBtnSecond(title,arr,name,value){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'><i className="fa-solid fa-chevron-left fa-xs" onClick={()=>setIsPop(3)}></i>{title}</h5>
                        <ul className='select-item'><li>{minIncome}<i className="fa-solid fa-xmark fa-sm"></i></li></ul>
                        <div className='popContaner'>
                            {arr.map((a1,index)=>(
                                <label key={index} onClick={()=>setTimeout(()=>setIsPop(-1),100)}>
                                    <input type='radio' name={name} value={a1} checked={a1===value} onChange={handleChange} />
                                    <div className='px-2'>{a1}</div>
                                </label>
                            ))}
                        </div>
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i className="fa-solid fa-xmark fa-lg"></i></button>
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
    let incomeArr=["Rs. 0","Rs. 1 Lakh","Rs. 2 Lakh","Rs. 3 Lakh","Rs. 4 Lakh","Rs. 5 Lakh","Rs. 7 Lakh","Rs. 9 Lakh","Rs. 12 Lakh","Rs. 15 Lakh","Rs. 18 Lakh","Rs. 20 Lakh","Rs. 22 Lakh","Rs. 14 Lakh","Rs. 26 Lakh"];
    
    const{heightDegree,occupation,minIncome,maxIncome} =educt_occuption; 
   
    let incomeArr2= [...incomeArr].splice(incomeArr.indexOf(minIncome,1)+1);

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/edit/partner"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Education & Occupation</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    {multiInputs2("Height Degree",heightDegree,1)}
                    {multiInputs2("Occupation",occupation,2)}

                    {multiInputs("Anuual Income",`${minIncome} - ${maxIncome}`,3)}
                    
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop===1?multiCheckBox("Height Degree",heighDegreesArr,"heightDegree",heightDegree):null}
            {ispop===2?multiCheckBox("Occupation",occupationArr,"occupation",occupation):null}
            {ispop===3?multiRadioBtn("Minimum Income",incomeArr,"minIncome",minIncome):null}
            {ispop===4?multiRadioBtnSecond("Maximum Income",incomeArr2,"maxIncome",maxIncome):null}
        </div>

    </div>
)
}