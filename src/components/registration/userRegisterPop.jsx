import React, {useState} from "react";
import {Switch, Route, Redirect,useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import LoginForm from '../login/user_login';


function UserRegister(){
    const [takeData,setTakeData] = useState({title:"",gmail:"",ISD:"+91",mobileNo:"",password:"",gender:""});
    const [errors,setErrors]= useState({});
    const [passwordShow,setPasswordShow]=useState(false);
    const [loginPop,setloginPop]=useState(false);
    const history =  useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let takeData1 = {...takeData};
        (takeData1[input.name] = input.value) ;
        setTakeData(takeData1);
        handleValidate(e);

    }

    function isValid(errors){
    let keys = Object.keys(errors);
    let count = keys.reduce((acc,curr)=>(errors[curr]?acc+1:acc),0);
    return count==0;
    }

    function handleValidate(e){
        let {currentTarget:input} = e;
        switch(input.name){
            case "title":
                errors.title = validateTitle(input.value);
                break;
            case "gmail":
                errors.gmail = validateGmail(input.value);
                break;
            case "mobileNo":
                errors.mobileNo = validateMob(input.value);
                break;
            case "password":
                errors.password = validatePasswrd(input.value);
                break;
            default:
                break;
        }
        setErrors(errors);
    }

    function validateAll(){
        let {title,gmail,mobileNo,password} = takeData;
        let errors={};
        errors.title = validateTitle(title);
        errors.gmail = validateGmail(gmail);
        errors.mobileNo = validateMob(mobileNo);
        errors.password = validatePasswrd(password);
        return errors;
    }
    function validateTitle(title){return !title?"Title is missing":""}
    function validateGmail(gmail){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         return !gmail?"Gmail is missing":gmail.match(validRegex)?"":"Not a valid Gmail"}
    function validateMob(mobileNo){
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        return !mobileNo?"Mobile No is missing":filter.test(mobileNo)&&mobileNo.length==10?"":"Not a valid number";
    }
    function validatePasswrd(password){return !password?"Password is missing":""}

    function handleSubmit(){
        let errors = validateAll();
        if(isValid(errors)){
            history.push({pathname:"/user_registration",state:{takeData}});
        }
        else {
            setErrors(errors);
        }
        
    }

    const titles= ["Self","Son","Daughter","Brother","Sister","Relative","Friend","Marriage Bureau"];

    const {title,gmail,mobileNo,password} = takeData;
    // console.log(errors);

    return(
            <div className="registerFields">
                <div >
                    <label>Create Profile For</label>
                    <select  className={errors&&errors.title?"inputBord":""} name="title" value={title} onChange={handleChange}>
                        <option disabled value="">Select</option>
                        {titles.map((t1,index) => (
                            <option key={index}>{t1}</option>
                        ))}
                    </select>
                    {/* <span className="showError">{errors&&errors.title}</span> */}
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="gmail" className={errors&&errors.gmail?"inputBord":""} name="gmail" value={gmail} placeholder="abc@gmail.com" onChange={handleChange} autoComplete="off"/>
                    {/* <span className="showError">{errors&&errors.gmail}</span> */}
                </div>
                <div >
                    <label>Mobile No.</label>
                    <div className={"d-flex "+(errors&&errors.mobileNo?"inputBord":"")}>
                        <div className="countryCode">
                            <select>
                                <option>+ 91</option>
                                <option>+ 61</option>
                                <option>+ 86</option>
                            </select>
                        </div>
                        <input type="number"  name="mobileNo" value={mobileNo} className="mobileText" placeholder="" onChange={handleChange}/>
                       
                    </div>
                    {/* <span className="showError">{errors&&errors.mobileNo}</span> */}
                </div>
                <div >
                    <label>Create Password</label>
                    <input type="password" name="password" className={errors&&errors.password?"inputBord":""} value={password} placeholder="" onChange={handleChange}/>
                    {/* <span className="showError">{errors&&errors.password}</span> */}
                </div>
                <div className="register_Button" onClick={()=>handleSubmit()}> Register Free</div>
                <div className="register_Tmc"> 
                    By clicking on 'Register Free', you confirm that you accept the <span>Terms of Use </span>and <span>Privacy Policy</span>   
                </div>
                <div className="login_Button" onClick={()=>setloginPop(true)}> Login</div>

                <div className="">
                    {loginPop &&
                    <div className="popup-box">
                        <div className="box">
                            <span className="close-icon" onClick={()=>setloginPop(false)}></span>
                            <LoginForm/>
                        </div>
                    </div>
                }
                </div>
            </div>
    );

}

export default UserRegister;

