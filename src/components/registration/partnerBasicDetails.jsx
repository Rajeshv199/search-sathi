import React, {useState} from "react";
import {Switch, Route, Redirect,useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer";
import Select from 'react-select';
import YogJodiLogo from "../../image/YogJodiLogo.png"; 


function PartnerBasicDetails(){
    const history =  useHistory();
    // window.scrollTo(0,0);

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);
    const [label9, setlabel9] = useState(false);
    const [label10, setlabel10] = useState(false);
    const [label11, setlabel11] = useState(false);

    const [showPop,setShowPop] = useState(-1);

    const [minAge, setMinAge] = useState(18);
    const [maxAge, setMaxAge] = useState(30);
    const [minHeight, setMinHeight] = useState(`4' 0" (1.22 mts)`);
    const [maxHeight, setMaxHeight] = useState(`7' (2.13 mts) plus'`);
    const [takeData,setTakeData] = useState({maritalStatus:[],motherToung:[],country:[],state:[],skill:[],board:[],occupation:[]})
    const [maritalStatus2, setMaritalStatus] = useState([]);
    const [motherToung2, setMotherToung] = useState([]);
    const [country2, setCountry] = useState([]);
    const [state2, setState] = useState([]);
    const [color, setColor] = useState("");
    const [skill2, setSkill] = useState([]);
    const [board2, setBoard] = useState([]);
    const [minQalification, setMinQalification] = useState("");
    const [maxQualification, setMaxQualification] = useState("");
    const [occupation2, setOccupation] = useState([]);
    const [income, setIncome] = useState("");
    const [descAboutPartner, setDescAboutPartner] = useState("");

    function handlePop(val){
        setShowPop(val);
    }
   
    function handleSave(){
        history.push("/partner");
        
    }
    function handleShowMore(){
        // history.push({pathname:"/profiles",state:"3"});
    }
    function handleChange(e){
        const {currentTarget: input} = e;
        let takeData1 = {...takeData};
        input.type === "checkbox"?
        (takeData1[input.name] = updateCBs(takeData1[input.name],input.checked,input.value)):
        (takeData1[input.name] = input.value);
        setTakeData(takeData1);

    }
    function updateCBs(inpArr, checked, value){
        if(checked) inpArr.push(value);
        else{
            let index = inpArr.findIndex((ele)=> ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }
    function handleDelete(arr,value){
        let takeData1 = {...takeData}
        let index = arr.findIndex((ele)=> ele === value);
        if (index >= 0) arr.splice(index, 1);
        setTakeData(takeData1);
    }
    function multiCheckbox(manArr,name,arr){
        return(
        <div className={"multiCheckbox "+(arr[0]?"":"top35") }>
            {manArr.map((a1,index)=>(
                <label key={index}>
                    <input type="checkbox" name={name} value={a1} checked={motherToung.find((tk)=>tk===a1)} onChange={handleChange} />
                    {a1}
                </label>
            ))}
        </div>
        )
    }

    
    
    let ageArr = [];
    for(let i=18;i<=70;i++) ageArr.push(i);
    let heights = [];
    for(let i=0;i<10;i++)heights.push(`4' ${i}" (1.22 mts)`);
    // let maritalStatusArr=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    let maritalStatusArr=[{value:"Never Married",label:"Never Married"},{value:"Awaiting Divorce",label:"Awaiting Divorce"},{value:"Divorced",label:"Divorced"},{value:"Widowed",label:"Widowed"}];
    let countries = [{value:"Russia",label:"Russia"},{value:"Canada",label:"Canada"},{value:"China",label:"China"},{value:"US of America",label:"US of America"},{value:"Brazil",label:"Brazil"},{value:"Australia",label:"Australia"},{value:"India",label:"India"},{value:"Argentina",label:"Argentina"},{value:"Kazakhstan",label:"Kazakhstan"},{value:"Algeria",label:"Algeria"}];
    
    let motherToungs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"]
    let skills=[{value:"Problem solving",label:"Problem solving"},{value:"Communication",label:"Communication"},{value:"Interpersonal",label:"Interpersonal"},{value:"Time management",label:"Time management"}];
    let occupations=[{value:"Engineer",label:"Engineer"},{value:"Architect",label:"Architect"},{value:"Scientist",label:"Scientist"},{value:"Teacher",label:"Teacher"},{value:"Technician",label:"Technician"},{value:"Civil engineer",label:"Civil engineer"},{value:"Electrical engineer",label:"Electrical engineer"},{value:"Psychologist",label:"Psychologist"}];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    let borads=[{value:"CBSE",label:"CBSE"},{value:"Jharkhand Board",label:"Jharkhand Board"},{value:"CISCE",label:"CISCE"},{value:"State Boards",label:"State Boards"},{value:"ICSE",label:"ICSE"}]

    const {maritalStatus,motherToung,country,state,skill,board,occupation} = takeData;

    return(
        <div className="proDetailBg" onClick={()=>showPop>=1?setShowPop(-1):null}>
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            <Link to="/" className=""><img  src={YogJodiLogo} /></Link>
                        </div>
                        <div className="liveChat-Help">
                            <span>LIVE CHAT</span>
                            <span>1-800-419-6299 (Toll Free)</span>
                        </div>
                    </div>
                    <div className="proSection">
                        <div className="proSText">
                            <div>Profile Details</div>
                            <div>Career Details</div>
                            <div>Lifestyle & Family</div>
                            <div className="reg-active">Partner Basic Details</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-wid">
                <div className="regi-info">We would love to know about your Partner Basic Details.</div>
                <div className="pt-4 d-flex mt-2">
                    <div className="reg-wid80">
                        <div className="backarro"><Link to="/lifestyle&family">Back</Link></div>
                        <div className="regi-detail">
                            <div className="regi-secle" onClick={() =>{setlabel1(true)}}>
                                <label className={"reg-label " +(label1?"reg-Age":"")}>Age</label>
                                {label1?
                                <ul className="multiSelected d-flex">
                                    <li onClick={() =>handlePop(1)}>
                                        <div >
                                            <span>{minAge?minAge +" years":"min age"}</span>
                                            <i className={showPop==1?"iconArrow iconPostion":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>handlePop(2)}>
                                        <div >
                                            <span>{maxAge?maxAge+" years":"max age"}</span> 
                                            <i className={showPop==2?"iconArrow iconPostion":""}></i>
                                        </div>
                                    </li>
                                    
                                </ul>:null}
                                <div className={showPop==1?"dropBox width380 postionBox":"daysBox2"}>
                                    <ul>
                                        {ageArr.map((d1,index)=><li className={"width38 "+(minAge==d1?"box1":"")} onClick={() =>{setShowPop(-1);setMinAge(d1);d1>maxAge?setMaxAge(d1):setMaxAge(maxAge)}} key={index}>{d1}</li>)}
                                    </ul>
                                </div>
                                <div className={showPop==2?"dropBox width380 postionBox2":"monthsBox2"}>
                                    <ul>
                                        {ageArr.map((m1,index)=><li className={"width38 "+(minAge<m1?"":"color11 ")+(maxAge==m1?"optActive ":"")} onClick={minAge<m1?() =>{setShowPop(-1);setMaxAge(m1)}:null} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label top8 " +(label2?"reg-State":"")}>Height</label>
                                {label2?
                                <ul className="multiSelected d-flex">
                                    <li onClick={() =>handlePop(3)}>
                                        <div >
                                            <span>{minHeight?minHeight:"min height"}</span>
                                            <i className={showPop==3?"iconArrow iconPostion":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>handlePop(4)}>
                                        <div >
                                            <span>{maxHeight?maxHeight:"max height"}</span> 
                                            <i className={showPop==4?"iconArrow iconPostion":""}></i>
                                        </div>
                                    </li>
                                    
                                </ul>:null}
                                <div className={showPop==3?"dropBox width380 postionBox":"daysBox2"}>
                                    <ul>
                                        {heights.map((d1,index)=><li className={"width156 border-0  "+(minHeight==d1?"box1":"")} onClick={() =>{setShowPop(-1);setMinHeight(d1);d1>maxHeight?setMaxHeight(d1):setMaxHeight(maxHeight)}} key={index}>{d1}</li>)}
                                    </ul>
                                </div>
                                <div className={showPop==4?"dropBox width380 postionBox2":"monthsBox2"}>
                                    <ul>
                                        {heights.map((m1,index)=><li className={"width156 border-0 "+(minHeight<m1?"":"color11 ")+(maxHeight==m1?"optActive ":"")} onClick={minHeight<m1?() =>{setShowPop(-1);setMaxHeight(m1)}:null} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle4 mt20" onClick={() =>setlabel3(true)}>
                                <label className={"reg-label top8 " +(label3?"reg-city":"")} >Marital status</label>
                                {label3?
                                    <Select isMulti={true} value={maritalStatus} onChange={setMaritalStatus} options={maritalStatusArr}/>
                                :null}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle4 mt20 " onClick={() =>setlabel4(true)}>
                                <label className={"reg-label top8 " +(label4?"reg-label7":"")} >Country</label>  
                                {label4?
                                    <Select isMulti={true} value={country} onChange={setCountry} options={countries}/>
                                :null}
                            </div>
                        </div>
                        {country&&
                        <div className="regi-detail">
                            <div className="regi-secle4 mt20" onClick={() =>setlabel5(true)}>
                                <label className={"reg-label top8 " +(label5?"reg-State2":"")} >State</label>
                                {label5?
                                    <Select isMulti={true} value={state} onChange={setState} options={countries}/>
                                :null}
                            </div>
                        </div>
                        }
                        <div className="regi-detail">
                            <div className={"regi-secle4 mt20"} onClick={() =>{setlabel6(true);setShowPop(8)}}>
                                <label className={"reg-label top8 " +(label6?"reg-label6":"")} onClick={() =>setShowPop(8)}>Mother tongue</label>
                                <div className="">{motherToung.map((m1,index)=>(
                                    <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={()=>handleDelete(motherToung,m1)}></i></div>
                                ))}
                                </div>
                                {label6 && showPop==8?  multiCheckbox(motherToungs,"motherToung",motherToung):null}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle4 mt20" onClick={() =>setlabel8(true)}>
                                <label className={"reg-label " +(label8?"reg-Age":"")}>Skill</label>
                                {label8?
                                    <Select isMulti={true} value={skill} onChange={setSkill} options={skills}/>
                                :null}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle4 mt20" onClick={() =>setlabel7(true)}>
                                <label className={"reg-label " +(label7?"reg-borad":"")} >Borad</label>  
                                {label7?
                                    <Select isMulti={true} value={board} onChange={setBoard} options={borads}/>
                                :null}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label top8 " +(label2?"reg-famly":"")}>Qualification</label>
                                {label2?
                                <ul className="multiSelected d-flex">
                                    <li onClick={() =>handlePop(2)}>
                                        <div >
                                            <span>{minQalification?minQalification:"min qalification"}</span>
                                            <i className={showPop==2?"iconArrow iconPostion":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>handlePop(3)}>
                                        <div >
                                            <span>{maxQualification?maxQualification:"max qualification"}</span> 
                                            <i className={showPop==3?"iconArrow iconPostion":""}></i>
                                        </div>
                                    </li>
                                    
                                </ul>:null}
                                <div className={showPop==2?"dropBox width380 postionBox":"daysBox2"}>
                                    <ul>
                                        {heights.map((d1,index)=><li className={"width156 border-0  "+(minQalification==d1?"box1":"")} onClick={() =>{setShowPop(-1);setMinQalification(d1)}} key={index}>{d1}</li>)}
                                    </ul>
                                </div>
                                <div className={showPop==3?"dropBox width380 postionBox2":"monthsBox2"}>
                                    <ul>
                                        {heights.map((m1,index)=><li className={"width156 border-0 "+(maxQualification==m1?"optActive ":"")} onClick={() =>{setShowPop(-1);setMaxQualification(m1)}} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle4 mt20" onClick={() =>setlabel10 (true)}>
                                <label className={"reg-label top8 " +(label10?"reg-Occupat":"")} >Occupation</label> 
                                
                                {label10?
                                    <Select isMulti={true} value={occupation} onChange={setOccupation} options={occupations}/>
                                :null}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className={"regi-secle mt20"} >
                                <label className={"reg-label top8 " +(label4?"reg-income":"")} onClick={() =>{setlabel4(true);handlePop(5)}}>Income</label> 
                                <input type="text" placeholder="" readOnly value={income} onClick={() =>{setlabel4(true);handlePop(5)}}/>
                                {label4 && showPop==5?
                                <React.Fragment>
                                <div className={"gridDropdown"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {incomeArr.map((i1,index)=><li key={index} onClick={() =>{setIncome(i1);setShowPop(-1)}}>{i1}</li>)}
                                    </ul>
                                    
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className={"regi-secle2 mt20"} onClick={() =>{setlabel9(true)}}>
                                <label className={"reg-label " +(label9?"reg-password":"")} onClick={() =>{setlabel7(true)}}>Describe About Partner</label>
                                {label9?
                                        <textarea placeholder="You may consider answering these questions:
                                        1. How would you describe About Partner?
                                        2. What kind of food/movies/books/music you like?
                                        3. Do you enjoy activities like traveling, music, sports etc?
                                        4. Where have you lived most of your life till now?
                                        5. Where do you wish to settle down in future?" value={descAboutPartner} onChange={(e)=>setDescAboutPartner(e.currentTarget.value)}></textarea>
                                        
                                :null}
                            </div>
                        </div>
                       
                        <div>
                            <button className="saveBtn bg-danger" onClick={handleSave}>Continue</button>
                            {/* <button className="showMoreBtn" onClick={handleShowMore}>Continue</button> */}
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            <div>
                <Footer/>
            </div>
        </div>
                 
    );

}

export default PartnerBasicDetails;


// prtmkumari55@gmail.com