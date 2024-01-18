import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";



function SocialDetails(){

    const [takeData,setTakeData] = useState({maritStatus:"",motherTongue:"",religCaste:"",horoscopeMatch:""});
    const [errorPop,setErrorPop]= useState(false);
    const [errorMsg,setErrorMsg]= useState(false);
   
    function handleData(title,value){
        if(title=="maritStatus")setTakeData({...takeData,maritStatus:value});
        if(title=="motherTongue")setTakeData({...takeData,motherTongue:value});
        if(title=="religCaste")setTakeData({...takeData,religCaste:value});
        if(title=="horoscopeMatch")setTakeData({...takeData,horoscopeMatch:value});
        setErrorMsg(false);
    }

    function defiMultiInput(label,val){
        return(
            <React.Fragment>
                <div className="selectData">
                <div className={"dateofbrth "+(errorMsg&&!val?"colorred":"")}>{label}</div>
                    <div className="notFillForm">{val?val:"Not Filled In"}</div>
                </div>
                <div className="iconContainer">
                    <i className="allimages rightArrow"></i>
                </div>
            </React.Fragment>
        )
    }
   
    function makeMultiToggle(title,arr,value,name){
        return(
            <div>
                <header className="personal-header">
                    <span className="leftIcon" > 
                        <i className="allimages" data-bs-dismiss="offcanvas" aria-label="Close"></i> 
                    </span>
                    <div className="wid-title">{title}</div>
                </header>
                <div className="divSlider">
                    <ul>
                        {arr.map((h1,index)=>
                            <li className={value==h1?"selectedVal":""} key={index} onClick={()=>{handleData(name,h1)}} data-bs-dismiss="offcanvas" aria-label="Close">{h1}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
    function handleError(){
        maritStatus&&motherTongue&&religCaste?setErrorPop(false):setErrorPop(true);
        setTimeout(errorHides, 3000);
        setErrorMsg(true);
    }
    function errorHides(){
        setErrorPop(false);
    }

    let langs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"]
    let religions=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let mstatus=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    let horoscopeMatchs=["Must","Not Necessary"]
    
    const {maritStatus,motherTongue,religCaste,horoscopeMatch}=takeData;

    return(
        <motion.div initial={{ x:1400 }} animate={{ x:0 }} transition={{ duration: 0.5 }}>
            <div className={"errorMsg "+(errorPop?"":"errorhide")}>
                {!maritStatus&&<div># Marital status is missing</div>}
                {!motherTongue&&<div># Mother tongue is missing</div>}
                {!religCaste&&<div># Religion caste is missing</div>}
            </div>
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page3"> <i className="allimages"></i></Link></span>
                <div className="">Social Details</div>
            </header>
            <div className="personalDetialsContainer">
               
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#highestQualify" aria-controls="offcanvsasRight">
                    {defiMultiInput("Marital Status",maritStatus)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#employeeIn" aria-controls="offcanvsasRight">
                    {defiMultiInput("Mother Tongue",motherTongue)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#annualIncome" aria-controls="offcanvsasRight">
                    {defiMultiInput("Religion-Caste",religCaste)}
                </div>
                {religCaste&&<div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#horoscopeMatchs" aria-controls="offcanvsasRight">
                    {defiMultiInput("Horoscope match is necessary? (optional)",horoscopeMatch)}
                </div>}

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="highestQualify" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Marital Status",mstatus,maritStatus,"maritStatus")}
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="employeeIn" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Mother Tongue",langs,motherTongue,"motherTongue")}
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="annualIncome" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Religion-Caste",religions,religCaste,"religCaste")}
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="horoscopeMatchs" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Horoscope match is necessary?",horoscopeMatchs,horoscopeMatch,"horoscopeMatch")}
                </div>


            </div>
            
            <Link to={motherTongue&&motherTongue&&religCaste?"/registr/page5":"#"} onClick={handleError}>
                <div className={"btnForNext "+(motherTongue&&motherTongue&&religCaste?"btnActive":"")}> Next </div>
            </Link>


        </motion.div>   
    );

}

export default SocialDetails;

