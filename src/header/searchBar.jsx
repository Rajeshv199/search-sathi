import Footer from "../footer/footer";
import background from '../asset/header-inner1.jpg';
import logo from "../asset/logo1.png";
import { Link } from "react-router-dom";
import BrowseContent from "./browseContent";
import { useState } from "react";


function SearchBar() {
    const[showList,setShowList] = useState(1);
    const[searchProfileId,setSearchProfileId] = useState(false);
    const[bride,setBride] = useState(true);
    const[showPop,setshowPop] = useState(0);
    
    let minAge = [];
    for(let i=20;i<=70;i++) minAge.push(i);
    let heights = [];
    for(let i=0;i<10;i++)heights.push(`4' ${i}" (1.22 mts)`)

    return(
        <div>
            <header className="coverImg">
                <div className="searchWid">
                    <div>
                        <Link className="jeevansathi-logo" to="#">
                            <img height="100%" width="100%"  src="https://static.jeevansathi.com/images/jspc/commonimg/desktopLogo.svg"/>
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

                    <div className="srchform">
                        <ul>
                            <li className="d-flex">
                                <label>Search for</label>
                                <div className="srchField">
                                    <div className={"bordRigt wid50p "+(bride?"optActive":"")} onClick={()=>setBride(true)}>Bride</div>
                                    <div className={"wid50p "+(bride?"":"optActive")} onClick={()=>setBride(false)}>Groom</div>
                                </div>
                            </li>
                            <li className="d-flex pt38 sdsa">
                                <label>Age</label>
                                <div className="srchField">
                                    <div className="bordRigt wid50p text-start pl22" onClick={()=>setshowPop(1)}>21 years <i className="dropArrow"></i></div>
                                    <div className="wid50p text-start pl22" onClick={()=>setshowPop(2)}>35 years <i className="dropArrow"></i></div>
                                    {showPop==1?(
                                    <div className="dropBox width380 postionBox">
                                    <i className={"imgArrow religionIcon"}></i>
                                        <ul>
                                            {minAge.map((m1,index)=>(<li className="width38" key={index} onClick={()=>setshowPop(0)}>{m1}</li>))}
                                        </ul>
                                    </div>
                                    ):showPop==2?(
                                    <div className="dropBox width380 postionBox2">
                                        <ul>
                                            {minAge.map((m1,index)=>(<li className="width38" key={index} onClick={()=>setshowPop(0)}>{m1}</li>))}
                                        </ul>
                                    </div>
                                    ):""}
                                </div>
                            </li>
                            <li className="d-flex pt38 sdsa">
                                <label>Height</label>
                                <div className="srchField">
                                    <div className="bordRigt wid50p text-start pl22" onClick={()=>setshowPop(3)}>4' 0" (1.22 mts)<i className="dropArrow"></i></div>
                                    <div className="wid50p text-start pl22" onClick={()=>setshowPop(4)}>5' (2.13 mts) plus <i className="dropArrow"></i></div>
                                    {showPop==3?(
                                    <div className="dropBox width490 postionBox">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className="width156 border-0" key={index} onClick={()=>setshowPop(0)}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):showPop==4?(
                                    <div className="dropBox width490 postionBox2">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className="width156 border-0" key={index} onClick={()=>setshowPop(0)}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):""}
                                </div>
                            </li>
                            <li className="d-flex pt38 sdsa">
                                <label>Religion</label>
                                <div className="srchField">
                                    <div className="bordRigt wid50p text-start pl22" onClick={()=>setshowPop(3)}>4' 0" (1.22 mts)<i className="dropArrow"></i></div>
                                    <div className="wid50p text-start pl22" onClick={()=>setshowPop(4)}>5' (2.13 mts) plus <i className="dropArrow"></i></div>
                                    {showPop==3?(
                                    <div className="dropBox width490 postionBox">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className="width156 border-0" key={index} onClick={()=>setshowPop(0)}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):showPop==4?(
                                    <div className="dropBox width490 postionBox2">
                                        <ul>
                                            {heights.map((h1,index)=>(<li className="width156 border-0" key={index} onClick={()=>setshowPop(0)}>{h1}</li>))}
                                        </ul>
                                    </div>
                                    ):""}
                                </div>
                            </li>
                            
                        </ul>

                    </div>



                </div>
            </div>

           
        </div>
    )
               
}
export default SearchBar;