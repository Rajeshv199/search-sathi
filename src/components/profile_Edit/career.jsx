import { useState ,useRef, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function Career() {

    const[careerData,setCareerData] = useState({employee:"Private Sector",occupation:"Operator",organization:"Sobha Developers Limited",yearsOfExp:"",aboutCareer:"You must consider a number of factors before deciding on your career. Each factor plays a significant role in your choice. Firstly,"})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();
    let item1ref = useRef(null);

    function handleChange(e){
        const {currentTarget: input} = e;
        let careerData1 = {...careerData}
        careerData1[input.name] = input.value;
        setCareerData(careerData1);
    }

    function handleSelected(val,name){
        let careerData1 = {...careerData}
        careerData1[name]= val;
        setCareerData(careerData1);
    }

    function multiInputs(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value} onClick={()=>setIsPop(no)}/>
            </div>
        )
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


    function multiRadioBtn(title,arr,name,value){
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom" ref={item1ref}>
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


    let EmployeeArr = ["Private Sector","Government/Public Sector","Civil Services","Defence","Not Working"];
    let occupationArr=["Technician","Operator","Engineer","Aviator","Plumber","Architect","Scientist","Mechanical engineer","Civil engineer","Plasterer"]
    let organizationArr = ["United Nations","International Monetary Fund","World Health Organization","World Bank","Commonwealth of Nations"]
    let yearsOfExpris=["0 - 1 year","1 - 3 years","3 - 5 years","5 - 7 years","7 - 10 years"];
    const{employee,occupation,organization,yearsOfExp,aboutCareer} = careerData;

    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>Career Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    
                    <div className='custom-form w-100'>
                        <label>Employed In</label>
                        <div className='habitsOpt'>
                            {EmployeeArr.map((h1,index)=>(
                                <button className={employee===h1?"bgcolor":""} onClick={()=>handleSelected(h1,"employee")} key={index}>{h1}</button>
                            ))}
                        </div>
                    </div>
                    {multiInputs("Occupation",occupation,1)}
                    {multiInputs("Organization",organization,2)}
                    {multiInputs("Years Of Experience",yearsOfExp,3)}
                    <div className='custom-textarea mt-4'>
                        <label>About My Career</label>
                        <textarea  name="aboutCareer" value={aboutCareer} className='w-100' rows="6" onChange={handleChange}></textarea>
                    </div>
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop===1?multiRadioBtn("Occupation",occupationArr,"occupation",occupation):null}
            {ispop===2?multiRadioBtn("Organization",organizationArr,"organization",organization):null}
            {ispop===3?multiRadioBtn("Years Of Experience",yearsOfExpris,"yearsOfExp",yearsOfExp):null}
        </div>

    </div>
)
}