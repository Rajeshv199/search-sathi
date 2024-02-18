import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './style.css';

export default function RefineMatches() {

    const[findMatches,setFindMatches] = useState(1);

   
    return (
    <div>
        <h4 className="py-4 px-3">Refind Matches</h4>
        <div className="d-flex">
            <div className="leftDiv">
                <button className={findMatches===1 ?"bg-white":null} onClick={()=>setFindMatches(1)}>Type of Matches</button>
                <button className={findMatches===2 ?"bg-white":null} onClick={()=>setFindMatches(2)}>Family based out of</button>
                <button className={findMatches===3 ?"bg-white":null} onClick={()=>setFindMatches(3)}>Profile posted by</button>
                <button className={findMatches===4 ?"bg-white":null} onClick={()=>setFindMatches(4)}>Activity on site</button>
                <button className={findMatches===5 ?"bg-white":null} onClick={()=>setFindMatches(5)}>Religion</button>
                <button className={findMatches===6 ?"bg-white":null} onClick={()=>setFindMatches(6)}>Mother Tongue</button>
                <button className={findMatches===7 ?"bg-white":null} onClick={()=>setFindMatches(7)}>Caste Group</button>
                <button className={findMatches===8 ?"bg-white":null} onClick={()=>setFindMatches(8)}>Caste Subcaste</button>
                <button className={findMatches===9 ?"bg-white":null} onClick={()=>setFindMatches(9)}>Country</button>
                <button className={findMatches===10?"bg-white":null} onClick={()=>setFindMatches(10)}>City</button>
                <button className={findMatches===11?"bg-white":null} onClick={()=>setFindMatches(11)}>Income</button> 
                <button className={findMatches===12?"bg-white":null} onClick={()=>setFindMatches(12)}>Employee In</button>
                <button className={findMatches===13?"bg-white":null} onClick={()=>setFindMatches(13)}>Education</button>
                <button className={findMatches===14?"bg-white":null} onClick={()=>setFindMatches(14)}>Occupation</button>
                <button className={findMatches===15?"bg-white":null} onClick={()=>setFindMatches(15)}>Photo</button>
                <button className={findMatches===16?"bg-white":null} onClick={()=>setFindMatches(16)}>Height</button>
                <button className={findMatches===17?"bg-white":null} onClick={()=>setFindMatches(17)}>Age</button>
                <button className={findMatches===18?"bg-white":null} onClick={()=>setFindMatches(18)}>Diet</button>
                <button className={findMatches===19?"bg-white":null} onClick={()=>setFindMatches(19)}>Marital Status</button>
                <button className={findMatches===20?"bg-white":null} onClick={()=>setFindMatches(20)}>Have Children</button><br/><br/><br/>
            </div>
            <div className="righttDiv">

                <div className="text-end"><button className="text-danger border-0 bg-white fw-bold">Reset</button></div>
                {/* Type of Matches */}
                {findMatches===1 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Family based out of */}
                {findMatches===2 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Profile posted by */}
                {findMatches===3 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Activity on site */}
                {findMatches===4 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Religion */}
                {findMatches===5 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Mother Tongue */}
                {findMatches===6 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Caste Group */}
                {findMatches===7 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Caste Subcaste */}
                {findMatches===8 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Country */}
                {findMatches===9 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* City */}
                {findMatches===10 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Income */}
                {findMatches===11 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Employee In */}
                {findMatches===12 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>              
                    </label>
                </div>}
                {/* Education */}
                {findMatches===13 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Occupation */}
                {findMatches===14 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Photo */}
                {findMatches===15 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Height */}
                {findMatches===16 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>       
                    </label>
                </div>}
                {/* Age */}
                {findMatches===17 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Diet */}
                {findMatches===18 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Marital Status */}
                {findMatches===19 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                {/* Have Children */}
                {findMatches===20 &&
                    <div className="matchesinput">
                    <label>
                        <input type="checkbox" />
                        <span className="px-2">All</span>
                    </label>
                </div>}
                
                
            
            </div>

        </div>
        <div className="matchesBtn"> 
            <button className="">Show Matches</button>
        </div>

    </div>
)
}