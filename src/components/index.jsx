import React, {Component} from "react";
import {Link} from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header/header";
import MatrimonialFilter from "./matrimonialFilter";
import Membership from "./membership";
import Footer from "../footer/footer";
import UserRegisterPop from "../components/registration/userRegisterPop";
import HeaderMobile from "../header/headerMobile";
import findWorkImg1 from "../image/findWorkImg1.png";
import findWorkImg2 from "../image/findWorkImg2.png";
import findWorkImg3 from "../image/findWorkImg3.png";
import mobileView from "../image/mobileView.png";
import LoginForm from './login/user_login';




class index extends Component{
    state={ showMatrimonial:0,showMatrialMb:-1,
        motherTongue:[{name:"Bihari",link:"#"},{name:"Bengali",link:"#"},{name:"Hindi Delhi",link:"#"},{name:"Hindi",link:"#"},{name:"Gujarati",link:"#"},{name:"Kannada",link:"#"},{name:"Malayalam",link:"#"},{name:"Marathi",link:"#"},{name:"Oriya",link:"#"},{name:"Punjabi",link:"#"},{name:"Rajasthani",link:"#"},{name:"Tamil",link:"#"},{name:"Telugu",link:"#"},{name:"Hindi",link:"#"},{name:"Hindi MP",link:"#"},{name:"Konkani",link:"#"},{name:"Himachali",link:"#"},{name:"Haryanvi",link:"#"},{name:"Assamese",link:"#"},{name:"Kashmiri",link:"#"},{name:"Sikkim Nepali",link:"#"},{name:"Tulu",link:"#"}],
        castes:[{name:"Aggarwal",link:"#"}, {name:"Kanyakubj Brahmin",link:"#"}, {name:"Gaur Brahmin",link:"#"}, {name:"Brahmin",link:"#"}, {name:"Jat",link:"#"}, {name:"Kayastha",link:"#"}, {name:"Khatri",link:"#"},{name:"Kshatriya",link:"#"}, {name:"Maratha",link:"#"}, {name:"Rajput",link:"#"}, {name:"Sindhi",link:"#"}, {name:"Sunni",link:"#"}, {name:"Arora",link:"#"},{name:"Shwetamber",link:"#"}, {name:"Yadava",link:"#"}, {name:"Bania",link:"#"},{name:"Scheduled Caste",link:"#"}, {name:"Digamber",link:"#"}, {name:"Sikh Jat",link:"#"},{name:"Gupta",link:"#"}, {name:"Teli",link:"#"}, {name:"Vaishnav",link:"#"}, {name:"Kurmi kshatriya",link:"#"}],
        religion:[{name:"Hindu",link:"#"},{name:"Muslim",link:"#"},{name:"Christian",link:"#"},{name:"Sikh",link:"#"},{name:"Buddhist",link:"#"},{name:"Jain",link:"#"},{name:"Bahai",link:"#"}],
        cities:[ {name:"New Delhi",link:"#"}, {name:"Seattle",link:"#"}, {name:"Panvel",link:"#"}, {name:"Navi Mumbai",link:"#"}, {name:"Los Angeles",link:"#"}, {name:"Illinois",link:"#"}, {name:"Denver",link:"#"}, {name:"Delhi",link:"#"},{name:"Mumbai",link:"#"}, {name:"Kolkata",link:"#"},{name:"Chennai",link:"#"}, {name:"Bangalore",link:"#"}, {name:"Pune",link:"#"}, {name:"Ahmedabad",link:"#"}, {name:"Hyderabad",link:"#"}, {name:"Lucknow",link:"#"}, {name:"Chandigarh",link:"#"}, {name:"Nagpur",link:"#"}, {name:"Jaipur",link:"#"}, {name:"Noida",link:"#"}, {name:"Indore",link:"#"}],
        occupation:[ {name:"IT Software",link:"#"}, {name:"Teacher",link:"#"}, {name:"CA Accountant",link:"#"}, {name:"Businessman",link:"#"}, {name:"Doctors Nurse",link:"#"}, {name:"Govt. Services",link:"#"} , {name:"Lawyers",link:"#"}, {name:"Defence",link:"#"}, {name:"IAS",link:"#"}, {name:"Cyber Network Security",link:"#"} , {name:"Engineers",link:"#"}, {name:"Hotels Hospitality Professional",link:"#"}, {name:"NGO Social Services",link:"#"}, {name:"Nurse",link:"#"}, {name:"Police",link:"#"} ],
        states:[ {name:"Maharashtra",link:"#"}, {name:"Uttar Pradesh",link:"#"}, {name:"Karnataka",link:"#"}, {name:"Andhra Pradesh",link:"#"}, {name:"Tamil Nadu",link:"#"}, {name:"West Bengal",link:"#"}, {name:"Madhya Pradesh",link:"#"}, {name:"Gujarat",link:"#"}, {name:"Haryana",link:"#"}, {name:"Bihar",link:"#"}, {name:"Kerala",link:"#"}, {name:"Rajasthan",link:"#"}, {name:"Punjab",link:"#"}, {name:"Orissa",link:"#"},{name: "Assam",link:"#"},{name:"jammu & Kashmir",link:"#"} , {name:"Himachal Pradesh",link:"#"}, {name:"Jharkhand",link:"#"}, {name:"Chhattisgarh",link:"#"}, {name:"Uttarakhand",link:"#"}, {name:"Lakshadweep",link:"#"}],
        NRI:[{name:"NRI",link:"#"}, {name:"United States",link:"#"}, {name:"Canada",link:"#"} , {name:"United Kingdom",link:"#"}, {name:"Australia",link:"#"}, {name:"France",link:"#"}, {name:"Italy",link:"#"}, {name:"Netherlands",link:"#"}, {name:"Saudi Arabia",link:"#"}, {name:"Spain",link:"#"}, {name:"Sweden",link:"#"}, {name:"Switzerland",link:"#"}],
        colleges:[ {name:"ICAI",link:"#"}, {name:"NIT",link:"#"}, {name:"ISB",link:"#"}, {name:"IIIT",link:"#"}, {name:"IIM",link:"#"}, {name:"IIT",link:"#"}],
        matrimonial:["Mother Tongue","Caste","Religion","City","Occupation","State","NRI","College"],
        successStoryList:[
                {name:"Aman & Pooja",img:"https://imagecdn.jeevansathi.com/22201/1/444021205-1612598427.jpg"},{name:"Neelesh & Parul ",img:"https://imagecdn.jeevansathi.com/22112/14/442254079-1612080006.jpg"},{name:"Mayank & Suneeta",img:"https://imagecdn.jeevansathi.com/22112/17/442257799-1612080012.jpg"},
                {name:"Gagan & Jaya",img:"https://imagecdn.jeevansathi.com/22267/1/445341677-1612944013.jpg"},{name:"Dipesh & Divya ",img:"https://imagecdn.jeevansathi.com/22115/5/442305857-1612080018.jpg"},{name:"Nikit & Nimisha ",img:"https://imagecdn.jeevansathi.com/21956/14/439134849-1611216077.jpg"},
                {name:"Naveen & Soniya ",img:"https://imagecdn.jeevansathi.com/22667/14/453354629-1615190452.jpg"},{name:"Vishal & Isha",img:"https://imagecdn.jeevansathi.com/21217/8/424348367-1607328093.jpg"},{name:"Pranit & Anjani ",img:"https://imagecdn.jeevansathi.com/22568/7/451367351-1614585699.jpg"}
            ],
        registerPop:false,loginpop:false,

    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
      }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
      }
    listenToScroll=()=>{
        let s1 = {...this.state};
        s1.scrolled = document.documentElement.scrollTop;
        this.setState(s1);
    }
    
    handleMatrimonial=(index)=>{
        let s1 = {...this.state};
        s1.showMatrimonial=index;
        this.setState(s1);
    }
    handleShowMb=(index)=>{
        let s1 = {...this.state};
        s1.showMatrialMb=s1.showMatrialMb==index?-1:index;
        this.setState(s1);
    }
    handleResisterPop=(value)=>{
        let s1 = {...this.state};
        !s1.registerPop?s1.registerPop=true:s1.registerPop=false;
        s1.loginpop=false;
        this.setState(s1);
    }
    handelLoginpop=()=>{
        let s1={...this.state};
        !s1.loginpop?s1.loginpop=true:s1.loginpop=false;
        s1.registerPop = false;
        this.setState(s1);
    }
    render(){
        const {showMatrimonial,showMatrialMb,scrolled,motherTongue,castes,religion,cities,occupation,states,NRI,colleges,matrimonial,successStoryList,registerPop,loginpop} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 1000,
          };

        // console.log(scrolled);

        return(
            <div className="">
                <div className="homePage">
                    <header className="header-container">
                        <Header/>
                    </header>
                    <div className="bgImage"></div>
                        <div className="firstBlock">
                            <div className="looking-Container">
                                <div className="looking-text">
                                    <div className="nowChatForFree">Now, chat for free!</div>
                                    <div className="isLooking">Finding your perfect match just became easier</div>
                                </div>
                                <div className="">
                                    <button className="registerFreeBtn" onClick={this.handleResisterPop}>Register Free</button>
                                </div>
                                
                            </div>

                            <div>
                            <div className="homeContainer">
                                <div className="main-benifit">
                                    <div className="my-3">
                                        <div className="moreThan">MORE THAN 20 YEARS OF</div>
                                        <div className="bringingPeople">Bringing People <span>Together</span> </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="infoImg ImgPosition"></div>
                                            <div className="pt-3">100% Manually Screened Profiles</div>
                                            <div className="underline"></div>
                                            <div className="textmore">Search by location, community, profession & more from lakhs of active profiles</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="infoImg ImgPosition2"></div>
                                            <div className="pt-3">Verification by Personal Visit</div>
                                            <div className="underline"></div>
                                            <div className="textmore">Special listing of profiles verified by our agents through personal visits</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="infoImg ImgPosition3"></div>
                                            <div className="pt-3">Control over Privacy</div>
                                            <div className="underline"></div>
                                            <div className="textmore">Restrict unwanted access to contact details & photos/videos</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="featuresSection">
                                    <div className="featuresSection_body">
                                        <header className="featuresSection__Header">
                                            <h5 className="FeaturesSection__SubTitle">Meet From Home</h5>
                                            <h2 className="featuresSection__Title">Impress them Over the <span>Distance</span></h2>
                                        </header>

                                        <div className="featuresSection-List">
                                            <Link to="#" className={scrolled<=1000?"jvlist1":""}>
                                                <h3>Yogjodi Match Hour</h3>
                                                <p>Register to join an online event to connect with members of your community in a short time</p>
                                            </Link>
                                            <Link to="#" className={scrolled>1000 && scrolled<1500?"jvlist2":""}>
                                                <h3>Voice & Video Calling</h3>
                                                <p>Enjoy secure conversations using our voice & video calling services without revealing your number</p>
                                            </Link>
                                            <Link to="#" className={scrolled>1500?"jvlist3":""}>
                                                <h3>Introducing Video Profiles</h3>
                                                <p>Stand out amongst others and engage faster! Introduce yourself by adding a video to your profile</p>
                                            </Link>
                                            
                                        </div>

                                    </div>
                                    <div className="featuresSection-Images">
                                        <div className="featuresSection--Images--Wrapper">
                                            <img className="featuresSection--Images--Wrapper--img" src="https://www.jeevansathi.com/images/jspc/featuresPromotion/match-hour.svg"/>
                                        </div>
                                        <div className="featuresSection--Images--Wrapper">
                                            <img className="featuresSection--Images--Wrapper--img--Wrapper" src="https://www.jeevansathi.com/images/jspc/featuresPromotion/voice-call.svg"/>
                                        </div>
                                        <div className="featuresSection--Images--Wrapper">
                                            <img className="featuresSection--Images--Wrapper--img" src="https://www.jeevansathi.com/images/jspc/featuresPromotion/video-profile.svg"/>
                                        </div>
                                            
                                    </div>

                                   
                                </div>
                                <div className="main-benifit">
                                    <h2>
                                        <div className="moreThan">THREE SIMPLE STEPS TO</div>
                                        <div className="featuresSection__Title">Find the <span> One for You</span></div>
                                    </h2>
                                    <div className="row">
                                        <div className="col-4 pt-4">
                                            <div className="findWorkImg img-postion"></div>
                                            <div className="findWorkTxt m-0"><span>1. </span>Define Your Partner Preferences</div>
                                        </div>
                                        <div className="col-4 pt-4">
                                            <div className="findWorkImg img-postion2"></div>
                                            <div className="findWorkTxt"><span>2. </span>Browse Profiles</div>
                                        </div>
                                        <div className="col-4 pt-4">
                                            <div className="findWorkImg img-postion3"></div>
                                            <div className="findWorkTxt"><span>3. </span>Send Interests & Connect</div>
                                        </div>
                                        <div className="text-center pt-4">
                                            <button className="findBottom">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="membershipPlans">
                                    <h3><div className="membership-Title"><span>Membership</span> Plans</div></h3>
                                    <div className="membership-Txt">Upgrade your plan as per your customized requirements. With a paid membership, you can seamlessly connect with your prospects and get more responses. Here are some key benefits:</div>
                                    <div className="membership">
                                        <Membership/>
                                    </div>
                                </div>
                                <div className="bgBlue"></div>

                                <div className="exclusivePad">
                                    <div className="exclusiveImage">
                                        <h2 className="text-center py-4">
                                            <div className="moreThan pb-1">PERSONALISED MATCH-MAKING SERVICE</div>
                                            <div className="featuresSection__Title">Introducing <span>Exclusive</span></div>
                                            <bottom className="exclusiveBtn">EXCLUSIVE</bottom>
                                        </h2>            
                                    </div>
                                    <div className="disp-flex">
                                        <div>
                                            <div className="d-flex text-center pb-2">
                                                <div className="materialIcons pickPeople"></div>
                                                <div className="exclusiveMeet">Meet Your Relationship Manager</div>
                                            </div>
                                            <div className="txtMore">Connect with our highly experienced advisor who manages your profile.</div>
                                        </div>
                                        <div className="divideSize"></div>
                                        <div>
                                            <div className="d-flex text-center pb-2">
                                                <div className="materialIcons pickTune"></div>
                                                <div className="exclusiveMeet">Communicate your preferences</div>
                                            </div>
                                            <div className="txtMore">Consultation to understand your expectations in a prospective partner.</div>
                                        </div>
                                        <div className="divideSize"></div>
                                        <div>
                                            <div className="d-flex text-center pb-2">
                                                <div className="materialIcons pickprofile"></div>
                                                <div className="exclusiveMeet">Choose from handpicked profiles</div>
                                            </div>
                                            <div className="txtMore">We shortlist profiles matching your criteria for offline interactions.</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="successStory">
                                   <div className="storyMatched">
                                        <h3 className="my-3">
                                            <div className="moreThan">LAKHS OF HAPPY COUPLES</div>
                                            <div className="featuresSection__Title">Matched by <span> Yogjodi</span></div>
                                        </h3>
                                   </div> 
                                   <div className="storySlick">
                                   <Slider {...settings}>
                                        {successStoryList.map((item,index) => (
                                            <div className="slick-current" key={index}>
                                                <div className="slick-cloned">
                                                    <div className="storyList" style={{backgroundImage:`radial-gradient(50% 114%, rgba(255, 255, 255, 0) 35%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(rgba(255, 255, 255, 0.5) 16%, rgba(0, 0, 0, 0.7) 76%), url("${item.img}")`}}>
                                                        <div className="pos_abs">
                                                            <div className="story-Name">{item.name}</div>
                                                            <div className="lineClass"></div>
                                                            <div className="marriageDate">MARRIAGE DATE 01, JANUARY 2021</div>
                                                        </div>  
                                                        <div className="storyDetails">
                                                            <div className="fw-bold">{item.name}</div>
                                                            <div className="storyDesc">i am satisfied with Yogjodi.com for bringing my better half in my life</div>
                                                            <Link to="#">
                                                                <div className="viewMore">
                                                                    <div>View More</div>
                                                                    <div className="materialIcons iconView"></div>
                                                                    
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>  
                                                </div>  
                                            </div>
                                        ))}
                                    </Slider>
                                   </div>
                                </div>

                                <div className="connectApp">
                                    <div className="connectApp-Txt">
                                        <h3 className="my-3">
                                            <div className="moreThan">STAY CONNECTED WITH</div>
                                            <div className="featuresSection__Title">Yogjodi Apps</div>
                                        </h3>
                                        <div className="pb-3">Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment.</div>
                                        <div className=" text-center py-2">
                                            <img width={100} src="https://miro.medium.com/v2/resize:fit:405/1*k0h04CRy0j8MbBbqsodGAA.png" />
                                        </div>  
                                        <div><Link to="#">Click here</Link>  <span className="opacity-75">to view more about Apps</span></div>                 
                                    </div>
                                    <div className="connectApp-Img">
                                        <img src={mobileView}/>                      
                                    </div>                           
                                </div> 

                                <div className="matrimonialContainer">
                                    <h3 className="py-3 text-center">
                                        <div className="moreThan">BROWSE</div>
                                        <div className="featuresSection__Title"> Matrimonial <span>Profiles by</span></div>
                                    </h3>  
                                    <div className="text-center">
                                        <ul className="matrimonial-Browse">
                                            {matrimonial.map((m1,index)=>(
                                                <li className={showMatrimonial==index?"bgLight":""} key={index} onClick={()=>this.handleMatrimonial(index)}>{m1}</li>
                                            ))}
                                        </ul>
                                    </div>  
                                    <div className="pb-5 ">
                                        <div className="text-center px-2">
                                            <ul className="matrimonial-List">
                                                {
                                                    showMatrimonial==0?<React.Fragment>{motherTongue.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==1?<React.Fragment>{castes.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==2?<React.Fragment>{religion.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==3?<React.Fragment>{cities.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==4?<React.Fragment>{occupation  .map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==5?<React.Fragment>{states.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==6?<React.Fragment>{NRI.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial==7?<React.Fragment>{colleges.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:""
                                                }
                                            </ul> 
                                        </div>       
                                    </div>                      
                                </div>    

                                <div className="seoText">
                                    <div><img src="https://www.jeevansathi.com/images/jspc/commonimg/JSFooterLogo.png"/></div>    
                                    <div className="seoText-Desc">
                                        <p>Yogjodi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Yogjodi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure 
                                        and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Yogjodi also maintains a dedicated
                                        Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families.</p>
                                    </div>  
                                    <div className="seoText-Note">Please note: Yogjodi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Yogjodi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content.</div>              
                                </div>   

                                <div>
                                    <div className="featuresSection__Title">Matched Gallery </div>
                                    <div className="d-flex p-4">
                                        <div className="gallryMatch">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOhHTtj-5-h2Qnt8Bljz_it4ZGiTsu4TSSQ&usqp=CAU" />
                                        </div>
                                        <div className="gallryMatch">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxZEGwBeuI7W6lY1nDjXu6NwBLmf79QNqrg&usqp=CAU" />
                                        </div>
                                        <div className="gallryMatch">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_s5WCijs7FDqljSFP3ZvcploosTSAqP5yQ&usqp=CAU" />
                                        </div>
                                        <div className="gallryMore">
                                            <div>More</div>
                                        </div>
                                    </div>
                                    
                                </div>                       

                            </div>      

                            
                        </div>
                        <footer>
                            <Footer/> 
                        </footer>  
                        <div className="copyRight"> All rights reserved © 2016 Yogjodi Internet Services. </div>
                    </div>
                </div>



                <div className="homePage-Mobile">
                    <div className="bgImageMb">
                        <header className="header-container">
                            <Link className="jeevansathi-logo--Mobile" to="/">
                                <img height="100%" width="100%"  src="https://static.jeevansathi.com/js_static/_next/static/images/js_logo-fe14652b87cc5a60d9512ac68bc23d9e.svg"/>
                            </Link>
                            <Link to="/login"><div className="loginBtn">Login</div></Link>
                            
                        </header>
                        <div className="looking-text">
                            <div className="nowChatForFree">Now, chat for free!</div>
                            <div className="isLooking">Finding your perfect match just became easier</div>
                            <button><Link to="/registr/page1">Register Free</Link></button>
                        </div>

                    </div>
                    <div className="homeContainer">
                            <div className="main-benifit">
                                <div className="">
                                    <div className="moreThan">MORE THAN 20 YEARS OF</div>
                                    <div className="bringingPeople">Bringing People <span>Together</span> </div>
                                </div>
                                <div>
                                    <div className=" d-flex mt-3">
                                        <div className="imgInfo">
                                            <img width="70px" height="40px" src="https://static.jeevansathi.com/js_static/_next/static/images/Screened_Profiles-63d4c9edff8d96926cbf2d19c392be95.svg" />
                                        </div>
                                        <div className="infoText">
                                            <div className="">100% Manually Screened Profiles</div>
                                            <div className="textmore">Search by location, community, profession & more from lakhs of active profiles</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="imgInfo">
                                            <img width="70px" height="40px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Ub3AgMyBCZW5lZml0cyBJY29ucyAvIFZlcmZpY2F0aW9ucyBieSBQZXJzb25hbCBWaXNpdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwIDE4LjUzOTQ5ODggMCAxOC41Mzk0OTg4IDMwLjYwODM5NDcgOS41OTU5NjM1NiAzMy41NTcwMDYyIDAgMzAuNjA4Mzk0NyI+PC9wb2x5Z29uPgogICAgICAgIDxwYXRoIGQ9Ik04LjIyNzc5NjU3LDE1LjQwNDg1MTcgQzMuODczNTEyMTQsMTUuNDA0ODUxNyAwLjM0MzY2NzE3OSwxMS45NTYzNTgxIDAuMzQzNjY3MTc5LDcuNzAyNDI1ODMgQzAuMzQzNjY3MTc5LDMuNDQ4NDkzNTEgMy44NzM1MTIxNCwwIDguMjI3Nzk2NTcsMCBDMTIuNTgyMDgxLDAgMTYuMTExOTI2LDMuNDQ4NDkzNTEgMTYuMTExOTI2LDcuNzAyNDI1ODMgQzE2LjExMTkyNiwxMS45NTYzNTgxIDEyLjU4MjA4MSwxNS40MDQ4NTE3IDguMjI3Nzk2NTcsMTUuNDA0ODUxNyBaIE03LjU2OTIyOTg3LDE2LjgwNDkyOCBMOS4xNDkxNjc2LDE2LjgwNDkyOCBDMTMuMzI5NTM3OCwxNi44MDQ5MjggMTYuNzE4Mzk3NSwyMC4xOTM3ODc3IDE2LjcxODM5NzUsMjQuMzc0MTU3OSBMMTYuNzE4Mzk3NSwyNC42NDA1NDk4IEMxNi43MTgzOTc1LDI4LjgyMDkyIDEzLjMyOTUzNzgsMzIuMjA5Nzc5NyA5LjE0OTE2NzYsMzIuMjA5Nzc5NyBMNy41NjkyMjk4NywzMi4yMDk3Nzk3IEMzLjM4ODg1OTY0LDMyLjIwOTc3OTcgNS4xMTk0NzcwMWUtMTYsMjguODIwOTIgMCwyNC42NDA1NDk4IEwwLDI0LjM3NDE1NzkgQy01LjExOTQ3NzAxZS0xNiwyMC4xOTM3ODc3IDMuMzg4ODU5NjQsMTYuODA0OTI4IDcuNTY5MjI5ODcsMTYuODA0OTI4IFoiIGlkPSJwYXRoLTMiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJUb3AtMy1CZW5lZml0cy1JY29ucy0vLVZlcmZpY2F0aW9ucy1ieS1QZXJzb25hbC1WaXNpdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTEwMCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC04MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4yMTg0NzUsIDIuNjMzMzEzKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuMTM4NDk2MywzMy45NDEzNjkzIEMyOS42ODgyMjY5LDMxLjE2MzI5NzcgMzIuOTQzODA1NiwxOS41NTE5MDA1IDMzLjk5Mzk5MjMsNi45OTI3MDE1NCBDMjguMjE3OTY1Niw2LjU4NzU2NjA5IDIxLjM5MTc1MjMsNS4xNDA2NTM3NyAxNy4xMzg0OTYzLDAuNTEwNTM0MzQ2IEMxMi45Mzc3NDk2LDUuMTQwNjUzNzcgNi4xMTE1MzYyOCw2LjU4NzU2NjA5IDAuMzg4MDE4OTQ0LDYuOTkyNzAxNTQgQzEuNDM4MjA1NjEsMTkuNTUxOTAwNSA0LjY5Mzc4NDI4LDMxLjE2MzI5NzcgMTcuMTM4NDk2MywzMy45NDEzNjkzIFoiIGlkPSJQYXRoIiBmaWxsPSIjRTRFRkY3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNzMyNjYwLCAyLjA3NTY3MCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0xMCI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01My1Db3B5IiBtYXNrPSJ1cmwoI21hc2stMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjU5ODA0OCwgMy41MzE3MzgpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01OCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQ5MDIzMCwgMC40OTc2MjEpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iIzE0MjAyQiIgc3Ryb2tlLXdpZHRoPSIwLjkyMzA3NjkyMyIgZD0iTTguMjI3Nzk2NTcsMTQuOTQzMzEzMiBDMTIuMzI5NTU3OSwxNC45NDMzMTMyIDE1LjY1MDM4NzUsMTEuNjk5MDE3OSAxNS42NTAzODc1LDcuNzAyNDI1ODMgQzE1LjY1MDM4NzUsMy43MDU4MzM3OCAxMi4zMjk1NTc5LDAuNDYxNTM4NDYyIDguMjI3Nzk2NTcsMC40NjE1Mzg0NjIgQzQuMTI2MDM1MjksMC40NjE1Mzg0NjIgMC44MDUyMDU2NCwzLjcwNTgzMzc4IDAuODA1MjA1NjQsNy43MDI0MjU4MyBDMC44MDUyMDU2NCwxMS42OTkwMTc5IDQuMTI2MDM1MjksMTQuOTQzMzEzMiA4LjIyNzc5NjU3LDE0Ljk0MzMxMzIgWiBNNy41NjkyMjk4NywxNy4yNjY0NjY1IEMzLjY0Mzc2MDMsMTcuMjY2NDY2NSAwLjQ2MTUzODQ2MiwyMC40NDg2ODgzIDAuNDYxNTM4NDYyLDI0LjM3NDE1NzkgTDAuNDYxNTM4NDYyLDI0LjY0MDU0OTggQzAuNDYxNTM4NDYyLDI4LjU2NjAxOTQgMy42NDM3NjAzLDMxLjc0ODI0MTIgNy41NjkyMjk4NywzMS43NDgyNDEyIEw5LjE0OTE2NzYsMzEuNzQ4MjQxMiBDMTMuMDc0NjM3MiwzMS43NDgyNDEyIDE2LjI1Njg1OSwyOC41NjYwMTk0IDE2LjI1Njg1OSwyNC42NDA1NDk4IEwxNi4yNTY4NTksMjQuMzc0MTU3OSBDMTYuMjU2ODU5LDIwLjQ0ODY4ODMgMTMuMDc0NjM3MiwxNy4yNjY0NjY1IDkuMTQ5MTY3NiwxNy4yNjY0NjY1IEw3LjU2OTIyOTg3LDE3LjI2NjQ2NjUgWiIgc3Ryb2tlLWxpbmVqb2luPSJzcXVhcmUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC43NjkyMzA3NjkiIGQ9Ik04LjIyNzc5NjU3LDE1Ljc4OTQ2NyBDMy42NjMwNzYxOSwxNS43ODk0NjcgLTAuMDQwOTQ4MjA1OCwxMi4xNzA4MDg0IC0wLjA0MDk0ODIwNTgsNy43MDI0MjU4MyBDLTAuMDQwOTQ4MjA1OCwzLjIzNDA0MzI4IDMuNjYzMDc2MTksLTAuMzg0NjE1Mzg1IDguMjI3Nzk2NTcsLTAuMzg0NjE1Mzg1IEMxMi43OTI1MTcsLTAuMzg0NjE1Mzg1IDE2LjQ5NjU0MTQsMy4yMzQwNDMyOCAxNi40OTY1NDE0LDcuNzAyNDI1ODMgQzE2LjQ5NjU0MTQsMTIuMTcwODA4NCAxMi43OTI1MTcsMTUuNzg5NDY3IDguMjI3Nzk2NTcsMTUuNzg5NDY3IFogTTcuNTY5MjI5ODcsMTYuNDIwMzEyNiBMOS4xNDkxNjc2LDE2LjQyMDMxMjYgQzEzLjU0MTk1NSwxNi40MjAzMTI2IDE3LjEwMzAxMjgsMTkuOTgxMzcwNCAxNy4xMDMwMTI4LDI0LjM3NDE1NzkgTDE3LjEwMzAxMjgsMjQuNjQwNTQ5OCBDMTcuMTAzMDEyOCwyOS4wMzMzMzcyIDEzLjU0MTk1NSwzMi41OTQzOTUgOS4xNDkxNjc2LDMyLjU5NDM5NSBMNy41NjkyMjk4NywzMi41OTQzOTUgQzMuMTc2NDQyNDMsMzIuNTk0Mzk1IC0wLjM4NDYxNTM4NSwyOS4wMzMzMzcyIC0wLjM4NDYxNTM4NSwyNC42NDA1NDk4IEwtMC4zODQ2MTUzODUsMjQuMzc0MTU3OSBDLTAuMzg0NjE1Mzg1LDE5Ljk4MTM3MDQgMy4xNzY0NDI0MywxNi40MjAzMTI2IDcuNTY5MjI5ODcsMTYuNDIwMzEyNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwiIGZpbGw9IiNGNUNBRDAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiBjeD0iOS42OTcxMTExMyIgY3k9IjguMDk0NzQ1OTciIHJ4PSI3LjE2NDM2ODc5IiByeT0iNi45OTkyNTMzNyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9IiIgaWQ9IlBhdGgtMiIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0ibm91bl9wcm90ZWN0XzE1ODk2NDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjQ1NjQ4MSwgMTkuODM5NTY2KSBzY2FsZSgxLCAtMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTIwLjQ1NjQ4MSwgLTE5LjgzOTU2NikgdHJhbnNsYXRlKDAuOTU2NDgxLCAwLjMzOTU2NikiIGZpbGw9IiMxNDIwMkIiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuMzc1MzkxMiwzOC42NzA2NjczIEM0LjcxODk1MTg2LDM1LjUzNjcxNzEgMS42Mjc3NzU1NiwyMS42NjYwODU2IDAuNTYxODUyNjk3LDcuNjIxMzQ1NzMgQzcuNzU2ODMyMDIsNy4yMTUwOTI5MiAxNC41MjU0NDIyLDYuMjg2NTE1MDggMTkuNTM1Mjc5NywwLjA3NjY1MDc2NTIgQzI0LjU5ODQxMzMsNi4yODY1MTUwOCAzMS40MjAzMTk2LDcuMjE1MDkyOTIgMzguNTYyMDAyOCw3LjYyMTM0NTczIEMzNy41NDkzNzYsMjEuNjY2MDg1NiAzNC40MDQ5MDM2LDM1LjUzNjcxNzEgMTkuNzQ4NDY0MiwzOC42NzA2NjczIEwxOS41MzUyNzk3LDM4LjY3MDY2NzMgTDE5LjM3NTM5MTIsMzguNjcwNjY3MyBaIE0xOS41MzIwNzMyLDM3LjcwOTE0MzUgQzMzLjAzNjE5NzMsMzQuNzE5ODAyNSAzNi41MzkzNTkxLDIyLjAxNTEwMzMgMzcuNjY5NDExNCw4LjUwMDc5MDk1IEMzMS40NTQxMjQxLDguMDY0ODQ1MzkgMjQuMTA4Nzg0Nyw2LjUwNzg5Njk2IDE5LjUzMjA3MzIsMS41MjU2NjE5OCBDMTUuMDExODY0Myw2LjUwNzg5Njk2IDcuNjY2NTI0ODQsOC4wNjQ4NDUzOSAxLjUwNzc0MDIyLDguNTAwNzkwOTUgQzIuNjM3NzkyNDUsMjIuMDE1MTAzMyA2LjE0MDk1NDM0LDM0LjcxOTgwMjUgMTkuNTMyMDczMiwzNy43MDkxNDM1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="/>
                                        </div>
                                        
                                        <div className="infoText">
                                            <div className="">Verification by Personal Visit</div>                                        
                                            <div className="textmore">Special listing of profiles verified by our agents through personal visits</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="imgInfo ml-n">
                                            <img width="70px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDUgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZWxsaXBzZSByeD0iMjEuNDUzNyIgcnk9IjIxLjM4MzQiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5ODg5IC0wLjAxNzM5NDUgMC4wMTc1MTA1IDAuOTk5ODA2IDIxLjgyNTcgMjYuNzUyNykiCiAgICAgICAgICAgICBmaWxsPSIjRUVGM0Y5Ii8+CiAgICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjUiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCI+CiAgICAgICAgPGVsbGlwc2Ugcng9IjIxLjQ1MzciIHJ5PSIyMS4zODM0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk5OTg4OSAtMC4wMTczOTQ1IDAuMDE3NTEwNSAwLjk5OTgwNiAyMS44MjU3IDI2Ljc1MjcpIgogICAgICAgICAgICAgICAgIGZpbGw9IndoaXRlIi8+CiAgICA8L21hc2s+CiAgICA8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTMxLjQzNDkgMjQuOTkwMkMzMS41MjUxIDMwLjE0MDIgMjcuMzc2MSAzNC4zODg2IDIyLjE2NzkgMzQuNDc5MkMxNi45NTk3IDM0LjU2OTggMTIuNjY0NSAzMC40NjgzIDEyLjU3NDQgMjUuMzE4M0MxMi40ODQyIDIwLjE2ODMgMTYuNjMzMSAxNS45MTk5IDIxLjg0MTMgMTUuODI5M0MyNy4wNDk1IDE1LjczODcgMzEuMzQ0NyAxOS44NDAyIDMxLjQzNDkgMjQuOTkwMlpNMTIuNTE5NiA0NS42Njk1QzEyLjQyOTQgNDAuNTE5NSAxNi41MzE2IDM2LjI3MTkgMjEuNjgyIDM2LjE4MjNMMjMuMDI3NSAzNi4xNTg5QzI4LjE3OCAzNi4wNjkzIDMyLjQyNjQgNDAuMTcxNiAzMi41MTY2IDQ1LjMyMTZDMzIuNjA2OCA1MC40NzE2IDI4LjUwNDYgNTQuNzE5MiAyMy4zNTQyIDU0LjgwODhMMjIuMDA4NyA1NC44MzIyQzE2Ljg1ODIgNTQuOTIxOCAxMi42MDk4IDUwLjgxOTUgMTIuNTE5NiA0NS42Njk1WiIKICAgICAgICAgICAgICBmaWxsPSJ3aGl0ZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMi4xNzY3IDM0Ljk3OTFDMjcuNjU1NyAzNC44ODM4IDMyLjAyOTkgMzAuNDEyOSAzMS45MzQ4IDI0Ljk4MTVMMzAuOTM0OSAyNC45OTg5QzMxLjAyMDIgMjkuODY3NiAyNy4wOTY1IDMzLjg5MzQgMjIuMTU5MiAzMy45NzkzTDIyLjE3NjcgMzQuOTc5MVpNMTIuMDc0NCAyNS4zMjdDMTIuMTY5NSAzMC43NTg0IDE2LjY5NzYgMzUuMDc0NCAyMi4xNzY3IDM0Ljk3OTFMMjIuMTU5MiAzMy45NzkzQzE3LjIyMTggMzQuMDY1MiAxMy4xNTk2IDMwLjE3ODMgMTMuMDc0MyAyNS4zMDk2TDEyLjA3NDQgMjUuMzI3Wk0yMS44MzI1IDE1LjMyOTRDMTYuMzUzNSAxNS40MjQ3IDExLjk3OTMgMTkuODk1NiAxMi4wNzQ0IDI1LjMyN0wxMy4wNzQzIDI1LjMwOTZDMTIuOTg5IDIwLjQ0MDkgMTYuOTEyNyAxNi40MTUxIDIxLjg1IDE2LjMyOTJMMjEuODMyNSAxNS4zMjk0Wk0zMS45MzQ4IDI0Ljk4MTVDMzEuODM5NyAxOS41NTAxIDI3LjMxMTYgMTUuMjM0MSAyMS44MzI1IDE1LjMyOTRMMjEuODUgMTYuMzI5MkMyNi43ODc0IDE2LjI0MzMgMzAuODQ5NiAyMC4xMzAyIDMwLjkzNDkgMjQuOTk4OUwzMS45MzQ4IDI0Ljk4MTVaTTIxLjY3MzMgMzUuNjgyNEMxNi4yNDY3IDM1Ljc3NjggMTEuOTI0NiA0MC4yNTIxIDEyLjAxOTcgNDUuNjc4MkwxMy4wMTk2IDQ1LjY2MDhDMTIuOTM0MiA0MC43ODY5IDE2LjgxNjQgMzYuNzY3IDIxLjY5MDggMzYuNjgyMkwyMS42NzMzIDM1LjY4MjRaTTIxLjY5MDggMzYuNjgyMkwyMy4wMzYzIDM2LjY1ODhMMjMuMDE4OCAzNS42NTlMMjEuNjczMyAzNS42ODI0TDIxLjY5MDggMzYuNjgyMlpNMzMuMDE2NSA0NS4zMTI5QzMyLjkyMTUgMzkuODg2OCAyOC40NDU0IDM1LjU2NDYgMjMuMDE4OCAzNS42NTlMMjMuMDM2MyAzNi42NTg4QzI3LjkxMDYgMzYuNTc0IDMxLjkzMTMgNDAuNDU2NCAzMi4wMTY2IDQ1LjMzMDNMMzMuMDE2NSA0NS4zMTI5Wk0yMy4zNjI5IDU1LjMwODdDMjguNzg5NSA1NS4yMTQzIDMzLjExMTYgNTAuNzM5IDMzLjAxNjUgNDUuMzEyOUwzMi4wMTY2IDQ1LjMzMDNDMzIuMTAyIDUwLjIwNDMgMjguMjE5OCA1NC4yMjQxIDIzLjM0NTQgNTQuMzA4OUwyMy4zNjI5IDU1LjMwODdaTTIzLjM0NTQgNTQuMzA4OUwyMS45OTk5IDU0LjMzMjNMMjIuMDE3NCA1NS4zMzIxTDIzLjM2MjkgNTUuMzA4N0wyMy4zNDU0IDU0LjMwODlaTTEyLjAxOTcgNDUuNjc4MkMxMi4xMTQ3IDUxLjEwNDMgMTYuNTkwOSA1NS40MjY1IDIyLjAxNzQgNTUuMzMyMUwyMS45OTk5IDU0LjMzMjNDMTcuMTI1NiA1NC40MTcxIDEzLjEwNDkgNTAuNTM0NyAxMy4wMTk2IDQ1LjY2MDhMMTIuMDE5NyA0NS42NzgyWiIKICAgICAgICAgICAgICBmaWxsPSIjMTQyMDJCIi8+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2sxIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxMiIgeT0iMTUiIHdpZHRoPSIyMiIgaGVpZ2h0PSI0MSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgICAgICAgICAgICBkPSJNMzEuNDM0OSAyNC45OTAyQzMxLjUyNTEgMzAuMTQwMiAyNy4zNzYxIDM0LjM4ODYgMjIuMTY3OSAzNC40NzkyQzE2Ljk1OTcgMzQuNTY5OCAxMi42NjQ1IDMwLjQ2ODMgMTIuNTc0NCAyNS4zMTgzQzEyLjQ4NDIgMjAuMTY4MyAxNi42MzMxIDE1LjkxOTkgMjEuODQxMyAxNS44MjkzQzI3LjA0OTUgMTUuNzM4NyAzMS4zNDQ3IDE5Ljg0MDIgMzEuNDM0OSAyNC45OTAyWk0xMi41MTk2IDQ1LjY2OTVDMTIuNDI5NCA0MC41MTk1IDE2LjUzMTYgMzYuMjcxOSAyMS42ODIgMzYuMTgyM0wyMy4wMjc1IDM2LjE1ODlDMjguMTc4IDM2LjA2OTMgMzIuNDI2NCA0MC4xNzE2IDMyLjUxNjYgNDUuMzIxNkMzMi42MDY4IDUwLjQ3MTYgMjguNTA0NiA1NC43MTkyIDIzLjM1NDIgNTQuODA4OEwyMi4wMDg3IDU0LjgzMjJDMTYuODU4MiA1NC45MjE4IDEyLjYwOTggNTAuODE5NSAxMi41MTk2IDQ1LjY2OTVaIgogICAgICAgICAgICAgICAgICBmaWxsPSJ3aGl0ZSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjIuMTc2NyAzNC45NzkxQzI3LjY1NTcgMzQuODgzOCAzMi4wMjk5IDMwLjQxMjkgMzEuOTM0OCAyNC45ODE1TDMwLjkzNDkgMjQuOTk4OUMzMS4wMjAyIDI5Ljg2NzYgMjcuMDk2NSAzMy44OTM0IDIyLjE1OTIgMzMuOTc5M0wyMi4xNzY3IDM0Ljk3OTFaTTEyLjA3NDQgMjUuMzI3QzEyLjE2OTUgMzAuNzU4NCAxNi42OTc2IDM1LjA3NDQgMjIuMTc2NyAzNC45NzkxTDIyLjE1OTIgMzMuOTc5M0MxNy4yMjE4IDM0LjA2NTIgMTMuMTU5NiAzMC4xNzgzIDEzLjA3NDMgMjUuMzA5NkwxMi4wNzQ0IDI1LjMyN1pNMjEuODMyNSAxNS4zMjk0QzE2LjM1MzUgMTUuNDI0NyAxMS45NzkzIDE5Ljg5NTYgMTIuMDc0NCAyNS4zMjdMMTMuMDc0MyAyNS4zMDk2QzEyLjk4OSAyMC40NDA5IDE2LjkxMjcgMTYuNDE1MSAyMS44NSAxNi4zMjkyTDIxLjgzMjUgMTUuMzI5NFpNMzEuOTM0OCAyNC45ODE1QzMxLjgzOTcgMTkuNTUwMSAyNy4zMTE2IDE1LjIzNDEgMjEuODMyNSAxNS4zMjk0TDIxLjg1IDE2LjMyOTJDMjYuNzg3NCAxNi4yNDMzIDMwLjg0OTYgMjAuMTMwMiAzMC45MzQ5IDI0Ljk5ODlMMzEuOTM0OCAyNC45ODE1Wk0yMS42NzMzIDM1LjY4MjRDMTYuMjQ2NyAzNS43NzY4IDExLjkyNDYgNDAuMjUyMSAxMi4wMTk3IDQ1LjY3ODJMMTMuMDE5NiA0NS42NjA4QzEyLjkzNDIgNDAuNzg2OSAxNi44MTY0IDM2Ljc2NyAyMS42OTA4IDM2LjY4MjJMMjEuNjczMyAzNS42ODI0Wk0yMS42OTA4IDM2LjY4MjJMMjMuMDM2MyAzNi42NTg4TDIzLjAxODggMzUuNjU5TDIxLjY3MzMgMzUuNjgyNEwyMS42OTA4IDM2LjY4MjJaTTMzLjAxNjUgNDUuMzEyOUMzMi45MjE1IDM5Ljg4NjggMjguNDQ1NCAzNS41NjQ2IDIzLjAxODggMzUuNjU5TDIzLjAzNjMgMzYuNjU4OEMyNy45MTA2IDM2LjU3NCAzMS45MzEzIDQwLjQ1NjQgMzIuMDE2NiA0NS4zMzAzTDMzLjAxNjUgNDUuMzEyOVpNMjMuMzYyOSA1NS4zMDg3QzI4Ljc4OTUgNTUuMjE0MyAzMy4xMTE2IDUwLjczOSAzMy4wMTY1IDQ1LjMxMjlMMzIuMDE2NiA0NS4zMzAzQzMyLjEwMiA1MC4yMDQzIDI4LjIxOTggNTQuMjI0MSAyMy4zNDU0IDU0LjMwODlMMjMuMzYyOSA1NS4zMDg3Wk0yMy4zNDU0IDU0LjMwODlMMjEuOTk5OSA1NC4zMzIzTDIyLjAxNzQgNTUuMzMyMUwyMy4zNjI5IDU1LjMwODdMMjMuMzQ1NCA1NC4zMDg5Wk0xMi4wMTk3IDQ1LjY3ODJDMTIuMTE0NyA1MS4xMDQzIDE2LjU5MDkgNTUuNDI2NSAyMi4wMTc0IDU1LjMzMjFMMjEuOTk5OSA1NC4zMzIzQzE3LjEyNTYgNTQuNDE3MSAxMy4xMDQ5IDUwLjUzNDcgMTMuMDE5NiA0NS42NjA4TDEyLjAxOTcgNDUuNjc4MloiCiAgICAgICAgICAgICAgICAgIGZpbGw9IndoaXRlIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxnIG1hc2s9InVybCgjbWFzazEpIj4KICAgICAgICA8L2c+CiAgICAgICAgPGVsbGlwc2Ugcng9IjcuOTk5NjgiIHJ5PSI4LjAwMDMzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk5OTg4OSAtMC4wMTczOTQ1IDAuMDE3NTEwNSAwLjk5OTgwNiAyMi4xMzg5IDI1LjEzODQpIgogICAgICAgICAgICAgICAgIGZpbGw9IiNGNUNBRDAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTptdWx0aXBseSIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICBkPSJNNDEuNDgzMyA1LjM0NzlINDAuNzM1NEw0MC43MzE3IDMuODE5OTNDNDAuNzI2NiAxLjcxMTMzIDM5LjA0NzIgMCAzNi45ODMxIDBDMzQuOTE4OSAwIDMzLjI0NzggMS43MTEzMyAzMy4yNTI5IDMuODE5OTNMMzMuMjU2NiA1LjM0NzlIMzIuNTA4N0MzMS42ODYgNS4zNDc5IDMxLjAxNDYgNi4wMzU0OCAzMS4wMTY2IDYuODc1ODdMMzEuMDM1MSAxNC41MTU3QzMxLjAzNzIgMTUuMzU2MSAzMS43MTE5IDE2LjA0MzcgMzIuNTM0NiAxNi4wNDM3SDQxLjUwOTJDNDIuMzMxOSAxNi4wNDM3IDQzLjAwMzMgMTUuMzU2MSA0My4wMDEyIDE0LjUxNTdMNDIuOTgyOCA2Ljg3NTg3QzQyLjk4MDcgNi4wMzU0OCA0Mi4zMDYgNS4zNDc5IDQxLjQ4MzMgNS4zNDc5Wk0zNy4wMTE4IDEyLjIyNEMzNi4xODkyIDEyLjIyNCAzNS41MTQ0IDExLjUzNjQgMzUuNTEyNCAxMC42OTZDMzUuNTEwMyA5Ljg1NTYxIDM2LjE4MTggOS4xNjgwMiAzNy4wMDQ0IDkuMTY4MDJDMzcuODI3MSA5LjE2ODAyIDM4LjUwMTkgOS44NTU2MSAzOC41MDM5IDEwLjY5NkMzOC41MDU5IDExLjUzNjQgMzcuODM0NSAxMi4yMjQgMzcuMDExOCAxMi4yMjRaTTM0Ljc1MDMgMy44MjAzNUwzNC43NTQgNS4zNDgzMkgzOS4yNDEzTDM5LjIzNzYgMy44MjAzNUMzOS4yMzQ1IDIuNTUyMTMgMzguMjI5OSAxLjUyODM5IDM2Ljk4ODQgMS41MjgzOUMzNS43NDY5IDEuNTI4MzkgMzQuNzQ3MiAyLjU1MjEzIDM0Ljc1MDMgMy44MjAzNVoiCiAgICAgICAgICBmaWxsPSIjRDg0NjVDIi8+Cjwvc3ZnPgo="/>
                                        </div>
                                        <div className="infoText">
                                            <div className="">Control over Privacy</div>
                                            <div className="textmore">Restrict unwanted access to contact details & photos/videos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featuresSection">
                                    <div className="featuresSection_body">
                                        <header className="featuresSection__Header">
                                            <h5 className="moreThan">Meet From Home</h5>
                                            <h2 className="featuresSection__Title">Impress them Over the <span>Distance</span></h2>
                                        </header>
                                        <div className="featuresSection-dflex">
                                            <div className="featuresSection-Card">
                                                <div className="featuresSectionImages pt-5">
                                                    <img width="100%" height="100%" src="https://static.jeevansathi.com/js_static/_next/static/images/match-hour-19b5b6122d30ef883c29f19334394835.svg"/>
                                                </div>
                                                <div className="underline3"></div>
                                                <h3>Yogjodi Match Hour</h3>
                                                <p>Register to join an online event to connect with members of your community in a short time</p>
                                                
                                            </div>
                                            <div className="featuresSection-Card">
                                                <div className="featuresSectionImages pt-4">
                                                    <img width="100%" src="https://static.jeevansathi.com/js_static/_next/static/images/Video_Voice-0a41d02f12a4d6ac442d6f89c537443b.svg"/>
                                                </div>
                                                <div className="underline3"></div>
                                                <h3>Voice & Video Calling</h3>
                                                <p>Enjoy secure conversations using our voice & video calling services without revealing your number</p>
                                                
                                            </div>
                                            <div className="featuresSection-Card">
                                                <div className="featuresSectionImages">
                                                    <img width="100%" src="https://static.jeevansathi.com/js_static/_next/static/images/Video_Profile-c39366134dc7ff2aa86ab7541f555680.svg"/>
                                                </div>
                                                <div className="underline3"></div>
                                                <h3>Introducing Video Profiles</h3>
                                                <p>Stand out amongst others and engage faster! Introduce yourself by adding a video to your profile</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                <div className="main-benifit2">
                                    <h2>
                                        <div className="moreThan">THREE SIMPLE STEPS TO</div>
                                        <div className="featuresSection__Title">Find the <span> One for You</span></div>
                                    </h2>
                                    <div className="featuresSectionContain">
                                        <div className="featuresSections--lists">
                                            <div className="featuresSectionImg">
                                                <img className="carouselImg" src={findWorkImg1}/>
                                                <p><span>01</span> Define Your Partner Preferences</p>
                                            </div>
                                            <div className="featuresSectionImg">
                                                <img className="carouselImg" src={findWorkImg2}/>
                                                <p><span>02</span> Browse Profiles</p>
                                            </div>
                                            <div className="featuresSectionImg">
                                                <img className="carouselImg" src={findWorkImg3}/>
                                                <p><span>03</span> Send Interests & Connect</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="featuresBtn text-center">
                                        <button>Get Started by Registering Free</button>
                                    </div>
                                    
                                </div>

                                <div className="membershipPlans">
                                    <h2>
                                        <div className="moreThan">UPGRADE YOUR ACCOUNT</div>
                                        <div className="featuresSection__Title"><span>Membership</span> Plans</div>
                                    </h2>
                                    <div className="membership">
                                        <Membership/>
                                    </div>
                                </div>
                                <div className="bgBlue"></div>

                                <div className="exclusivePad">
                                    <h2 className="text-center">
                                        <div className="moreThan pb-1">PERSONALISED MATCH-MAKING SERVICE</div>
                                        <div className="featuresSection__Title">Introducing <span>Exclusive</span></div>
                                    </h2>   
                                    <img className="exclusiveImg" src="https://www.jeevansathi.com/images/jspc/commonimg/JS_Exclusive_Image_final_min.png"/>         
                                    <div className="exclusiveList">
                                        <ul>  
                                            <li>
                                                <img width="20px" height="20px" src="https://static.jeevansathi.com/images/jsms/photo/Meet_your_advisor.svg"/>
                                                <span>Meet Your Relationship Manager</span>
                                            </li>
                                            <li>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
                                                <span>Communicate your preferences</span>
                                            </li>
                                            <li>
                                                <img width="20px" height="20px" src="https://static.jeevansathi.com/images/jsms/photo/Handpicked.svg"/>
                                                <span>Choose from handpicked profiles</span>
                                            </li>
                                        </ul>
                                      
                                    </div>
                                </div>
                                <div className="successStory">
                                   <div className="storyMatched">
                                        <h3 className="m-0">
                                            <div className="moreThan">LAKHS OF HAPPY COUPLES</div>
                                            <div className="featuresSection__Title">Matched by <span> Yogjodi</span></div>
                                        </h3>
                                   </div> 
                                   <div className="storySlick">
                                        {successStoryList.map((item,index) => (
                                            <div className="slick-current" key={index}>
                                                <div className="storyList" style={{backgroundImage:`radial-gradient(50% 114%, rgba(255, 255, 255, 0) 35%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(rgba(255, 255, 255, 0.5) 16%, rgba(0, 0, 0, 0.7) 76%), url("${item.img}")`}}>
                                                    <div className="pos_abs">
                                                        <div className="story-Name">{item.name}</div>
                                                        <div className="lineClass"></div>
                                                        <div className="marriageDate">MARRIAGE DATE 01, January 2021</div>
                                                    </div>  
                                                </div>  
                                            </div>
                                        ))}
                                   
                                   </div>
                                </div>
                                <div>
                                    <div className="connectApp-Title">
                                        <h3 className="">
                                            <div className="moreThan">Stay Connected With</div>
                                            <div className="featuresSection__Title"><span> Yogjodi</span> Apps</div>
                                        </h3>
                                   </div>   
                                    <div className="">
                                        <img className="connectApp" src="https://static.jeevansathi.com/images/jsms/photo/group_64_new.png" />                                                                                      
                                    </div> 
                                    <p className="connectAppText">Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment.</p>
                                    <div className="connectAppIcon">
                                        <img width="100%" src="https://static.jeevansathi.com/images/jsms/photo/Google%20Play%20Icon.png"/>
                                    </div>
                                </div>   
                                <div className="matrimonialContainer">
                                    <h3 className="m-0">
                                        <div className="moreThan">BROWSE</div>
                                        <div className="featuresSection__Title"><span>Matrimonial</span> Profiles by</div>
                                    </h3>  
                                        <ul className="matrimonial-Browse">
                                            {matrimonial.map((m1,index)=>(
                                                <li key={index} onClick={()=>this.handleShowMb(index)}>
                                                <div className={"border-secondary pt-3 "+(index>0?"border-top":"")}></div>
                                                        {m1} 
                                                    <i class={"fa-solid float-right m-2 "+(showMatrialMb==index?"fa-angle-up":"fa-angle-down")}></i>
                                                    
                                                    <div className={showMatrialMb==index?"d-block":"d-none"}>
                                                        {showMatrialMb==0?(
                                                            <div className="row">
                                                                {motherTongue.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==1?(
                                                            <div className="row">
                                                                {castes.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==2?(
                                                            <div className="row">
                                                                {religion.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==3?(
                                                            <div className="row">
                                                                {cities.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==4?(
                                                            <div className="row">
                                                                {occupation.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==5?(
                                                            <div className="row">
                                                                {states.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==6?(
                                                            <div className="row">
                                                                {NRI.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb==7?(
                                                            <div className="row">
                                                                {colleges.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):""}
                                                    </div>
                                                </li>
                                                
                                            ))}
                                        </ul>       
                                </div>    

                                <div className="seoContain">
                                    <div className="d-flex">
                                        <div className="">
                                            <img width="28px" height="28px" src="https://static.jeevansathi.com/images/jsms/photo/js_footer_logo.png"/>
                                        </div>
                                        <div className="seoTexts"> 
                                            <cite>Yogjodi</cite>
                                            <span>Be found</span>
                                        </div>
                                        
                                    </div>    
                                    <div className="seoText-Desc">
                                        <p>Yogjodi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Yogjodi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening exclusive privacy options, photo protection features and verification of phone numbers and more 
                                        information. While the online matrimonial site connects millions of people directly, Yogjodi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and/or families.</p>
                                        <p>Please note: Yogjodi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Yogjodi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to
                                         upload such content.</p>
                                    </div>    
                                    <div className="AppFollow">
                                        <div className="AppFollow-List">
                                            <div className="footerWid">
                                                <div className="pb-2"> Follow us on </div>
                                                <Link to="#" className="footerIcon iconPostion3"></Link>
                                                <Link to="#" className="footerIcon iconPostion4"></Link>
                                                <Link to="#" className="footerIcon iconPostion5"></Link>
                                            </div>
                                            <div className="footerWid">
                                                <div className="pb-2"> App available on </div>
                                                <Link to="#" className="footerIcon iconPostion"></Link>
                                                <Link to="#" className="footerIcon iconPostion2"></Link>
                                            </div>
                                        </div>
                                    </div>         
                                </div>
                    </div>
                </div>

                <div>
                {registerPop&&
                <div className="popup-box">
                    <div className="box2">
                        <span className="close-icon" onClick={this.handleResisterPop} ></span>
                        <div className="registerFields">
                            <UserRegisterPop/>
                            <div className="login_Button" onClick={this.handelLoginpop}> Login</div>
                        </div>
                    </div>
                </div>
                }
                {loginpop &&
                    <div className="popup-box">
                        <div className="box">
                            <span className="close-icon" onClick={this.handelLoginpop}></span>
                            <LoginForm/>
                            <div className="loginFrm2">
                                <p>New on Yogjodi?</p>
                                <div className="mt-3">
                                    <button className="registerBtn" onClick={this.handleResisterPop}>REGISTER FREE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
export default index;

