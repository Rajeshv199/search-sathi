import React, {useState} from "react";
import {Switch, Route, Redirect,useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


function FamilyDetails(props){
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
    const [label10, setlabel10] = useState(false);

    const [showPop,setShowPop] = useState(-1);

    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [famlyTye, setFamlyTye] = useState(-1);
    const [brotherNo, setBrotherNo] = useState(-1);
    const [sisterNo, setSisterNo] = useState(-1);
    const [fatherOcp, setfatherOcp] = useState("");
    const [matherOcp, setMatherOcp] = useState("");
    const [famlyLiving, setFamlyLiving] = useState("");
    const [contactAddres, setContactAddres] = useState("");
    const [aboutMyFamily, setAboutMyFamily] = useState("");

    function handleSave(){
        props.onSubmit("partner");
        
    }
    function handleShowMore(){
        props.onShowMore(props.partner?"partnerHide":"partner");
    }
    

    let fatherOccups = ["Business/Entrepreneur","Service-Private","Army/Armed Forces","Civil Services","Retired"];
    let motherOccups = ["Housewife","Service-Private","Teacher","Civil Services","Retired"];
    let livingLocations = ["Andhra Pradesh","Assam","Jharkhand","Tripura","West Bengal"];
    

    return(
                    <React.Fragment>
                        <div className="regi-detail">
                            <div className="regi-secle " onClick={() =>{setlabel1(true)}}>
                                <label className={"reg-label top8 " +(label1?"reg-label6":"")} >Father's Name</label>
                                <input type="text" placeholder={label1?"Enter Father's Name":""} onChange={(e)=>setFatherName(e.currentTarget.value)}/>
                                
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel2(true)}}>
                                <label className={"reg-label top8 " +(label2?"reg-mother":"")} >Mother's Name</label>
                                <input type="text" placeholder={label2?"Enter Mother's Name":""} onChange={(e)=>setMotherName(e.currentTarget.value)}/>
                                
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel3(true)}}>
                                <label className={"reg-label top8 " +(label3?"reg-brther":"")} >Brother</label>  
                                {label3?
                                <div>
                                    <ul className="brotherList">
                                        <li className={"border-0 " +(brotherNo==0?"optActive":"")} onClick={()=>{setBrotherNo(0)}}>None</li>
                                        <li className={brotherNo==1?"optActive":""}  onClick={()=>{setBrotherNo(1)}}>1</li>
                                        <li className={brotherNo==2?"optActive":""}  onClick={()=>{setBrotherNo(2)}}>2</li>
                                        <li className={brotherNo==3?"optActive":""}  onClick={()=>{setBrotherNo(3)}}>3</li>
                                        <li className={brotherNo==4?"optActive":""}  onClick={()=>{setBrotherNo(4)}}>3+</li>
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel4(true)}}>
                                <label className={"reg-label top8 " +(label4?"reg-sister":"")} >Sister</label>  
                                {label4?
                                <div>
                                    <ul className="brotherList">
                                        <li className={"border-0 " +(sisterNo==0?"optActive":"")} onClick={()=>{setSisterNo(0)}}>None</li>
                                        <li className={sisterNo==1?"optActive":""}  onClick={()=>{setSisterNo(1)}}>1</li>
                                        <li className={sisterNo==2?"optActive":""}  onClick={()=>{setSisterNo(2)}}>2</li>
                                        <li className={sisterNo==3?"optActive":""}  onClick={()=>{setSisterNo(3)}}>3</li>
                                        <li className={sisterNo==4?"optActive":""}  onClick={()=>{setSisterNo(4)}}>3+</li>
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label top8 " +(label5?"reg-FtherOcption":"")} onClick={() =>{setlabel5(true);setShowPop(1)}}>Father's Occupation</label>
                                <input type="text" placeholder="" readOnly value={fatherOcp} onClick={() =>{setlabel5(true);setShowPop(1)}}/>
                                {label5 && showPop==1?
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {fatherOccups.map((e1,index)=><li key={index} onClick={() =>{setfatherOcp(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label top8 " +(label6?"reg-mtherOcption":"")} onClick={() =>{setlabel6(true);setShowPop(2)}}>Mother's Occupation</label>
                                <input type="text" placeholder="" readOnly value={matherOcp} onClick={() =>{setlabel6(true);setShowPop(2)}}/>
                                {label6 && showPop==2?
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        {motherOccups.map((e1,index)=><li key={index} onClick={() =>{setMatherOcp(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel7(true);}}>
                                <label className={"reg-label top8 " +(label7?"reg-famly":"")}>Family type</label>  
                                {label7?
                                <div>
                                    <ul className="familyType">
                                        <li className={"border-0 " +(famlyTye=="none"?"optActive":"")} onClick={()=>{setFamlyTye("none")}}>Select</li>
                                        <li className={famlyTye=="Joint Family"?"optActive":""}  onClick={()=>{setFamlyTye("Joint Family")}}>Joint Family</li>
                                        <li className={famlyTye=="Nuclear Family"?"optActive":""}  onClick={()=>{setFamlyTye("Nuclear Family")}}>Nuclear Family</li>
                                        <li className={famlyTye=="Others"?"optActive":""}  onClick={()=>{setFamlyTye("Others")}}>Others</li>
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label top8 " +(label8?"reg-famlyLing":"")} onClick={() =>{setlabel8(true);setShowPop(4)}}>Family living in</label> 
                                <input type="text" placeholder="" readOnly value={famlyLiving} onClick={() =>{setlabel8(true);setShowPop(4)}}/>
                                {label8 && showPop==4 ?
                                <div className="gridDropdown">
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul> 
                                        {livingLocations.map((e1,index)=><li key={index} onClick={() =>{setFamlyLiving(e1);setShowPop(-1)}}>{e1}</li>)}
                                    </ul>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel9(true)}}>
                                <label className={"reg-label top8 " +(label9?"reg-Addree":"")} >Contact Address</label> 
                                <input type="text" placeholder="" value={contactAddres} onChange={(e)=>setContactAddres(e.currentTarget.value)}/>
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle2 mt-4" onClick={() =>{setlabel10(true)}}>
                                <label className={"reg-label top8 " +(label10?"reg-expres":"")} onClick={() =>{setlabel6(true)}}>About My Family</label>
                                {label10?
                                    <textarea value={aboutMyFamily} placeholder="Write about your parents and brothers or sisters. Where do they live? What are they doing?" onChange={(e)=>setAboutMyFamily(e.currentTarget.value)}></textarea>
                                :null}
                            </div>
                        </div>
                        <div>
                            <button className="saveBtn" onClick={handleSave}>Save</button>
                            <button className="showMoreBtn" onClick={handleShowMore}>{props.partner?"Show Less":"Show More"}</button>
                        </div>
                    </React.Fragment>
                 
                 
    );

}

export default FamilyDetails;

