import React, {useState} from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";



function CareerDatailsMob(){

    const [takeData,setTakeData] = useState({qualify:"",employee:"",occupation:"",annIncome:""});
    const [errorPop,setErrorPop]= useState(false);
    const [errorMsg,setErrorMsg]= useState(false);

   
    function handleData(title,value){
        if(title==="qualify")setTakeData({...takeData,qualify:value});
        if(title==="employee")setTakeData({...takeData,employee:value});
        if(title==="occupation")setTakeData({...takeData,occupation:value});
        if(title==="annIncome")setTakeData({...takeData,annIncome:value});
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
                    <div className="">{title}</div>
                </header>
                <div className="divSlider">
                    <ul>
                        {arr.map((h1,index)=>
                            <li className={value===h1?"selectedVal":""} key={index} onClick={()=>{handleData(name,h1)}} data-bs-dismiss="offcanvas" aria-label="Close">{h1}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
    
    function handleError(){
        qualify&&employee&&occupation&&annIncome?setErrorPop(false):setErrorPop(true);
        setTimeout(errorHides, 3000);
        setErrorMsg(true);
    }
    function errorHides(){
        setErrorPop(false);
    }

    let highDegrees = ["BBA","BMS","BFA","BEM","B.Sc","BA","B.Tech","BCA","BPT","CA","CS"];
    let emped = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    let occupations=["Advertising","Farming","Farming"]

    const {qualify,employee,occupation,annIncome}=takeData;

    return(
        <motion.div initial={{ x:1400 }} animate={{ x:0 }} transition={{ duration: 0.5 }}>
            <div className={"errorMsg "+(errorPop?"":"errorhide")}>
                {!qualify&&<div># Highest qualification is missing</div>}
                {!employee&&<div># Employed in is missing</div>}
                {employee&&!occupation&&<div># Occupation is missing</div>}
                {!annIncome&&<div># Annual income is missing</div>}
            </div>
            <header className="personal-header">
                <span className="leftIcon"><Link to="/registr/page2"> <i className="allimages"></i></Link></span>
                <div className="">Career Details</div>
            </header>
            <div className="personalDetialsContainer">
               
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#highestQualify" aria-controls="offcanvsasRight">
                    {defiMultiInput("Highest Qualification",qualify)}
                </div>
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#employeeIn" aria-controls="offcanvsasRight">
                    {defiMultiInput("Employed In",employee)}
                </div>
                {employee&&
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#occupation" aria-controls="offcanvsasRight">
                    {defiMultiInput("Occupation",occupation)}
                </div>
                }
                <div className="regBlockSlider" data-bs-toggle="offcanvas" data-bs-target="#annualIncome" aria-controls="offcanvsasRight">
                    {defiMultiInput("Annual Income",annIncome)}
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="highestQualify" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Highest Qualification",highDegrees,qualify,"qualify")}
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="employeeIn" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Employed In",emped,employee,"employee")}
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="occupation" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Occupations",occupations,occupation,"occupation")}
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="annualIncome" aria-labelledby="offcanvasRightLabel">
                    {makeMultiToggle("Annual Income",incomeArr,annIncome,"annIncome")}
                </div>


            </div>
            
            <Link to={qualify&&employee&&occupation&&annIncome?"/registr/page4":"#"} onClick={handleError}>
                <div className={"btnForNext "+(qualify&&employee&&occupation&&annIncome?"btnActive":"")}> Next </div>
            </Link>
        </motion.div>   
    );

}

export default CareerDatailsMob;



