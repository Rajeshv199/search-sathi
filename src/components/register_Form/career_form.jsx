import React, {useState} from "react";
import AddEduction from "../registration/addEductionForm";


function CareerDetails(props){

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5,setlabel5] = useState(false);
    const [label6,setlabel6] = useState(false);
    const [label7,setlabel7] = useState(false);
    const [label8,setlabel8] = useState(false);
    const [label9,setlabel9] = useState(false);

    const [showPop,setShowPop] = useState(-1);
    const [eductOpen,setEductOpen] = useState(false);

    const [employee, setEmployee] = useState("");
    const [occupation, setoccupation] = useState("");
    const [organization, setOrganization] = useState("");
    const [AnalIncome, setAnalIncome] = useState("");
    const [yearsOfExperi, setYearsOfExperi] = useState("");
    const [hightdegree, setHighdegree] = useState("");
    const [descriOfCareer, setdescriOfCareer] = useState("");

   
    function handlePop(val){
        setShowPop(val);
    }
    function handleSave(){
        props.onSubmit("lifeSyle");
    }
    function handleShowMore(){
        props.onShowMore(props.lifeStyle?"lifeSyleHide":"lifeSyle");
    }


    
    let emped = ["Private Sector","Government/Public Sector","Civil Services","Not Working"];
    let incomeArr=["No Income","Rs. 1 - 2 Lakh","Rs. 2 - 3 Lakh","Rs. 3 - 4 Lakh","Rs. 4 - 5 Lakh"];
    let yearsOfExpris=["0 - 1 year","1 - 3 years","3 - 5 years","5 - 7 years","7 - 10 years"];
    let highDegrees = ["BBA","BMS","BFA","BEM","B.Sc","BA","B.Tech","BCA","BPT","CA","CS"];
   



    return(
        <React.Fragment>
            
                        <div className="regi-detail">
                            <div className="regi-secle">
                                <label className={"reg-label top8 " +(label1?"reg-email":"")} onClick={() =>{setlabel1(true);handlePop(1)}}>Employed In</label> 
                                <input type="text" placeholder="" readOnly value={employee} onClick={() =>{setlabel1(true);handlePop(1)}}/>
                                {label1 && showPop===1?
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setEmployee(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul> 
                                    
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20">
                                <label className={"reg-label top8 " +(label2?"reg-occup":"")} onClick={() =>{setlabel2(true);handlePop(2)}}>Occupation</label> 
                                <input type="text" placeholder="" readOnly value={occupation} onClick={() =>{setlabel2(true);handlePop(2)}}/>
                                {label2 && showPop===2?
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setoccupation(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul> 
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20">
                                <label className={"reg-label top8 " +(label3?"reg-expres":"")} onClick={() =>setlabel3(true)}>Monthly Income</label> 
                                <input type="number" placeholder="" onClick={() =>setlabel3(true)}/>
                                
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20">
                                <label className={"reg-label top8 " +(label4?"reg-mobile":"")} onClick={() =>{setlabel4(true);handlePop(4)}}>Organization</label> 
                                <input type="text" placeholder="" readOnly value={organization} onClick={() =>{setlabel4(true);handlePop(4)}}/>
                                {label4 && showPop===4?
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {emped.map((e1,index)=><li key={index} onClick={() =>{setOrganization(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul> 
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" >
                                <label className={"reg-label top8 " +(label5?"reg-Aicome":"")} onClick={() =>{setlabel5(true);handlePop(5)}}>Annual Income</label> 
                                <input type="text" placeholder="" readOnly value={AnalIncome} onClick={() =>{setlabel5(true);handlePop(5)}}/>
                                {label5 && showPop===5?
                                <div className={"gridDropdown"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {incomeArr.map((i1,index)=><li key={index} onClick={() =>{setAnalIncome(i1);setShowPop(-1)}}>{i1}</li>)}
                                    </ul>
                                    
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" >
                                <label className={"reg-label top8 " +(label6?"reg-FtherOcption":"")} onClick={() =>{setlabel6(true);handlePop(6)}}>Years Of Experience</label> 
                                <input type="text" placeholder="" readOnly value={yearsOfExperi} onClick={() =>{setlabel6(true);handlePop(6)}}/>
                                {label6&& showPop===6?
                                <div className={"gridDropdown"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {yearsOfExpris.map((i1,index)=><li key={index} onClick={() =>{setYearsOfExperi(i1);setShowPop(-1)}}>{i1}</li>)}
                                    </ul>
                                    
                                </div>
                                :""}
                            </div>
                        </div>

                        <div className="regi-detail">
                            <div className="regi-secle mt20" >
                                <label className={"reg-label " +(label9?"reg-mother":"")} onClick={() =>{setlabel9(true);handlePop(7)}}>Highest Degree</label> 
                                <input type="text" placeholder="" readOnly value={hightdegree} onClick={() =>{setlabel9(true);handlePop(7)}}/>
                                {label9 && showPop===7?
                                <div className={"highdegBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {highDegrees.map((h1,index)=><li onClick={() =>{setHighdegree(h1);setShowPop(-1)}} key={index}>{h1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt20" >
                                <label className={"reg-label " +(label8?"reg-label6":"")} onClick={() =>{setlabel8(true);setEductOpen(true)}}>Add Education</label> 
                                <input type="text" placeholder="" readOnly  onClick={() =>{setlabel8(true);setEductOpen(true)}}/>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle2 mt20" onClick={() =>{setlabel7(true)}}>
                                <label className={"reg-label top8 " +(label7?"reg-partnr":"")} onClick={() =>{setlabel7(true)}}>Describe About Career</label>
                                {label7?
                                    <textarea name="descriOfCareer" value={descriOfCareer} onChange={(e)=>setdescriOfCareer(e.currentTarget.value)}></textarea>
                                :null}
                            </div>
                        </div>
                        <div>
                            <button className="saveBtn" onClick={handleSave}>Save</button>
                            <button className="showMoreBtn" onClick={handleShowMore}>{props.lifeStyle?"Show Less":"Show More"}</button>
                        </div>
           
           
            <div className="">
                    {eductOpen &&
                    <div className="popup-box">
                        <div className="box">
                            <div className="p-4">
                                <AddEduction/>
                                <div className="mt-4 mb-5">
                                    <button className="saveBtn3" onClick={()=>setEductOpen(false)}>Save</button>
                                    <button className="cancelBtn" onClick={()=>setEductOpen(false)}>Cencel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
            </div>
            
        </React.Fragment>
                 
    );

}

export default CareerDetails;


// prtmkumari55@gmail.com