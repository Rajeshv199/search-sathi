import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";


    function VerificationMob(){

    const [showPass,setShowPass] = useState(false);
    const [ShowInterest,setShowInterest] = useState(1);

    const [takeData,setTakeData] = useState({fullName:"",email:"",MobileNo:"",password:""});
    const [errorPop,setErrorPop]= useState(false);
    const [errorMsg,setErrorMsg]= useState(false);

    function handleChange(e){
        const {currentTarget: input} = e;
        (takeData[input.name] = input.value) ;
        setTakeData(takeData);
        setErrorMsg(false);
    }


    function handleShowPass(){
        showPass?setShowPass(false):setShowPass(true);
    }
    function handleInterest(val){
        setShowInterest(val)
    }
    function handleError(){
        fullName&&email&&MobileNo&&password?setErrorPop(false):setErrorPop(true);
        setTimeout(errorHides, 3000);
        setErrorMsg(true);
    }
    function errorHides(){
        setErrorPop(false);
    }
    const {fullName,email,MobileNo,password} = takeData;
   

    return(
        <motion.div initial={{ x:1400 }} animate={{ x:0 }} transition={{ duration: 0.5 }}>
            <div className={"errorMsg "+(errorPop?"":"errorhide")}>
                {!fullName&&<div># Full Name is missing</div>}
                {!email&&<div># Provide a valid email</div>}
                {!MobileNo&&<div># Provide a valid phone number</div>}
                {!password&&<div># Password is missing</div>}
            </div>
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page4"> <i className="allimages"></i></Link></span>
                <div className="">Login Details</div>
            </header>
            <div className="personalDetialsContainer">
                <div className="regBlockInput">
                    <div className="selectWid">
                        <div className={"dateofbrth "+(errorMsg&&!fullName?"colorred":"")}>Full Name</div>
                        <input type="text" className="inptFillForm" name="fullName" placeholder="Not Filled In" onChange={handleChange}/>
                    </div>
                </div>
                <div className="regBlockInput" >
                    <div className="selectWid2">
                        <div className={"dateofbrth "+(errorMsg&&!email?"colorred":"")}>Email</div>
                        <input type="email" className="inptFillForm" name="email" placeholder="Not Filled In" onChange={handleChange}/>
                    </div>
                </div>
                <div className="regBlockInput" >
                    <div className="">
                        <div className={"dateofbrth "+(errorMsg&&!MobileNo?"colorred":"")}>Phone Number</div>
                        <div className="d-flex mt-2 pt-1">
                            <span>+</span>
                            <input type="text" className="slidermobNo sliderISD" value="91"/>
                            <span>-</span>
                            <input type="number" className="slidermobNo" name="MobileNo" placeholder="Not Filled In" onChange={handleChange}/>
                        </div>
                        
                    </div>
                </div>
                <div className="regBlockInput" >
                    <div className="selectWid3">
                        <div className={"dateofbrth "+(errorMsg&&!password?"colorred":"")}>Create New Password</div>
                        <input type={showPass?"text":"password"} className="inptFillForm" name="password" placeholder="Not Filled In" onChange={handleChange}/>
                        <span className="infoHint">Hint: Use 6 or more characters</span>
                    </div>
                    <span className="showHidePass" onClick={handleShowPass}>{showPass?"Hide":"Show"}</span>
                </div>
                <div className="regBlockInput" >
                    <div className="selectWid2">
                        <div className="dateofbrth">Contact Privacy Settings</div>
                        <div className="chipContainer">
                            <div className={ShowInterest==1?"highlightChip":""} onClick={()=>handleInterest(1)}>Show to all</div>
                            <div className={ShowInterest==2?"highlightChip":""} onClick={()=>handleInterest(2)}>Hide from all</div>
                            <div className={ShowInterest==3?"highlightChip":""} onClick={()=>handleInterest(3)}>Show to members I express interest in</div>
                        </div>
                        
                    </div>
                </div>
                <div className="termPrivy">Terms of Use Privacy Policy</div>
            </div>
            
            <Link to={fullName&&email&&MobileNo&&password?"/registr/page5":"#"} onClick={handleError}>
                <div className={"btnForNext "+(fullName&&email&&MobileNo&&password?"btnActive":"")}> Accept & Continue </div>
            </Link>

        </motion.div>   
    );

}

export default VerificationMob;

