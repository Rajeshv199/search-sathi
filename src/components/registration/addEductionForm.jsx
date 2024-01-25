import React, {useState} from "react";

function AddEduction(){

    const[showPop,setShowPop] = useState(-1);
    const[eduction,setEduction] = useState("");
    const[country,setCountry] = useState("");
    const[state,setState] = useState("");

   
    let eductions=["Post-Graduation"," Graduation","Doctorate"];   
    let countries = ["Russia","Canada","China","US of America","Brazil","Australia","India","Argentina"," Kazakhstan","Algeria"];
    
    
    return(
        <div>
            <div className="fw-bold text-center">Add Education</div>
            <div className="eductForm mt-3">
                <label className="">Education</label> 
                <input type="text" placeholder={showPop===1?"Select Eduction":null} readOnly value={eduction} onClick={() =>setShowPop(1)}/> 
                {showPop===1?
                <React.Fragment>
                <i className={"imgArrow eductIcon"}></i>  
                <div className="edutionDrop">
                    <ul>
                        {eductions.map((c1,index)=><li onClick={() =>{setEduction(c1);setShowPop(-1)}} key={index}>{c1}</li>)}
                    </ul>
                </div> 
                </React.Fragment>
                :null}   
            </div>

            <div className="eductForm mt-3">
                <label className="">University/Institute</label> 
                <input type="text" placeholder=""  />                   
            </div>
            <div className="eductForm mt-3">
                <label className="">Country</label> 
                <input type="text" placeholder={showPop===2?"Select Country":null} readOnly value={country} onClick={() =>setShowPop(2)}/>    
                {showPop===2?
                <React.Fragment>
                <i className={"imgArrow eductIcon"}></i>  
                <div className="edutionDrop">
                    <ul>
                        {countries.map((c1,index)=><li onClick={() =>{setCountry(c1);setShowPop(-1)}} key={index}>{c1}</li>)}
                    </ul>
                </div> 
                </React.Fragment>
                :null}                
            </div>
            <div className="eductForm mt-3">
                <label className="">State</label> 
                <input type="text" placeholder={showPop===3?"Select State":null} readOnly value={state} onClick={() =>setShowPop(3)}/>
                {showPop===3?
                <React.Fragment>
                <i className={"imgArrow eductIcon"}></i>  
                <div className="edutionDrop">
                    <ul>
                        {countries.map((c1,index)=><li onClick={() =>{setState(c1);setShowPop(-1)}} key={index}>{c1}</li>)}
                    </ul>
                </div> 
                </React.Fragment>
                :null}                         
            </div>
        </div>
               
    );

}

export default AddEduction;

