import React, {useState,useEffect} from "react";
import {Switch, Route, Redirect,useHistory,useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from "../../footer/regi_footer";
import WhyRegister from "./whyRegister";
import YogJodiLogo from "../../image/YogJodiLogo.png"; 
import Profile from "../register_Form/profile_Form"; 
 
    
function ProfileDetails(){
    const history =  useHistory();
    // window.scrollTo(0,0);

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);
   
    const [showPop,setShowPop] = useState(false);
    const {state} = useLocation();

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYrs] = useState("");
    const [mothertongue, setMothertong] = useState("");
    const [religion, setRligion] = useState("");
    const [caste, setCaste] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [height, setHeight] = useState("");
    const [descriYrSelf, setDescriYrSelf] = useState("");
  
    function handlePop(val){
        setShowPop(val);
    }

    function handleSave(){
        history.push("/career");
        
    }
    function handleShowMore(){
        history.push({pathname:"/profiles",state:"2"});
    }

    useEffect(()=>{
       console.log(showPop);
    },0);

    let days = [];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let years = [];
    let date = new Date();
    let pastYear = date.getFullYear() - 20;
    for(let i=1;i<=31;i++) days.push(i);
    for(let j=pastYear-50;j<pastYear;j++) years.push(j);
    let langs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"]
    let religions=["Hindu","Muslim","Sikh","Christian","Buddhist","Jain","Parsi","Jewish","Bahai"];
    let mstatus=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    let heights = [];

    for(let i=0;i<10;i++){
        heights.push(`4' 0" (1.22 mts)`);
    }
    let data = state?state.takeData:null;
    // const{takeData} = state?state:null;

    return(
        <div className="proDetailBg" onClick={()=>setShowPop(true)}>
            <div className="pro-coverImg">
                <div className="profile-container">
                    <div className="proheader">
                        <div className="pro-jeevanLogo">
                            <Link to="/" className="ml-2"><img src={YogJodiLogo} /></Link>
                        </div>
                        <div className="liveChat-Help">
                            <span>LIVE CHAT</span>
                            <span>1-800-419-6299 (Toll Free)</span>
                        </div>
                    </div> 

                    <div className="proSection">
                        <div className="proSText">
                            <div className="reg-active">Profile Details</div>
                            <div>Career Details</div>
                            <div>Lifestyle & Family</div>
                            <div>Partner Basic Details</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-wid" >
                <div className="regi-info">Hi! {state?<span>{data.firstName+" "+data.middleName+" "+data.lastName}</span>:""} </div>
                <div className="pt-4 d-flex mt-2" >
                    <div className="reg-wid80">
                        
                       <Profile showPop={showPop    }/>
                    </div>
                    <WhyRegister/>                 
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
                 
    );

}

export default ProfileDetails;
