import React, {useState} from "react";
import {Switch, Route, Redirect,useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer";
 
    
function ProfileDetails(){
    const history =  useHistory();

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
   
    const [showPop,setShowPop] = useState(-1);
    const [error,setError] = useState(false);

    const [groomName, setGroomName] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYrs] = useState("");
    const [mothertongue, setMothertong] = useState("");
    const [religion, setRligion] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [height, setHeight] = useState("");
  
    function handlePop(val){
        setShowPop(val);
    }

    function handleSubmit(){
        setError(true);
        setlabel1(true);
        setlabel2(true);
        setlabel3(true);
        setlabel4(true);
        setlabel5(true);
        setlabel6(true);
        let data = {groomName,day,month,year,mothertongue,religion,maritalStatus,height};
        let keys = Object.keys(data);
        let count = keys.reduce((acc,curr)=>(data[curr]?acc+1:acc),0);
        if(keys.length==count)
            history.push("/user_registration3");
        
    }

    let days = [];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let years = [];
    let date = new Date();
    let pastYear = date.getFullYear() - 20;
    for(let i=1;i<=31;i++) days.push(i);
    for(let j=pastYear-50;j<pastYear;j++) years.push(j);
    let langs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"]
    let religions=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let mstatus=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    let heights = [];

    for(let i=0;i<10;i++){
        heights.push(`4' 0" (1.22 mts)`);
    }
    
    // const {groomName,dob,mothertongue,rligion,maritalStatus,height} = takeData;


    return(
        <div className="proDetailBg" >
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            <Link to="/" className="ml-2"><img src="https://www.jeevansathi.com/images/jspc/commonimg/logo1.png" /></Link>
                        </div>
                        <div className="liveChat-Help">
                            <span>LIVE CHAT</span>
                            <span>1-800-419-6299 (Toll Free)</span>
                        </div>
                    </div> 

                    <div className="proSection">
                        <div className="proSText">
                            <div className="reg-active">Profile Details</div>
                            <div>Career Details</div>
                            <div>Lifestyle & Family</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-wid" >
                <div className="regi-info">Hi! You are joining the Best Matchmaking Experience.</div>
                <div className="pt-4 d-flex mt-2" >
                    <div className="reg-wid80">
                        <div className="mandator">Mandatory<span className="star"> *</span></div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!groomName?"Please provide a valid Full Name":""}</div>
                            <div className={"regi-secle "+(!error||groomName?"mt20":"")} onClick={() =>{setlabel1(true)}}>
                                <label className={"reg-label " +(label1?"reg-label2":"")}>Groom's Name <span className="star">*</span></label>
                                <input type="text" name="groomName" onChange={(e)=>setGroomName(e.currentTarget.value)}/>
                                <div className="ext-opt">
                                    <span>Don't show my name</span>
                                    <i className="fa-solid fa-gear"></i>
                                    <ul>
                                        <li>Show my name to all</li>
                                        <li className="selectedOpt">Don't show my name <br/> ( You will not be able to see names of other members )</li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="extraTxt"> If you wish to hide your name from others, click on settings icon and choose the setting </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&(!day||!month||!year)?"Please provide date of birth":""}</div>
                            <div className={"regi-secle "+(!error||day&&month&&year?"mt20":"")} onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label " +(label2?"reg-label3":"")}>Date of Birth<span className="star">*</span></label>
                                {label2?
                                <ul className="DOBSelected">
                                    <li onClick={() =>handlePop(1)}>
                                        <div >
                                            <span>{day?day:"Data"}</span>
                                            <i className="dropArrow"></i>
                                            <i className={showPop==1?"imgArrow":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>handlePop(2)}>
                                        <div >
                                            <span>{month?month:"Month"}</span> 
                                            <i className="dropArrow"></i>
                                            <i className={showPop==2?"imgArrow":""}></i>
                                        </div>
                                    </li>
                                    <li onClick={() =>handlePop(3)}>
                                        <div >
                                            <span>{year?year:"Year"}</span> 
                                            <i className="dropArrow"></i>
                                            <i className={showPop==3?"imgArrow":""}></i>
                                        </div>
                                    </li>
                                </ul>:null}
                                <div className={showPop==1?"daysBox":"daysBox2"}>
                                    <ul>
                                        {days.map((d1,index)=><li className={day==d1?"box1":""} onClick={() =>{setShowPop(2);setDay(d1)}} key={index}>{d1}</li>)}
                                    </ul>
                                </div>
                                <div className={showPop==2?"monthsBox":"monthsBox2"}>
                                    <ul>
                                        {months.map((m1,index)=><li className={month==m1?"box1":""} onClick={() =>{setShowPop(3);setMonth(m1)}} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                                <div className={showPop==3?"yersBox":"yersBox2"}>
                                    <ul>
                                        {years.map((y1,index)=><li className={year==y1?"box1":""} onClick={() =>{setShowPop(-1);setYrs(y1)}} key={index}>{y1}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!mothertongue?"Please provide mother tongue":""}</div>
                            <div className={"regi-secle "+(!error||mothertongue?"mt20":"")}>
                                <label className={"reg-label " +(label3?"reg-label4":"")} onClick={() =>{setlabel3(true);handlePop(4)}}>Mother tongue<span className="star">*</span></label>
                                <input type="text" placeholder="" value={mothertongue} onClick={() =>{setlabel3(true);handlePop(4)}}/>
                                {label3 && showPop==4?
                                <React.Fragment>
                                <div className="gridDropdown">
                                    <ul>
                                        {langs.map((l1,index)=><li onClick={() =>{setMothertong(l1);setShowPop(-1);}} key={index}>{l1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!religion?"Please provide religion":""}</div>
                            <div className={"regi-secle "+(!error||religion?"mt20":"")} >
                                <label className={"reg-label " +(label4?"reg-label5":"")} onClick={() =>{setlabel4(true);handlePop(5)}}>Religion<span className="star">*</span></label>
                                <input type="text" placeholder="" value={religion} onClick={() =>{setlabel4(true);handlePop(5)}}/>
                                {label4 && showPop==5?
                                <React.Fragment>
                                <div className={"religionBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {religions.map((r1,index)=><li onClick={() =>{setRligion(r1);setShowPop(-1)}} key={index}>{r1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!maritalStatus?"Please provide marital status":""}</div>
                            <div className={"regi-secle "+(!error||maritalStatus?"mt20":"")}>
                                <label className={"reg-label " +(label5?"reg-label6":"")} onClick={() =>{setlabel5(true);handlePop(6)}}>Marital status<span className="star">*</span></label>
                                <input type="text" placeholder="" value={maritalStatus} onClick={() =>{setlabel5(true);handlePop(6)}}/>
                                {label5 && showPop==6?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {mstatus.map((m1,index)=><li onClick={() =>{setMaritalStatus(m1);setShowPop(-1)}} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!height?"Please provide height":""}</div>
                            <div className={"regi-secle "+(!error||height?"mt20":"")}>
                                <label className={"reg-label " +(label6?"reg-label7":"")}  onClick={() =>{setlabel6(true);handlePop(7)}}>Height<span className="star">*</span></label>
                                <input type="text" placeholder="" value={height} onClick={() =>{setlabel6(true);handlePop(7)}}/>
                                {label6 && showPop==7?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {heights.map((h1,index)=><li onClick={() =>{setHeight(h1);setShowPop(-1)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                            <button className="proBtns" onClick={handleSubmit}>Continue</button>
                    </div>
                    <div className="reg-wid15">
                        <div className="wyregi">why register</div>
                        <div>
                            <i className="reg-privacy privyIcon"></i>
                            <div className="pt-1">Lakhs of Genuine Profiles</div>
                        </div>
                        <div>
                            <i className="reg-privacy privyIcon2"></i>
                            <div className="pt-1">Many Verified by Personal Visit</div>
                        </div>
                        <div>
                            <i className="reg-privacy privyIcon3"></i>
                            <div className="pt-1">Secure &<br/> Family Friendly</div>
                        </div>
                        <div>
                            <i className="reg-privacy privyIcon4"></i>
                            <div className="pt-1">Strict <br/> Privacy Control</div>
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

export default ProfileDetails;
