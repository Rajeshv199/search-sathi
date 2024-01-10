import React, {useState,useEffect} from "react";
import {Switch, Route, Redirect,useHistory,useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../footer/regi_footer";
import YogJodiLogo from "../image/YogJodiLogo.png"; 
    
function ProfileDetails(){
    const history =  useHistory();

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);
    const [label9, setlabel9] = useState(false);

    const {state} = useLocation();

    const [error,setError] = useState(false);
    const [showPasswrd,setshowPasswrd] = useState(false);
    const [showConrmPasswrd,setshowConrmPasswrd] = useState(false);
    const [pvacyMode,setPvacyMode] = useState(3);
    const [verifyMob,setVerifyMob] = useState(false);

    const [takeData,setTakeData] = useState({firstName:"",middleName:"",lastName:"",title:"",gmail:"",ISD:"+91",mobileNo:"",password:"",confirmPassword:"",gender:""})

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
        setlabel6(true);setlabel7(true);setlabel8(true);
        setlabel9(true);
        let data = {title,gmail,ISD,mobileNo,password};
        let keys = Object.keys(data);
        let count = keys.reduce((acc,curr)=>(data[curr]?acc+1:acc),0);
        // const {password,confirmPassword} = takeData;
        if(keys.length==count&&(takeData.password==takeData.confirmPassword)){
            setVerifyMob(true);
            // history.push({pathname:"/profile",state:{takeData}});
        }else{
            if(takeData.password!=takeData.confirmPassword) alert("Password do not match");
        }
           
        
    }


    let profileFor=["Self","Son","Daughter","Sister","Relative/Friend","Other"];

    const {title,firstName,middleName,lastName,ISD,gmail,mobileNo,password,confirmPassword,gender} = takeData;
    

    return(
        <div className="proDetailBg" >
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            {/* <Link to="/" className="ml-2"><img src="https://www.jeevansathi.com/images/jspc/commonimg/logo1.png" /></Link> */}
                            <Link to="/" className=""><img  src={YogJodiLogo} /></Link>
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
                            <div className="arletVlid">{error&&!firstName?"Please provide a valid First Name":""}</div>
                            <div className={"regi-secle "+(!error||firstName?"mt20":"")} onClick={() =>{setlabel6(true)}}>
                                <label className={"reg-label " +(label6?"reg-email":"")}>First Name <span className="star">*</span></label>
                                <input type="text" value={firstName} name="firstName" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className={"regi-secle mt20"} onClick={() =>{setlabel8(true)}}>
                                <label className={"reg-label top8 " +(label8?"reg-label6":"")}>Middle Name</label>
                                <input type="text" value={middleName}  name="middleName" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!lastName?"Please provide a valid Last Name":""}</div>
                            <div className={"regi-secle "+(!error||lastName?"mt20":"")} onClick={() =>{setlabel9(true)}}>
                                <label className={"reg-label " +(label9?"reg-email":"")}>Last Name <span className="star">*</span></label>
                                <input type="text" value={lastName}  name="lastName" onChange={handleChange}/>
                            </div>
                        </div>
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
                            {/* <div className="txtInfo"> Yogjodi members who like your profile will contact you on this phone number. <span>Verification</span>   of this number is compulsory after your registration.</div> */}
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
                                <label className={"reg-label " +(label3?"reg-password":"")}>Create Password <span className="star">*</span></label>
                                <div className="passwrdIcon">{showPasswrd?<i class="fa-regular fa-eye" onClick={()=>setshowPasswrd(false)}></i>:<i class="fa-regular fa-eye-slash" onClick={()=>setshowPasswrd(true)}></i>}</div>
                                <input type={showPasswrd?"text":"password"} name="password" value={password} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="arletVlid">{error&&!confirmPassword?"Confirm Password is missing":""}</div>
                            <div className={"regi-secle "+(!error||confirmPassword?"mt20":"")} onClick={() =>{setlabel7(true)}}>
                                <label className={"reg-label " +(label7?"reg-confrmPass":"")}>Confirm Password <span className="star">*</span></label>
                                <div className="passwrdIcon">{showConrmPasswrd?<i class="fa-regular fa-eye" onClick={()=>setshowConrmPasswrd(false)}></i>:<i class="fa-regular fa-eye-slash" onClick={()=>setshowConrmPasswrd(true)}></i>}</div>
                                <input type={showConrmPasswrd?"text":"password"} name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
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
            <div className="">
                {verifyMob &&
                <div className="popup-box">
                    <div className="box3">
                        <div className="px-4 py-3">
                            <h5 className="text-center">Verify Your Mobile No</h5>
                            <div className="sntopt">Sent OTP</div>
                            <h6 className="mt-2">Enter OTP</h6>
                            <input  type="number" className="inputopt"/>
                            <input  type="number" className="inputopt"/>
                            <input  type="number" className="inputopt"/>
                            <input  type="number" className="inputopt"/>
                            <input  type="number" className="inputopt"/>
                            <input  type="number" className="inputopt"/>
                            <div className="mt-4 mb-2">
                                <button className="submitopt" onClick={()=>setVerifyMob(false)}>Submit</button>
                                {/* <button className="cancelBtn" onClick={()=>setVerifyMob(false)}>Cencel</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                 }
            </div>
        </div>
                 
    );

}

export default ProfileDetails;

// Please include an '@' in the email address