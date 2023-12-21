import React, {useState} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import SlideMenu from "./slideMenu";
import UserRegisterPop from "../registration/userRegisterPop";


function UserLogin(){
    const [passwordShow,setPasswordShow]=useState(false);
    const [slideView,setSlideView]=useState(false);
    const [registerPop,setregisterPop]=useState(false);


    const handlePasswordView=()=>{
        passwordShow?setPasswordShow(false):setPasswordShow(true);
    }

    const handleSlideView=(value)=>{
        setSlideView(value);
    }

    // function handleRegister(){
    // }

    return(
        <div >
            <div className="loginView">
                <div className="loginFrm">
                    <div className="loginTxt">Login to continue..</div>
                    <div className="mt-3">
                        <div className="loginInput">
                            <input type="text" name="email" placeholder="Email ID/Mobile Number" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="loginInput">
                            <input type="password" name="password" placeholder="Password" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="text-center mt-4">Forgot Password</div>
                    <div  className="">
                        <button className="loginBtns">LOGIN</button>
                    </div>
                </div>
                <div className="loginFrm2">
                    <p>New on Jeevansathi?</p>
                    <div className="mt-3">
                        <button className="registerBtn" onClick={()=>setregisterPop(true)}>REGISTER FREE</button>
                    </div>
                </div>
            </div>

            <div>
                {registerPop&&
                <div className="popup-box">
                    <div className="box2">
                        <span className="close-icon" onClick={()=>setregisterPop(false)} ></span>
                        <UserRegisterPop/>
                    </div>
                </div>
                }
                </div>
            
            

            <div className="loginViewMob">
                <div>
                    <div className={slideView?"hamburger":"hamburgerDis"}>
                        <SlideMenu />
                    </div>
                    <div className={slideView?"slide-Container":"slide-Container2"} onClick={()=>handleSlideView(false)}></div>

                </div>
                <div className="login-header">
                    <div className="loginFrbar" onClick={()=>handleSlideView(true)}> <img width="100%" height="100%" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDEwSDFDMC43MzQ3ODQgMTAgMC40ODA0MyAxMC4xMDU0IDAuMjkyODkzIDEwLjI5MjlDMC4xMDUzNTcgMTAuNDgwNCAwIDEwLjczNDggMCAxMUMwIDExLjI2NTIgMC4xMDUzNTcgMTEuNTE5NiAwLjI5Mjg5MyAxMS43MDcxQzAuNDgwNDMgMTEuODk0NiAwLjczNDc4NCAxMiAxIDEySDExQzExLjI2NTIgMTIgMTEuNTE5NiAxMS44OTQ2IDExLjcwNzEgMTEuNzA3MUMxMS44OTQ2IDExLjUxOTYgMTIgMTEuMjY1MiAxMiAxMUMxMiAxMC43MzQ4IDExLjg5NDYgMTAuNDgwNCAxMS43MDcxIDEwLjI5MjlDMTEuNTE5NiAxMC4xMDU0IDExLjI2NTIgMTAgMTEgMTBaTTEgMkgxOUMxOS4yNjUyIDIgMTkuNTE5NiAxLjg5NDY0IDE5LjcwNzEgMS43MDcxMUMxOS44OTQ2IDEuNTE5NTcgMjAgMS4yNjUyMiAyMCAxQzIwIDAuNzM0Nzg0IDE5Ljg5NDYgMC40ODA0MyAxOS43MDcxIDAuMjkyODkzQzE5LjUxOTYgMC4xMDUzNTcgMTkuMjY1MiAwIDE5IDBIMUMwLjczNDc4NCAwIDAuNDgwNDMgMC4xMDUzNTcgMC4yOTI4OTMgMC4yOTI4OTNDMC4xMDUzNTcgMC40ODA0MyAwIDAuNzM0Nzg0IDAgMUMwIDEuMjY1MjIgMC4xMDUzNTcgMS41MTk1NyAwLjI5Mjg5MyAxLjcwNzExQzAuNDgwNDMgMS44OTQ2NCAwLjczNDc4NCAyIDEgMlpNMTkgNUgxQzAuNzM0Nzg0IDUgMC40ODA0MyA1LjEwNTM2IDAuMjkyODkzIDUuMjkyODlDMC4xMDUzNTcgNS40ODA0MyAwIDUuNzM0NzggMCA2QzAgNi4yNjUyMiAwLjEwNTM1NyA2LjUxOTU3IDAuMjkyODkzIDYuNzA3MTFDMC40ODA0MyA2Ljg5NDY0IDAuNzM0Nzg0IDcgMSA3SDE5QzE5LjI2NTIgNyAxOS41MTk2IDYuODk0NjQgMTkuNzA3MSA2LjcwNzExQzE5Ljg5NDYgNi41MTk1NyAyMCA2LjI2NTIyIDIwIDZDMjAgNS43MzQ3OCAxOS44OTQ2IDUuNDgwNDMgMTkuNzA3MSA1LjI5Mjg5QzE5LjUxOTYgNS4xMDUzNiAxOS4yNjUyIDUgMTkgNVoiIGZpbGw9IiM3Njg0OTMiLz4KPC9zdmc+Cg=="/></div>
                    <div className="login-LogoImg">
                        <Link to="/"><img width="100%" src="https://static.jeevansathi.com/js_static/_next/static/images/jeevansathi-icon-450441e73ce54060c3241fe9d389d502.svg" /></Link>
                    </div>
                    <div className="serchbar">
                        <img width="100%" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjcxIDE5LjI5TDE3IDE1LjYxQzE4LjQ0MDEgMTMuODE0NCAxOS4xMzc1IDExLjUzNTMgMTguOTQ4OCA5LjI0MTNDMTguNzYwMSA2Ljk0NzMgMTcuNjk5NyA0LjgxMjc4IDE1Ljk4NTUgMy4yNzY2NEMxNC4yNzE0IDEuNzQwNSAxMi4wMzM4IDAuOTE5NTA2IDkuNzMyOTUgMC45ODI0NjZDNy40MzIwNyAxLjA0NTQzIDUuMjQyNzUgMS45ODc1NiAzLjYxNTE3IDMuNjE1MTRDMS45ODc1OSA1LjI0MjcyIDEuMDQ1NDYgNy40MzIwMyAwLjk4MjQ5NyA5LjczMjkyQzAuOTE5NTM3IDEyLjAzMzggMS43NDA1MyAxNC4yNzE0IDMuMjc2NjcgMTUuOTg1NUM0LjgxMjgxIDE3LjY5OTcgNi45NDczMyAxOC43NjAxIDkuMjQxMzMgMTguOTQ4OEMxMS41MzUzIDE5LjEzNzUgMTMuODE0NCAxOC40NDAxIDE1LjYxIDE3TDE5LjI5IDIwLjY4QzE5LjM4MyAyMC43NzM3IDE5LjQ5MzYgMjAuODQ4MSAxOS42MTU0IDIwLjg5ODlDMTkuNzM3MyAyMC45NDk3IDE5Ljg2OCAyMC45NzU4IDIwIDIwLjk3NThDMjAuMTMyIDIwLjk3NTggMjAuMjYyNyAyMC45NDk3IDIwLjM4NDYgMjAuODk4OUMyMC41MDY1IDIwLjg0ODEgMjAuNjE3MSAyMC43NzM3IDIwLjcxIDIwLjY4QzIwLjg5MDMgMjAuNDkzNSAyMC45OTEgMjAuMjQ0MyAyMC45OTEgMTkuOTg1QzIwLjk5MSAxOS43MjU3IDIwLjg5MDMgMTkuNDc2NSAyMC43MSAxOS4yOVpNMTAgMTdDOC42MTU1NiAxNyA3LjI2MjE4IDE2LjU4OTUgNi4xMTEwMyAxNS44MjAzQzQuOTU5ODkgMTUuMDUxMSA0LjA2MjY4IDEzLjk1NzkgMy41MzI4NyAxMi42Nzg4QzMuMDAzMDYgMTEuMzk5NyAyLjg2NDQzIDkuOTkyMjMgMy4xMzQ1MyA4LjYzNDM2QzMuNDA0NjMgNy4yNzY1IDQuMDcxMzEgNi4wMjkyMiA1LjA1MDI4IDUuMDUwMjVDNi4wMjkyNSA0LjA3MTI4IDcuMjc2NTMgMy40MDQ2IDguNjM0MzkgMy4xMzQ1QzkuOTkyMjYgMi44NjQ0IDExLjM5OTcgMy4wMDMwMyAxMi42Nzg4IDMuNTMyODRDMTMuOTU3OSA0LjA2MjY1IDE1LjA1MTEgNC45NTk4NiAxNS44MjAzIDYuMTExQzE2LjU4OTUgNy4yNjIxNSAxNyA4LjYxNTUzIDE3IDEwQzE3IDExLjg1NjUgMTYuMjYyNSAxMy42MzcgMTQuOTQ5OCAxNC45NDk3QzEzLjYzNyAxNi4yNjI1IDExLjg1NjUgMTcgMTAgMTdaIiBmaWxsPSIjNzY4NDkzIi8+Cjwvc3ZnPgo="/>
                    </div>
                </div>
                
                <div>
                    <div className="m-4">
                        <div className="imputMb">
                            <input type="text" name="email" placeholder="Email Id / Primary Mobile Number" autoComplete="off"/>
                        </div>
                        <div className="imputMb mt-4">
                            <input type={passwordShow?"text":"password"} name="email" placeholder="Password"/>
                            <button className="passwordShow" onClick={handlePasswordView}>
                                <img src={passwordShow?"data:image/svg+xml;base64,ICAgIDxzdmcKICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICB3aWR0aD0iMTYiCiAgICAgIGhlaWdodD0iMTYiCiAgICAgIHZpZXdCb3g9IjAgMCAyNCAyNCIKICAgICAgZmlsbD0ibm9uZSIKICAgICAgc3Ryb2tlPSIjNzY4NDkzIgogICAgICBzdHJva2Utd2lkdGg9IjMiCiAgICAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgIDxwYXRoIGQ9Ik0xIDEyczQtOCAxMS04IDExIDggMTEgOC00IDgtMTEgOC0xMS04LTExLTh6Ij48L3BhdGg+CiAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiPjwvY2lyY2xlPgogICAgPC9zdmc+CiA=":"data:image/svg+xml;base64,CiAgICA8c3ZnCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgd2lkdGg9IjE2IgogICAgICBoZWlnaHQ9IjE2IgogICAgICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgICAgIGZpbGw9Im5vbmUiCiAgICAgIHN0cm9rZT0iIzc2ODQ5MyIKICAgICAgc3Ryb2tlLXdpZHRoPSIzIgogICAgICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICA8cGF0aCBkPSJNMTcuOTQgMTcuOTRBMTAuMDcgMTAuMDcgMCAwIDEgMTIgMjBjLTcgMC0xMS04LTExLThhMTguNDUgMTguNDUgMCAwIDEgNS4wNi01Ljk0TTkuOSA0LjI0QTkuMTIgOS4xMiAwIDAgMSAxMiA0YzcgMCAxMSA4IDExIDhhMTguNSAxOC41IDAgMCAxLTIuMTYgMy4xOW0tNi43Mi0xLjA3YTMgMyAwIDEgMS00LjI0LTQuMjQiPjwvcGF0aD4KICAgICAgPGxpbmUgeDE9IjEiIHkxPSIxIiB4Mj0iMjMiIHkyPSIyMyI+PC9saW5lPgogICAgPC9zdmc+Cg=="}/> 
                            </button>
                        </div>
                        <div className="forgoPass text-end mt-3"><Link to="">Forgot Password?</Link></div>
                    </div>
                    
                    <div className="text-center">
                        <button className="loginMbBtn">Login</button>
                    </div>

                    <div className="text-center mt-4">
                        <button className="logingogle">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg>
                            <span className="pl-2">Continue using Google</span>
                        </button>
                    </div>
                    <div className="regMob text-center">
                        <span>New to Jeevansathi?</span>
                        <Link to="/">Register Now!</Link>
                    </div>
                </div>
            </div>

           
        </div>
    );

}

export default UserLogin;

