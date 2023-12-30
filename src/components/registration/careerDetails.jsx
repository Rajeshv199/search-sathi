import React, {useState} from "react";
import {Switch, Route, Redirect,useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer"


function CareerDetails(){
    const history =  useHistory();

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5,setlabel5] = useState(false);
    const [label6,setlabel6] = useState(false);

    const [showPop,setShowPop] = useState(-1);
    const [error,setError] = useState(false);

    const [employee, setEmployee] = useState("");
    const [occupation, setoccupation] = useState("");
    const [organization, setOrganization] = useState("");
    const [AnalIncome, setAnalIncome] = useState("");
    const [yearsOfExperi, setYearsOfExperi] = useState("");

   
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
        let data = {employee,occupation,AnalIncome,yearsOfExperi};
        let keys = Object.keys(data);
        let count = keys.reduce((acc,curr)=>(data[curr]?acc+1:acc),0);
        if(keys.length==count)
            history.push("/user_registration4");
        // history.push("/user_registration3");
    }


    
    let emped = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    let yearsOfExpris=["0 - 1 year","1 - 3 years","3 - 5 years","5 - 7 years","7 - 10 years"];
    
   



    return(
        <div className="proDetailBg">
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
                            <div>Profile Details</div>
                            <div className="reg-active">Career Details</div>
                            <div>Lifestyle & Family</div>
                            <div>Partner Basic Details</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-wid">
                <div className="regi-info">Great! You are about to complete your Yogjodi profile.</div>
                <div className="pt-4 d-flex mt-2">
                    <div className="reg-wid80">
                        <div className="mandator">Mandatory<span className="star"> *</span></div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!employee?"Please provide a Employee":""}</div>
                            <div className={"regi-secle "+(!error||employee?"mt20":"")} >
                                <label className={"reg-label " +(label1?"reg-emp":"")} onClick={() =>{setlabel1(true);handlePop(1)}}>Employed In<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={employee} onClick={() =>{setlabel1(true);handlePop(1)}}/>
                                {label1 && showPop==1?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setEmployee(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul> 
                                    
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!occupation?"Please provide an occupation":""}</div>
                            <div className={"regi-secle "+(!error||occupation?"mt20":"")} >
                                <label className={"reg-label " +(label2?"reg-occup":"")} onClick={() =>{setlabel2(true);handlePop(2)}}>Occupation<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={occupation} onClick={() =>{setlabel2(true);handlePop(2)}}/>
                                {label2 && showPop==2?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setoccupation(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul> 
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className={"regi-secle mt20"} >
                                <label className={"reg-label " +(label3?"reg-expres":"")} onClick={() =>setlabel3(true)}>Monthly Income</label> 
                                <input type="number" placeholder="" onClick={() =>setlabel3(true)}/>
                                
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!organization?"Please provide an organization":""}</div>
                            <div className={"regi-secle "+(!error||organization?"mt20":"")} >
                                <label className={"reg-label " +(label4?"reg-emp":"")} onClick={() =>{setlabel4(true);handlePop(4)}}>Organization<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={organization} onClick={() =>{setlabel4(true);handlePop(4)}}/>
                                {label4 && showPop==4?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setOrganization(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul> 
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!AnalIncome?"Please provide an Income range":""}</div>
                            <div className={"regi-secle "+(!error||AnalIncome?"mt20":"")} >
                                <label className={"reg-label " +(label5?"reg-Aicome":"")} onClick={() =>{setlabel5(true);handlePop(5)}}>Annual Income<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={AnalIncome} onClick={() =>{setlabel5(true);handlePop(5)}}/>
                                {label5 && showPop==5?
                                <React.Fragment>
                                <div className={"gridDropdown"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {incomeArr.map((i1,index)=><li key={index} onClick={() =>{setAnalIncome(i1);setShowPop(-1)}}>{i1}</li>)}
                                    </ul>
                                    
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!yearsOfExperi?"Please provide an years Of Experience":""}</div>
                            <div className={"regi-secle "+(!error||yearsOfExperi?"mt20":"")} >
                                <label className={"reg-label " +(label6?"reg-FtherOcption":"")} onClick={() =>{setlabel6(true);handlePop(6)}}>Years Of Experience<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={yearsOfExperi} onClick={() =>{setlabel6(true);handlePop(6)}}/>
                                {label6&& showPop==6?
                                <React.Fragment>
                                <div className={"gridDropdown"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {yearsOfExpris.map((i1,index)=><li key={index} onClick={() =>{setYearsOfExperi(i1);setShowPop(-1)}}>{i1}</li>)}
                                    </ul>
                                    
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>

                        <div>
                            <button className="saveBtn" >Save</button>
                            <button className="contineBtn" onClick={handleSubmit}>Continue</button>
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

export default CareerDetails;


// prtmkumari55@gmail.com