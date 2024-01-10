import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import BrowseContent from "./browseContent";
import { useState } from "react";
import yogjodiLogo from "../image/YogJodiLogo.png";


function SearchBar() {
    const[showList,setShowList] = useState(1);
    const[searchProfileId,setSearchProfileId] = useState(false);
    const[bride,setBride] = useState(true);
    const[showPop,setshowPop] = useState(0);
    const[allprofile,setAllprofile] = useState(false);

    

    const[minAge,setMinAge]=useState(21);
    const[maxAge,setmaxAge]=useState(35);
    const[minHeight,setminHeight]=useState(`4' 0" (1.22 mts)`);
    const[maxHeight,setmaxHeight]=useState(`7' (2.13 mts) plus'`);
    const[religion,setReligion]=useState([]);
    const[motherTongue,setmotherTongue]=useState([]);
    const[country,setCountries]=useState([]);
    const[resiStatus,setResiStatus]=useState([]);
    const[maritalstatus,setmaritalstatus]=useState([]);

    function handleRemove(index){
        const religion1 = [...religion];
        religion1.splice(index,1);
        setReligion(religion1);
    }

    function multipleSearchChoise(valueArr,arr,lable,no){
        return(
            <div className="d-flex pt38">
                <label>{lable}</label>
                <div className="srchField" onClick={()=>setshowPop(no)}>
                    <i className={showPop==no?"iconArrow iconPostion":""}></i>
                    <div className="p13">
                        {valueArr[0]?
                        <ul >
                            {valueArr.map((r1,index)=>(
                                <li className="serch-choice" key={index}>
                                    <span >{r1}</span>
                                    <span className="choice-close" onClick={()=>handleRemove(index)}>x</span>
                                </li>
                            ))}
                        </ul>
                        :<div className="nullValue">Doesn't Matter</div>}
                    </div>
                </div>
                {showPop==no?(
                    <ul className="dropBox2 width490 postionBox">
                        {arr.map((h1,index)=>(
                            <li className={"width156 border-0 "+(valueArr.find(r1=>r1==h1)?"optActive":"")} key={index} onClick={valueArr.find(r1=>r1==h1)?null:()=>{setshowPop(0);setReligion([...valueArr,h1])}}>{h1}</li>
                        ))}
                    </ul>
                ):""}
            </div>
        )
    }
    
    let minAges = [];
    for(let i=20;i<=70;i++) minAges.push(i);
    let heights = [];
    for(let i=0;i<10;i++)heights.push(`4' ${i}" (1.22 mts)`);

    const religions= ["Hindu","Muslim","Christian","Sikh","Buddhist","Jain","Bahai"];
    const motherTongues=["Bihari","Bengali","Hindi Delhi","Hindi","Gujarati","Kannada","Malayalam","Marathi","Oriya","Punjabi","Rajasthani","Tamil","Telugu","Hindi","Hindi MP","Konkani","Himachali","Haryanvi","Assamese","Kashmiri","Sikkim Nepali","Tulu"];
    const countries=[ "Maharashtra", "Uttar Pradesh", "Karnataka", "Andhra Pradesh", "Tamil Nadu", "West Bengal", "Madhya Pradesh", "Gujarat", "Haryana", "Bihar", "Kerala", "Rajasthan", "Punjab", "Orissa", "Assam","jammu & Kashmir" , "Himachal Pradesh", "Jharkhand", "Chhattisgarh", "Uttarakhand", "Lakshadweep"];
    const residStatus=["Citizen","Work Permit","Permanent Resident","Student Visa","Temporary Visa"];
    const mstatus=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    return(
        <div>
            <header className="coverImg">
                <div className="searchWid">
                    <div>
                        <Link className="jeevansathi-logo" to="/">
                            <img height="100%" width="100%"  src={yogjodiLogo}/>
                        </Link>
                    </div>
                    <div className="menu-navbar">
                        <div className="menupl">
                            <ul className="menu-list list-inline">
                                <li>
                                    <div className="browse-menu pb-4" >BROWSE PROFILES BY<i className="fa-solid fa-chevron-down fa-sm"></i></div>
                                    <div className="contentHome">
                                        <div className="browse-link-list">
                                            <div className="mother_Tongue" onMouseEnter={()=>setShowList(1)}>Mother Tongue</div>
                                            <div className="caste" onMouseEnter={()=>setShowList(2)}>Caste</div>
                                            <div className="religion" onMouseEnter={()=>setShowList(3)}>Religion</div>
                                            <div className="city" onMouseEnter={()=>setShowList(4)}>City</div>
                                            <div className="occupation" onMouseEnter={()=>setShowList(5)}>Occupation</div>
                                            <div className="state" onMouseEnter={()=>setShowList(6)}>State</div>
                                            <div className="NRI" onMouseEnter={()=>setShowList(7)}>NRI</div>
                                            <div className="college" onMouseEnter={()=>setShowList(8)}>College</div>
                                        </div>
                                        <div className="browseContent">
                                            <BrowseContent showList={showList}/>
                                        </div>
                                    </div>
                                </li>
                                <li className="search-ml" >
                                    <div className="search-menu"><Link to="search"><i class="fa-solid fa-magnifying-glass"></i></Link></div>
                                    
                                </li>
                                <li className="search-ml">
                                    <Link to="/features/help">HELP</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-navbar--second">
                    <div className={"signupMenu2"}>
                        <div className="loginPart" >LOGIN <i className="login-icon"></i></div>
                        <Link to="/user_registration">
                            <div className="registerPart2" > REGISTER FREE</div>
                        </Link>
                    </div>
                </div>
                </div>
            </header>
            
            <div className="bg-3">
                <div className="footer-List">
                    <div className="advnbg ">
                        <div className={"advnWid "+(searchProfileId?"":"srchSelected")} onClick={()=>setSearchProfileId(false)}>Search</div>
                        <div className="border my-2"></div>
                        <div className={"advnWid "+(searchProfileId?"srchSelected":"")} onClick={()=>setSearchProfileId(true)}>Search by Profile ID</div>
                    </div>
                    {!searchProfileId?(
                    <div>
                    <div className="srchform">
                        <ul>
                            <li className="d-flex">
                                <label>Search for</label>
                                <div className="srchField">
                                    <div className={"bordRigt wid50p "+(bride?"optActive":"")} onClick={()=>setBride(true)}>Bride</div>
                                    <div className={"wid50p "+(bride?"":"optActive")} onClick={()=>setBride(false)}>Groom</div>
                                </div>
                            </li>
                            <li className="d-flex pt38">
                                <label>Age</label>
                                <div className="srchField">
                                    <i className={showPop==1?"iconArrow iconPostion":showPop==2?"iconArrow iconPostion2":""}></i>
                                    <div className="bordRigt wid50p text-start pl22" onClick={()=>setshowPop(1)}>{minAge} years<i className="dropArrow"></i></div>
                                    <div className="wid50p text-start pl22" onClick={()=>setshowPop(2)}>{maxAge} years <i className="dropArrow"></i></div>
                                    {showPop==1?(
                                    <div className="dropBox width380 postionBox">
                                        <ul>
                                            {minAges.map((m1,index)=>(<li className={"width38 "+(minAge==m1?"optActive":"")} key={index} onClick={()=>{setshowPop(0);setMinAge(m1)}}>{m1}</li>))}
                                        </ul>
                                    </div>
                                    ):showPop==2?(
                                    <div className="dropBox width380 postionBox2">
                                        <ul>
                                            {minAges.map((m1,index)=>(<li className={"width38 "+(minAge<m1?"":"color11 ")+(maxAge==m1?"optActive ":"")} key={index} onClick={minAge<m1?()=>{setshowPop(0);setmaxAge(m1)}:null}>{m1}</li>))}
                                        </ul>
                                    </div>
                                    ):""}
                                </div>
                            </li>
                            <li className="d-flex pt38">
                                <label>Height</label>
                                <div className="srchField">
                                    <i className={showPop==3?"iconArrow iconPostion":showPop==4?"iconArrow iconPostion2":""}></i>
                                    <div className="bordRigt wid50p text-start pl22" onClick={()=>setshowPop(3)}>{minHeight}<i className="dropArrow"></i></div>
                                    <div className="wid50p text-start pl22" onClick={()=>setshowPop(4)}>{maxHeight}<i className="dropArrow"></i></div>
                                    {showPop==3?(
                                    <div className="dropBox width490 postionBox">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className={"width156 border-0 "+(minHeight==h1?"optActive":"")} key={index} onClick={()=>{setshowPop(0);setminHeight(h1)}}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):showPop==4?(
                                    <div className="dropBox width490 postionBox2">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className={"width156 border-0 "+(minHeight<h1?"":"color11 ")+(maxHeight==h1?"optActive":"")} key={index} onClick={minHeight<h1?()=>{setshowPop(0);setmaxHeight(h1)}:null}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):""}
                                </div>
                            </li>
                            <li >
                                <div className="d-flex pt38">
                                <label>Religion</label>
                                <div className="srchField" onClick={()=>setshowPop(5)}>
                                    <i className={showPop==5?"iconArrow iconPostion":""}></i>
                                    <div className="p13">
                                        {religion[0]?
                                        <ul >
                                            {religion.map((r1,index)=>(
                                                <li className="serch-choice" key={index}>
                                                    <span >{r1}</span>
                                                    <span className="choice-close" onClick={()=>handleRemove(index)}>x</span>
                                                </li>
                                            ))}
                                        </ul>
                                        :<div className="nullValue">Doesn't Matter</div>}
                                    </div>
                                </div>
                                {showPop==5?(
                                    <ul className="dropBox2 width490 postionBox3">
                                        {religions.map((h1,index)=>(
                                            <li className={"width156 text-start border-0 "+(religion.find(r1=>r1==h1)?"optActive":"")} key={index} onClick={religion.find(r1=>r1==h1)?null:()=>{setshowPop(0);setReligion([...religion,h1])}}>{h1}</li>
                                        ))}
                                    </ul>
                                ):""}
                                </div>
                            </li>
                            <li >
                                <div className="d-flex pt38">
                                <label>Mother Tongue</label>
                                <div className="srchField" onClick={()=>setshowPop(6)}>
                                    <i className={showPop==6?"iconArrow iconPostion":""}></i>
                                    <div className="p13">
                                        {motherTongue[0]?
                                        <ul >
                                            {motherTongue.map((r1,index)=>(
                                                <li className="serch-choice" key={index}>
                                                    <span >{r1}</span>
                                                    <span className="choice-close" onClick={()=>handleRemove(index)}>x</span>
                                                </li>
                                            ))}
                                        </ul>
                                        :<div className="nullValue">Doesn't Matter</div>}
                                    </div>
                                </div>
                                {showPop==6?(
                                    <ul className="dropBox2 width490 postionBox3">
                                        {motherTongues.map((h1,index)=>(
                                            <li className={"width156 text-start border-0 "+(motherTongue.find(r1=>r1==h1)?"optActive":"")} key={index} onClick={motherTongue.find(r1=>r1==h1)?null:()=>{setshowPop(0);setmotherTongue([...motherTongue,h1])}}>{h1}</li>
                                        ))}
                                    </ul>
                                ):""}
                                </div>
                            </li>
                            <li >
                                <div className="d-flex pt38">
                                <label>Country</label>
                                <div className="srchField" onClick={()=>setshowPop(7)}>
                                    <i className={showPop==7?"iconArrow iconPostion":""}></i>
                                    <div className="p13">
                                        {country[0]?
                                        <ul >
                                            {country.map((r1,index)=>(
                                                <li className="serch-choice" key={index}>
                                                    <span >{r1}</span>
                                                    <span className="choice-close" onClick={()=>handleRemove(index)}>x</span>
                                                </li>
                                            ))}
                                        </ul>
                                        :<div className="nullValue">Doesn't Matter</div>}
                                    </div>
                                </div>
                                {showPop==7?(
                                    <ul className="dropBox2 width490 postionBox3">
                                        {countries.map((h1,index)=>(
                                            <li className={"width156 text-start border-0 "+(country.find(r1=>r1==h1)?"optActive":"")} key={index} onClick={country.find(r1=>r1==h1)?null:()=>{setshowPop(0);setCountries([...country,h1])}}>{h1}</li>
                                        ))}
                                    </ul>
                                ):""}
                                </div>
                            </li>
                            <li >
                                <div className="d-flex pt38">
                                <label>Residential Status</label>
                                <div className="srchField" onClick={()=>setshowPop(8)}>
                                    <i className={showPop==8?"iconArrow iconPostion":""}></i>
                                    <div className="p13">
                                        {resiStatus[0]?
                                        <ul >
                                            {resiStatus.map((r1,index)=>(
                                                <li className="serch-choice" key={index}>
                                                    <span >{r1}</span>
                                                    <span className="choice-close" onClick={()=>handleRemove(index)}>x</span>
                                                </li>
                                            ))}
                                        </ul>
                                        :<div className="nullValue">Doesn't Matter</div>}
                                    </div>
                                </div>
                                {showPop==8?(
                                    <ul className="dropBox2 width490 postionBox3">
                                        {residStatus.map((h1,index)=>(
                                            <li className={"width156 text-start border-0 "+(resiStatus.find(r1=>r1==h1)?"optActive":"")} key={index} onClick={resiStatus.find(r1=>r1==h1)?null:()=>{setshowPop(0);setResiStatus([...resiStatus,h1])}}>{h1}</li>
                                        ))}
                                    </ul>
                                ):""}
                                </div>
                            </li>
                            <li className="d-flex pt38 sdsa">
                                <label>Income</label>
                                <div className="srchField">
                                    <i className={showPop==9?"iconArrow iconPostion":showPop==10?"iconArrow iconPostion2":""}></i>
                                    <div className="bordRigt wid50p text-start pl22" onClick={()=>setshowPop(9)}>Rs. 0<i className="dropArrow"></i></div>
                                    <div className="wid50p text-start pl22" onClick={()=>setshowPop(10)}>and above<i className="dropArrow"></i></div>
                                    {showPop==9?(
                                    <div className="dropBox width490 postionBox">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className="width156 border-0" key={index} onClick={()=>setshowPop(0)}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):showPop==10?(
                                    <div className="dropBox width490 postionBox2">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className="width156 border-0" key={index} onClick={()=>setshowPop(0)}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):""}
                                </div>
                                
                            </li>
                            <li >
                                <div className="d-flex pt38">
                                <label>Marital Status</label>
                                <div className="srchField" onClick={()=>setshowPop(11)}>
                                    <i className={showPop==11?"iconArrow iconPostion":""}></i>
                                    <div className="p13">
                                        {maritalstatus[0]?
                                        <ul >
                                            {maritalstatus.map((r1,index)=>(
                                                <li className="serch-choice" key={index}>
                                                    <span >{r1}</span>
                                                    <span className="choice-close" onClick={()=>handleRemove(index)}>x</span>
                                                </li>
                                            ))}
                                        </ul>
                                        :<div className="nullValue">Doesn't Matter</div>}
                                    </div>
                                </div>
                                {showPop==11?(
                                    <ul className="dropBox2 width490 postionBox3">
                                        {mstatus.map((h1,index)=>(
                                            <li className={"width156 text-start border-0 "+(maritalstatus.find(r1=>r1==h1)?"optActive":"")} key={index} onClick={maritalstatus.find(r1=>r1==h1)?null:()=>{setshowPop(0);setmaritalstatus([...maritalstatus,h1])}}>{h1}</li>
                                        ))}
                                    </ul>
                                ):""}
                                </div>
                            </li>
                            <li className="d-flex pt38">
                                <label>Photo</label>
                                <div className="srchField">
                                    <div className={"bordRigt wid50p "+(allprofile?"optActive":"")} onClick={()=>setAllprofile(true)}>All Profiles</div>
                                    <div className={"wid50p "+(allprofile?"":"optActive")} onClick={()=>setAllprofile(false)}>Profiles with photo only</div>
                                </div>
                            </li>
                        </ul>


                    </div>
                    <div className="serchBtn">
                        <button>Search</button>
                    </div>                        

                    </div>
                    ):(
                    <div className="srchform">
                        <ul>
                            <div className="profeError">Required</div>
                            <li className="serchProfileId">
                                <input className="srxchField" placeholder="Profile ID"/>
                                    
                            </li>
                        </ul>
                        <div className="serchBtn bg-white mt-4">
                            <button>Search</button>
                        </div> 
                    </div>

                    )}
            
               
                </div>
            </div>
            <Footer/>
            <div className="copyRight"> All rights reserved © 2016 Yogjodi Internet Services. </div>

           
        </div>
    )
               
}
export default SearchBar;