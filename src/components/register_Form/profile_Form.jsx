import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect,useHistory,useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
 
    
function ProfileDetails(props){
    const history =  useHistory();

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);
   
    const [showPop,setShowPop] = useState(-1);
    

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYrs] = useState("");
    const [mothertongue, setMothertong] = useState("");
    const [religion, setRligion] = useState("");
    const [caste, setCaste] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [height, setHeight] = useState("");
    const [descriYrSelf, setDescriYrSelf] = useState("");

  
    useEffect(()=>{
        console.log(props.showPop);
        if(props.showPop&&showPop>=1)setShowPop(-1);
    },showPop);

    function handlePop(val){
        setShowPop(val);
    }

    function handleSave(){
        props.onSubmit("career");
    }
    function handleShowMore(){
        props.onShowMore(props.career?"careerHide":"career");
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
    // console.log(props);

    return(
            
                    <React.Fragment >
                        <div className="mandator">Mandatory<span className="star"> *</span></div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label top8 " +(label2?"reg-label3":"")}>Date of Birth</label>
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
                            <div className="regi-secle mt20">
                                <label className={"reg-label top8 " +(label3?"reg-label4":"")} onClick={() =>{setlabel3(true);handlePop(4)}}>Mother tongue</label>
                                <input type="text" placeholder="" value={mothertongue} onClick={() =>{setlabel3(true);handlePop(4)}}/>
                                {label3 && showPop==4?
                                <div className="gridDropdown">
                                    <ul>
                                        {langs.map((l1,index)=><li onClick={() =>{setMothertong(l1);setShowPop(-1);}} key={index}>{l1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" >
                                <label className={"reg-label top8 " +(label4?"reg-label5":"")} onClick={() =>{setlabel4(true);handlePop(5)}}>Religion</label>
                                <input type="text" placeholder="" value={religion} onClick={() =>{setlabel4(true);handlePop(5)}}/>
                                {label4 && showPop==5?
                                <div className="religionBox">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {religions.map((r1,index)=><li onClick={() =>{setRligion(r1);setShowPop(-1)}} key={index}>{r1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" >
                                <i className={showPop==8?"imgArrow casteIcon":null}></i>
                                <label className={"reg-label top8 " +(label1?"reg-sister":"")} onClick={() =>{setlabel1(true);handlePop(8)}}>Caste</label>
                                <input type="text" placeholder={label1?"Select or type":""} readOnly value={caste} onClick={() =>{setlabel1(true);handlePop(8)}}/>
                                {label1&& showPop==8?
                                <div className="casteBox">
                                    {/* <i className={"imgArrow casteIcon"}></i> */}
                                    <ul>
                                        {religions.map((r1,index)=><li onClick={() =>{setCaste(r1);setShowPop(-1)}} key={index}>{r1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20">
                                <label className={"reg-label top8 " +(label5?"reg-label6":"")} onClick={() =>{setlabel5(true);handlePop(6)}}>Marital status</label>
                                <input type="text" placeholder="" value={maritalStatus} onClick={() =>{setlabel5(true);handlePop(6)}}/>
                                {label5 && showPop==6?
                                <div className="mStatusBox">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {mstatus.map((m1,index)=><li onClick={() =>{setMaritalStatus(m1);setShowPop(-1)}} key={index}>{m1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20">
                                <label className={"reg-label top8 " +(label6?"reg-label7":"")}  onClick={() =>{setlabel6(true);handlePop(7)}}>Height</label>
                                <input type="text" placeholder="" value={height} onClick={() =>{setlabel6(true);handlePop(7)}}/>
                                {label6 && showPop==7?
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {heights.map((h1,index)=><li onClick={() =>{setHeight(h1);setShowPop(-1)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle2 mt20" onClick={() =>{setlabel8(true)}}>
                                <label className={"reg-label top8 " +(label8?"reg-mtherOcption":"")} onClick={() =>{setlabel8(true)}}>Express Yourself!</label>
                                {label8? 
                                <React.Fragment>
                                        <textarea placeholder="You may consider answering these questions:
                                        1. How would you describe yourself?
                                        2. What kind of food/movies/books/music you like?
                                        3. Do you enjoy activities like traveling, music, sports etc?
                                        4. Where have you lived most of your life till now?
                                        5. Where do you wish to settle down in future?" onChange={(e)=>setDescriYrSelf(e.currentTarget.value)}></textarea>
                                    <span className="countWord">{descriYrSelf?
                                        <span>Word Count: <span className={descriYrSelf.split(' ').length<50?"colr3":"colr4"}>{descriYrSelf.split(' ').length}</span></span>
                                        :"Minimum Words:50"}
                                    </span>
                                </React.Fragment>
                                :null}
                            </div>
                        </div>
                        <div>
                            <button className="saveBtn" onClick={handleSave}>Save</button>
                            <button className="showMoreBtn" onClick={handleShowMore}>{props.career?"Show Less":"Show More"}</button>
                        </div>
                    </React.Fragment>
                           
                
                 
    );

}

export default ProfileDetails;
