import React, {useState,useEffect} from "react";
import {Switch, Route, Redirect,useHistory,useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer";
 
    
function ProfileDetails(){
    const history =  useHistory();

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);

    const {state} = useLocation();

    const [error,setError] = useState(false);
    const [pvacyMode,setPvacyMode] = useState(3);

    const [takeData,setTakeData] = useState({title:"",gmail:"",ISD:"+91",mobileNo:"",password:"",gender:""})

    function handleChange(e){
        const {currentTarget: input} = e;
        let takeData1 = {...takeData};
        (takeData1[input.name] = input.value) ;
        setTakeData(takeData1);
        // handleValidate(e);

    }

    function handleProfile(val){
        let takeData1 = {...takeData};
        takeData1.title=val;
        setTakeData(takeData1);
    }
    function handleGender(val){
        let takeData1 = {...takeData};
        takeData1.gender=val;
        setTakeData(takeData1);
    }

    useEffect(()=>{ checkForData(); },0);

    function checkForData(){
        if(state){
            setError(true);setlabel1(true);setlabel2(true);
            setlabel3(true);setlabel4(true);setlabel5(true);
            let data = {...takeData};
            data=state.takeData;
            setTakeData(data);
        }
        
    }

    function handleSubmit(){
        setError(true);setlabel1(true);setlabel2(true);
        setlabel3(true);setlabel4(true);setlabel5(true);
        let data = {title,gmail,ISD,mobileNo,password};
        let keys = Object.keys(data);
        let count = keys.reduce((acc,curr)=>(data[curr]?acc+1:acc),0);
        console.log(keys.length,count);
        console.log(data);
        if(keys.length==count)
            history.push("/user_registration2");
        
    }
    console.log(takeData);

    let profileFor=["Self","Son","Daughter","Sister","Relative/Friend","Other"];

    const {title,ISD,gmail,mobileNo,password,gender} = takeData;
    

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

                    <div className="proSection ">
                        <div className="proSText">
                            <div></div>
                            <div className="reg-active ">Account Details</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="register-wid" >
                <div className="regi-info">Welcome! Let's start your partner search with this Sign up.</div>
                <div className="pt-4 d-flex mt-2" >
                    <div className="reg-wid80">
                        <div className="mandator">Mandatory<span className="star"> *</span></div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!gmail?"Please provide a valid Gmail":""}</div>
                            <div className={"regi-secle "+(!error||gmail?"mt20":"")} onClick={() =>{setlabel1(true)}}>
                                <label className={"reg-label " +(label1?"reg-email":"")}>Your Email <span className="star">*</span></label>
                                <input type="text" name="gmail" value={gmail} onChange={handleChange}/>
                            </div>
                        </div>
                       
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!mobileNo?"Please provide a valid Mobile No":""}</div>
                            <div className={"regi-secle "+(!error||mobileNo?"mt20":"")} onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label " +(label2?"reg-mobile":"")}>Mobile No. <span className="star">*</span></label>
                                {!label2?
                                <input type="text"  name="ISD" onChange={handleChange}/>
                                :
                                <div >
                                    <input type="text" className="isdCode" name="ISD" value={ISD} onChange={handleChange}/>
                                    <input type="text" className="mobileNo" name="mobileNo" value={mobileNo} onChange={handleChange}/>
                                </div>
                                }
                            </div>
                            <div className="txtInfo"> Jeevansathi members who like your profile will contact you on this phone number. <span>Verification</span>   of this number is compulsory after your registration.</div>
                        </div>

                       
                        <div className="contactPrivacy ">
                            <div className="privcysetting">Contact Privacy Settings</div>
                            <div className="mt-3">
                                <span className={pvacyMode==1?"chipLight":""} onClick={()=>setPvacyMode(1)}>Show to all</span>
                                <span className={pvacyMode==2?"chipLight":""} onClick={()=>setPvacyMode(2)}>Hide to all</span>
                                <span className={pvacyMode==3?"chipLight":""} onClick={()=>setPvacyMode(3)}>Show to members I express interest in</span>
                            </div>
                           
                        </div>
                            
                    
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!password?"Password is missing":""}</div>
                            <div className={"regi-secle "+(!error||password?"mt20":"")} onClick={() =>{setlabel3(true)}}>
                                <label className={"reg-label " +(label3?"reg-password":"")}>Create New Password <span className="star">*</span></label>
                                <input type="password" name="password" value={password} onChange={handleChange}/>
                            </div>
                            
                        </div>

                        <div className="regi-detail">
                        <div className="arletVlid">{error&&!title?"Please choose whose profile is being created.":""}</div>
                            <div className={"regi-secle "+(!error||title?"mt20":"")} onClick={() =>{setlabel4(true);}}>
                                <label className={"reg-label  " +(label4?"reg-profile":"")}>Create Profile For <span className="star">*</span></label>  
                                {label4?
                                <React.Fragment>
                                <div>
                                    <ul className="profileFor">
                                        {profileFor.map((p1,index)=>
                                            <li className={title==p1?"optActive":""} key={index} onClick={()=>handleProfile(p1)}>{p1}</li>
                                        )}
                                        
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        {title=="Self"?
                        <div className="regi-detail">
                        <div className="arletVlid">{error&&!gender?"Please provide a gender.":""}</div>
                            <div className={"regi-secle "+(!error||gender?"mt20":"")} onClick={() =>{setlabel5(true);}}>
                                <label className={"reg-label  " +(label5?"reg-famly":"")}>Gender</label>  
                                {label5?
                                <React.Fragment>
                                <div>
                                    <ul className="genderFor">
                                        <li className={gender=="male"?"optActive":""} onClick={()=>handleGender("male")}>Male</li>
                                        <li className={gender=="female"?"optActive":""} onClick={()=>handleGender("female")}>Female</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        :""}

                        <button className="proBtns" onClick={handleSubmit}>Register Me</button>
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

// Please include an '@' in the email address