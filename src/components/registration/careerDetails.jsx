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
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);

    const [showPop,setShowPop] = useState(-1);
    const [error,setError] = useState(false);
    const [selectLang, setselectLang] = useState(false);

    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [hightdegree, setHighdegree] = useState("");
    const [employee, setEmployee] = useState("");
    const [occupation, setoccupation] = useState("");
    const [AnalIncome, setAnalIncome] = useState("");
    const [yourselfDec, setyourselfDec] = useState("");

    function handleSelectLang(){
        selectLang?setselectLang(false):setselectLang(true);
    }

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
        setlabel7(true);
        let data = {country,state,city,hightdegree,employee,occupation,AnalIncome,yourselfDec};
        let keys = Object.keys(data);
        let count = keys.reduce((acc,curr)=>(data[curr]?acc+1:acc),0);
        if(keys.length==count)
            history.push("/user_registration4");
        // history.push("/user_registration3");
    }


    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina"," Kazakhstan","Algeria"];
   
    let highDegrees = ["BBA","BMS","BFA","BEM","B.Sc","BA","B.Tech","BCA","BPT","CA","CS"];
    let emped = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    
    console.log(yourselfDec.split(' ').length);



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
                            <div className="arletVlid">{error&&!country?"Please provide country":""}</div>
                            <div className={"regi-secle "+(!error||country?"mt20":"")} >
                                <label className={"reg-label " +(label1?"reg-country":"")} onClick={() =>{setlabel1(true);handlePop(1)}}>Country<span className="star">*</span></label>  
                                <input type="text" placeholder="" readOnly value={country} onClick={() =>{setlabel1(true);handlePop(1)}}/>
                                {label1 && showPop==1?
                                <React.Fragment>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setCountry(c1);setShowPop(-1)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!state?"Please mention the state":""}</div>
                            <div className={"regi-secle "+(!error||state?"mt20":"")} >
                                <label className={"reg-label " +(label2?"reg-State":"")} onClick={() =>{setlabel2(true);handlePop(2)}}>State<span className="star">*</span></label>
                                <input type="text" placeholder="" readOnly value={state} onClick={() =>{setlabel2(true);handlePop(2)}}/>
                                {label2 && showPop==2?
                                <React.Fragment>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setState(c1);setShowPop(-1)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!city?"Please mention the City you are living in":""}</div>
                            <div className={"regi-secle "+(!error||city?"mt20":"")} >
                                <label className={"reg-label " +(label7?"reg-city":"")} onClick={() =>{setlabel7(true);handlePop(3)}}>City living in<span className="star">*</span></label>
                                <input type="text" placeholder="" readOnly value={city} onClick={() =>{setlabel7(true);handlePop(3)}}/>
                                {label7 && showPop==3 ?
                                <React.Fragment>
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {countries.map((c1,index)=><li onClick={() =>{setCity(c1);setShowPop(-1)}} key={index}>{c1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!hightdegree?"Please provide a degree":""}</div>
                            <div className={"regi-secle "+(!error||hightdegree?"mt20":"")} >
                                <label className={"reg-label " +(label3?"reg-HDegree":"")} onClick={() =>{setlabel3(true);handlePop(4)}}>Highest Degree<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={hightdegree} onClick={() =>{setlabel3(true);handlePop(4)}}/>
                                {label3 && showPop==4?
                                <React.Fragment>
                                <div className={"highdegBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {highDegrees.map((h1,index)=><li onClick={() =>{setHighdegree(h1);setShowPop(-1)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!employee?"Please provide a Employee":""}</div>
                            <div className={"regi-secle "+(!error||employee?"mt20":"")} >
                                <label className={"reg-label " +(label4?"reg-emp":"")} onClick={() =>{setlabel4(true);handlePop(5)}}>Employed In<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={employee} onClick={() =>{setlabel4(true);handlePop(5)}}/>
                                {label4 && showPop==5?
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
                                <label className={"reg-label " +(label8?"reg-emp":"")} onClick={() =>{setlabel8(true);handlePop(6)}}>Occupation<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={occupation} onClick={() =>{setlabel8(true);handlePop(6)}}/>
                                {label8 && showPop==6?
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
                            <div className="arletVlid">{error&&!AnalIncome?"Please provide an Income range":""}</div>
                            <div className={"regi-secle "+(!error||AnalIncome?"mt20":"")} >
                                <label className={"reg-label " +(label5?"reg-Aicome":"")} onClick={() =>{setlabel5(true);handlePop(7)}}>Annual Income<span className="star">*</span></label> 
                                <input type="text" placeholder="" readOnly value={AnalIncome} onClick={() =>{setlabel5(true);handlePop(7)}}/>
                                {label5 && showPop==7?
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
                        
                    </div>
                </div>
                <div className="regi-info border-0top mt-4">Here is your chance to make your profile stand out!</div>
                <div className="d-flex">   
                    <div className="reg-wid80 mb-5">
                        <div className="selectLang mb-2">
                            <div className="selLgWid">
                                <input type="checkbox" checked readOnly className="form-check-input" id="exampleCheck1"/>
                                <label className={"setLang "+(selectLang?"":"setLang2")} onClick={handleSelectLang}></label>
                                {selectLang?<span>Write in English</span>:<span>हिंदी में लिखें</span>}
                            </div>
                            <div className="selLgWid2">
                                {selectLang?<div>सहायता लें</div>:<div>Need help writing?</div>}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!yourselfDec?"Please write about yourself (Don't mention your name, number or social handles)":error&&yourselfDec.split(' ').length<50?"Please write a minimum of 50 words":""}</div>
                            <div className={"regi-secle2 "+(!error||yourselfDec?"mt20":"")} onClick={() =>{setlabel6(true)}}>
                                <label className={"reg-label " +(label6?"reg-expres":"")} onClick={() =>{setlabel6(true)}}>{selectLang?"अपने बारे  मैं लिखे":"Express Yourself!"}<span className="star">*</span></label>
                                
                                {label6?
                                <React.Fragment>
                                    {selectLang?
                                        <textarea placeholder="आप नीचे दी गई चीजों के बारे में लिख सकते हैं:
                                        1. आपका व्यक्तित्व कैसा है?
                                        2. आप इन दिनों क्या काम कर रहे हैं?
                                        3. आप अपने खाली समय में क्या करना पसंद करते हैं?
                                        4. आपके परिवार में कौन-कौन हैं?
                                        5. आप किस प्रकार के साथी की तलाश में हैं?" onChange={(e)=>setyourselfDec(e.currentTarget.value)}></textarea>:
                                        <textarea placeholder="You may consider answering these questions:
                                        1. How would you describe yourself?
                                        2. What kind of food/movies/books/music you like?
                                        3. Do you enjoy activities like traveling, music, sports etc?
                                        4. Where have you lived most of your life till now?
                                        5. Where do you wish to settle down in future?" onChange={(e)=>setyourselfDec(e.currentTarget.value)}></textarea>}
                                        <span className="countWord">{yourselfDec?
                                            <span>Word Count: <span className={yourselfDec.split(' ').length<50?"colr3":"colr4"}>{yourselfDec.split(' ').length}</span></span>
                                            :"Minimum Words:50"}
                                        </span>
                                </React.Fragment>
                                
                                    
                                :null}
                            </div>
                            <div className="extraTxt2">
                            {selectLang?
                                <div>
                                <p>हमें और अपने जीवन साथी को अपने और अपने व्यक्तित्व के बारे में बताएं। अपने व्यवसाय/रुचियों के बारे में लिखें।</p>
                                <p>हिंदी में लिखने के लिए अपना कीबोर्ड बदलें। इस पाठ का परीक्षण हमारी टीम द्वारा किया जाएगा।</p>
                                </div>
                            :<div>
                            <p>Introduce yourself (Don't mention your name, number or social handles). Write about your values, beliefs/goals and aspirations. How do you describe yourself? Your interests and hobbies. </p><br/>
                                <p>This text will be screened by our team.</p>
                            </div>}
                                
                                
                            </div>
                        </div>
                        <button className="CmptRegiBtn" onClick={handleSubmit}>Complete Registration</button>
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