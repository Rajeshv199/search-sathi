import React, {useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer"


function FamilyDetails(){
    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);

    const [famlyTye, setFamlyTye] = useState(-1);
    function handleFmlyTye(val){
        setFamlyTye(val);
    }
    const [brotherNo, setBrotherNo] = useState(-1);
    function handleBrotherList(val){    
        setBrotherNo(val);
    }
    const [sisterNo, setSisterNo] = useState(-1);
    function handleSisterList(val){
        setSisterNo(val);
    }

    const [fatherOcp, setfatherOcp] = useState(false);
    const [matherOcp, setMatherOcp] = useState(false);
    const [famlyLiving, setFamlyLiving] = useState(false);


    

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
                            <div>Career Details</div>
                            <div className="reg-active">Lifestyle & Family</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="register-wid">
                <div className="regi-info">We would love to know about your family.</div>
                <div className="pt-4 d-flex mt-2">
                    <div className="reg-wid80">
                        <div className="regi-detail">
                            <div className="arletVlid"></div>
                            <div className="regi-secle" onClick={() =>{setlabel1(true);}}>
                                <label className={"reg-label  " +(label1?"reg-famly":"")}>Family type</label>  
                                {label1?
                                <React.Fragment>
                                <div>
                                    <ul className="familyType">
                                        <li className={"border-0 " +(famlyTye==0?"optActive":"")} onClick={()=>{handleFmlyTye(0)}}>Select</li>
                                        <li className={famlyTye==1?"optActive":""}  onClick={()=>{handleFmlyTye(1)}}>Joint Family</li>
                                        <li className={famlyTye==2?"optActive":""}  onClick={()=>{handleFmlyTye(2)}}>Nuclear Family</li>
                                        <li className={famlyTye==3?"optActive":""}  onClick={()=>{handleFmlyTye(3)}}>Others</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            {/* <div className="arletVlid"></div> */}
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label " +(label2?"reg-FtherOcption":"")} onClick={() =>{setlabel2(true)}}>Father's Occupation</label>
                                <input type="text" placeholder="" onClick={() =>{setfatherOcp(true);setlabel2(true)}}/>
                                {label2 && fatherOcp?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        <li onClick={() =>{setfatherOcp(false)}}>Business/Entrepreneur</li>
                                        <li onClick={() =>{setfatherOcp(false)}}>Service-Private</li>
                                        <li onClick={() =>{setfatherOcp(false)}}>Army/Armed Forces</li>
                                        <li onClick={() =>{setfatherOcp(false)}}>Civil Services</li>
                                        <li onClick={() =>{setfatherOcp(false)}}>Retired</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            {/* <div className="arletVlid"></div> */}
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label " +(label3?"reg-mtherOcption":"")} onClick={() =>{setlabel3(true)}}>Mother's Occupation</label>
                                <input type="text" placeholder="" onClick={() =>{setMatherOcp(true);setlabel3(true)}}/>
                                {label3 && matherOcp?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        <li onClick={() =>{setMatherOcp(false)}}>Housewife</li>
                                        <li onClick={() =>{setMatherOcp(false)}}>Service-Private</li>
                                        <li onClick={() =>{setMatherOcp(false)}}>Teacher</li>
                                        <li onClick={() =>{setMatherOcp(false)}}>Civil Services</li>
                                        <li onClick={() =>{setMatherOcp(false)}}>Retired</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel4(true);}}>
                                <label className={"reg-label  " +(label4?"reg-brther":"")}>Brother</label>  
                                {label4?
                                <React.Fragment>
                                <div>
                                    <ul className="brotherList">
                                        <li className={"border-0 " +(brotherNo==0?"optActive":"")} onClick={()=>{handleBrotherList(0)}}>None</li>
                                        <li className={brotherNo==1?"optActive":""}  onClick={()=>{handleBrotherList(1)}}>1</li>
                                        <li className={brotherNo==2?"optActive":""}  onClick={()=>{handleBrotherList(2)}}>2</li>
                                        <li className={brotherNo==3?"optActive":""}  onClick={()=>{handleBrotherList(3)}}>3</li>
                                        <li className={brotherNo==4?"optActive":""}  onClick={()=>{handleBrotherList(4)}}>3+</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" onClick={() =>{setlabel5(true);}}>
                                <label className={"reg-label  " +(label5?"reg-sister":"")}>Sister</label>  
                                {label5?
                                <React.Fragment>
                                <div>
                                    <ul className="brotherList">
                                        <li className={"border-0 " +(sisterNo==0?"optActive":"")} onClick={()=>{handleSisterList(0)}}>None</li>
                                        <li className={sisterNo==1?"optActive":""}  onClick={()=>{handleSisterList(1)}}>1</li>
                                        <li className={sisterNo==2?"optActive":""}  onClick={()=>{handleSisterList(2)}}>2</li>
                                        <li className={sisterNo==3?"optActive":""}  onClick={()=>{handleSisterList(3)}}>3</li>
                                        <li className={sisterNo==4?"optActive":""}  onClick={()=>{handleSisterList(4)}}>3+</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label " +(label6?"reg-famlyLing":"")} onClick={() =>{setlabel6(true)}}>Family living in</label> 
                                <input type="text" placeholder="" onClick={() =>{setFamlyLiving(true);setlabel4(true)}}/>
                                {label6 && famlyLiving ?
                                <React.Fragment>
                                <div className={"mStatusBox"}>
                                    <i className={"imgArrow religionIcon"}></i>
                                    <ul>
                                        <li onClick={() =>{setFamlyLiving(false)}}>Andhra Pradesh</li>
                                        <li onClick={() =>{setFamlyLiving(false)}}>Assam</li>
                                        <li onClick={() =>{setFamlyLiving(false)}}>Jharkhand</li>
                                        <li onClick={() =>{setFamlyLiving(false)}}>Tripura</li>
                                        <li onClick={() =>{setFamlyLiving(false)}}>West Bengal</li>
                                    </ul>
                                </div>
                                </React.Fragment>
                                :""}
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle mt-4" >
                                <label className={"reg-label " +(label7?"reg-Addree":"")} onClick={() =>{setlabel7(true)}}>Contact Address</label> 
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="regi-detail">
                            <div className="regi-secle2 mt-4" onClick={() =>{setlabel8(true)}}>
                                <label className={"reg-label " +(label8?"reg-expres":"")} onClick={() =>{setlabel6(true)}}>About My Family</label>
                                {label8?
                                    <textarea placeholder="Write about your parents and brothers or sisters. Where do they live? What are they doing?"></textarea>
                                :null}
                            </div>
                        </div>
                        <div className="addProfile">
                            <Link to="/user_registration5"><button className="CmptRegiBtn2">Add To My Profile</button></Link>
                            <div className="mt-3"><Link to="/user_registration5">I will add this later</Link></div>
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

export default FamilyDetails;

