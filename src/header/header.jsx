import React, {Component} from "react";
import {Link} from "react-router-dom";
import BrowseContent from "./browseContent";
import LoginForm from '../components/login/user_login';

class Header extends Component{
    state={
        showList:1,scrolled:null,isOpen:false,popupView:0,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
    listenToScroll=()=>{
        let s1 = {...this.state};
        s1.scrolled = document.documentElement.scrollTop
        this.setState(s1);
        
      }
      handleView=(no)=>{
        let s1 = {...this.state};
        s1.showList=no;
        this.setState(s1);
    }
    togglePopup=()=>{
        let s1={...this.state};
        s1.popupView=1;
        !s1.isOpen?s1.isOpen=true:s1.isOpen=false;
        this.setState(s1);
    }
    render(){
        const{ showList,scrolled,isOpen,popupView} = this.state;
        
        return(
            <div className="header--modifier text-white">
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
                                        <div className="mother_Tongue" onMouseEnter={()=>this.handleView(1)}>Mother Tongue</div>
                                        <div className="caste" onMouseEnter={()=>this.handleView(2)}>Caste</div>
                                        <div className="religion" onMouseEnter={()=>this.handleView(3)}>Religion</div>
                                        <div className="city" onMouseEnter={()=>this.handleView(4)}>City</div>
                                        <div className="occupation" onMouseEnter={()=>this.handleView(5)}>Occupation</div>
                                        <div className="state" onMouseEnter={()=>this.handleView(6)}>State</div>
                                        <div className="NRI" onMouseEnter={()=>this.handleView(7)}>NRI</div>
                                        <div className="college" onMouseEnter={()=>this.handleView(8)}>College</div>
                                    </div>
                                    <div className="browseContent">
                                        <BrowseContent showList={showList}/>
                                     </div>
                                </div>
                            </li>
                            <li className="search-ml" >
                                <div className="search-menu">SEARCH<i className="fa-solid fa-chevron-down fa-sm "></i></div>
                                <div className="search-list">
                                    <div>Search</div>
                                    <div>Search by Profile ID</div>
                                </div>
                            </li>
                            <li className="search-ml">
                                <Link to="/features/help">HELP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-navbar--second">
                    <div className={"signupMenu " + (scrolled>400?"srolled":"")}>
                        <div className="loginPart" onClick={this.togglePopup}>
                            LOGIN    
                        </div>
                        <Link to="/user_registration">
                            <div className="registerPart" > REGISTER FREE</div>
                        </Link>
                        

                    </div>
                </div>
                <div className="">
                    {isOpen && popupView==1&&
                    <div className="popup-box">
                        <div className="box">
                            <span className="close-icon" onClick={this.togglePopup}></span>
                            <LoginForm/>
                        </div>
                    </div>
                }
                </div>

                


            </div>
              
        );
    }

}
export default Header;