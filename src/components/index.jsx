import React, {Component} from "react";
import {Link} from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./header/header";
import MatrimonialFilter from "./matrimonialFilter";
import Membership from "./membership";
import Footer from "./footer/footer";
import UserRegisterPop from "../pages/registration/userRegisterPop";
import MobileView from "../assets/images/mobileView.png";
import LoginForm from '../pages/login/user_login';
import YogJodiLogo from '../assets/images/YogJodiLogo.png';
import MatchImage from '../assets/images/matchImage.png';
import VideoImage from '../assets/images/videoImage.png';
import VideoProfile from '../assets/images/profile121.png';
import New_Benefits from '../assets/images/new_Benefits.png';
import New_Benefits2 from '../assets/images/new_Benefits2.png';
import New_Benefits3 from '../assets/images/new_Benefits3.png';
import how_work from '../assets/images/how-work.png';
import how_work2 from '../assets/images/how-work2.png';
import how_work3 from '../assets/images/how-work3.png';
import ExclusiveBgImg from '../assets/images/exclusiveBgImg.png';
import ExclusiveBgImg2 from '../assets/images/exclusiveBgImg2.png';


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
        s1.showMatrialMb=s1.showMatrialMb===index?-1:index;
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


        return(
            <div className="">
                <div className="homePage">
                    <header className="header-container">
                        <Header/>
                    </header>
                    <div className="bgImage">
                        <div className="looking-Container">
                            <div className="looking-text">
                                <div className="nowChatForFree">Now, chat for free!</div>
                                <div className="isLooking">Finding your perfect match just became easier</div>
                                <button className="registerFreeBtn" onClick={this.handleResisterPop}>Register Free</button>
                            </div>
                        </div>
                    </div>
                        <div className="firstBlock">
                            <div className="homeContainer">
                                <div className="main-benifit">
                                    <div className="my-3">
                                        <div className="benifit-title">More Than 20 Years Of</div>
                                        <div className="benifit-title2 ">Bringing People <span>Together</span> </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-4">
                                            <div className="text-center"><img  src={New_Benefits} alt=""/> </div> 
                                            <div className="pt-3">100% Manually Screened Profiles</div>
                                            <div className="textmore">Search by location, community, profession & more from lakhs of active profiles</div>
                                        </div>
                                        <div className="col-4 ">
                                            <div className="text-center"><img  src={New_Benefits2} alt=""/> </div> 
                                            <div className="pt-3">Verification by Personal Visit</div>
                                            <div className="textmore">Special listing of profiles verified by our agents through personal visits</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="text-center"><img  src={New_Benefits3} alt=""/> </div>  
                                            <div className="pt-3">Control over Privacy</div>
                                            <div className="textmore">Restrict unwanted access to contact details & photos/videos</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="featuresSection">
                                    <div className="featuresSection_body">
                                        <header className="featuresSection__Header">
                                            <div className="benifit-title">Meet From Home</div>
                                            <div className="benifit-title2">Impress them Over the <span>Distance</span></div>
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
                                            <img className="featuresSection--WrapperImg" src={MatchImage} alt=""/>
                                        </div>
                                        <div className="featuresSection--Images--Wrapper">
                                            <img className="featuresSection--WrapperImg" src={VideoImage} alt=""/>
                                        </div>
                                        <div className="featuresSection--Images--Wrapper">
                                            <img className="featuresSection--WrapperImg" src={VideoProfile} alt=""/>
                                        </div>
                                            
                                    </div>

                                   
                                </div>
                                <div className="main-benifit ">
                                    <div>
                                        <div className="benifit-title">Three Simple Steps To</div>
                                        <div className="benifit-title2">Find the <span> One for You</span></div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4 pt-4">
                                            <div><img src={how_work} alt=""/></div>
                                            <div className="findWorkTxt m-0"><span>1. </span>Define Your Partner Preferences</div>
                                        </div>
                                        <div className="col-4 pt-4">
                                            <div><img src={how_work2} alt=""/></div>
                                            <div className="findWorkTxt"><span>2. </span>Browse Profiles</div>
                                        </div>
                                        <div className="col-4 pt-4">
                                            <div><img src={how_work3} alt=""/></div>
                                            <div className="findWorkTxt"><span>3. </span>Send Interests & Connect</div>
                                        </div>
                                        <div className="text-center pt-4">
                                            <Link to="/user_registration"><button className="findBottom">Get Started</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="membershipPlans">
                                    <h3><div className="benifit-title2"><span>Membership</span> Plans</div></h3>
                                    <div className="membership-Txt">Upgrade your plan as per your customized requirements. With a paid membership, you can seamlessly connect with your prospects and get more responses. Here are some key benefits:</div>
                                    <div className="membership">
                                        <Membership/>
                                    </div>
                                </div>
                                <div className="exclusivePad">
                                    <div className="">
                                        <div className="benifit-title">Personalised Match-Making Service</div>
                                        <div className="d-flex justify-content-between">
                                            <div className="benifit-title2">Introducing <span>Exclusive</span></div>
                                            <div ><Link to="/ydexclusive"><bottom className="exclusiveBtn">EXCLUSIVE</bottom></Link></div>
                                        </div>
                                    </div>  
                                    <div className="row">
                                        <div className="col-5 px-0 pt-3">
                                            <img className="exclusiveImage" src={ExclusiveBgImg} alt="exclusiveBgImg"/>
                                        </div>
                                        <div className="col-7">
                                            <div className="materialBox mt-4 ml-4">
                                                <div className="exclusiveMeet">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
                                                    Meet Your Relationship Manager
                                                </div>
                                                <div className="txtMore">Connect with our highly experienced advisor who manages your profile.</div>
                                            </div>
                                            <div className="materialBox my-4 m-left">
                                                <div className="exclusiveMeet">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                                                    Communicate your preferences
                                                </div>
                                                <div className="txtMore">Consultation to understand your expectations in a prospective partner.</div>
                                            </div>
                                            <div className="materialBox m-left2">
                                                <div className="exclusiveMeet">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>
                                                    Choose from handpicked profiles
                                                    </div>
                                                <div className="txtMore">We shortlist profiles matching your criteria for offline interactions.</div>
                                            </div>
                                        </div>
                                    </div>          
                                   
                                    
                                </div>
                                <div className="successStory">
                                   <div className="storyMatched">
                                        <div className="my-3">
                                            <div className="benifit-title">Lakhs Of Happy Couples</div>
                                            <div className="benifit-title2">Matched by <span> Yogjodi</span></div>
                                        </div>
                                   </div> 
                                   <div className="storySlick">
                                        <Slider {...settings}>
                                            {successStoryList.map((item,index) => (
                                                <div key={index}>
                                                    <div className="slick-cloned">
                                                        <div className="storyList" ><img width="100%" height="100%" src={item.img} alt="" /></div>  
                                                        <div className="storyDetails">
                                                            <div className="story-Name">{item.name}</div>
                                                            <div className="marriageDate"><span>Marriage Date 01</span>, <span>January 2023</span></div>
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
                                            <div className="benifit-title text-secondary">STAY CONNECTED WITH</div>
                                            <div className="benifit-title2">Yogjodi Apps</div>
                                        </h3>
                                        <div className="pb-3">Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment.</div>
                                        <div className=" text-center py-2">
                                            <img width={100} src="https://miro.medium.com/v2/resize:fit:405/1*k0h04CRy0j8MbBbqsodGAA.png" alt=""/>
                                        </div>  
                                        <div><Link to="#">Click here</Link>  <span className="opacity-75">to view more about Apps</span></div>                 
                                    </div>
                                    <div className="connectApp-Img">
                                        <img src={MobileView} alt=""/>                      
                                    </div>                           
                                </div> 

                                <div className="matrimonialContainer">
                                    <h3 className="py-3 text-center">
                                        <div className="benifit-title">BROWSE</div>
                                        <div className="benifit-title2"> Matrimonial <span>Profiles by</span></div>
                                    </h3>  
                                    <div className="text-center">
                                        <ul className="matrimonial-Browse">
                                            {matrimonial.map((m1,index)=>(
                                                <li className={showMatrimonial===index?"bgLight":""} key={index} onClick={()=>this.handleMatrimonial(index)}>{m1}</li>
                                            ))}
                                        </ul>
                                    </div>  
                                    <div className="pb-5 ">
                                        <div className="text-center px-2">
                                            <ul className="matrimonial-List">
                                                {
                                                    showMatrimonial===0?<React.Fragment>{motherTongue.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===1?<React.Fragment>{castes.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===2?<React.Fragment>{religion.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===3?<React.Fragment>{cities.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===4?<React.Fragment>{occupation.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===5?<React.Fragment>{states.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===6?<React.Fragment>{NRI.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:
                                                    showMatrimonial===7?<React.Fragment>{colleges.map((m1,index)=>(<MatrimonialFilter name={m1.name} index={index}/>))}</React.Fragment>:""
                                                }
                                            </ul> 
                                        </div>       
                                    </div>                      
                                </div>    

                                <div className="seoText">
                                    <div>
                                        <h4>Yogjodi</h4> 
                                        <small>Be Found</small>             
                                        {/* <img src="https://www.jeevansathi.com/images/jspc/commonimg/JSFooterLogo.png" alt=""/> */}
                                    </div>    
                                    <div className="seoText-Desc">
                                        <p>Yogjodi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Yogjodi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure 
                                        and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Yogjodi also maintains a dedicated
                                        Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families.</p>
                                    </div>  
                                    <div className="seoText-Note">Please note: Yogjodi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Yogjodi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content.</div>              
                                </div>   

                                <div>
                                    <div className="benifit-title2">Matched Gallery </div>
                                    <div className="d-flex p-4">
                                        <div className="gallryMatch">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOhHTtj-5-h2Qnt8Bljz_it4ZGiTsu4TSSQ&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="gallryMatch">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxZEGwBeuI7W6lY1nDjXu6NwBLmf79QNqrg&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="gallryMatch">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_s5WCijs7FDqljSFP3ZvcploosTSAqP5yQ&usqp=CAU" alt=""/>
                                        </div>
                                        <div className="gallryMore">
                                            <div>More</div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <footer>
                                <Footer/> 
                            </footer>  
                            <div className="copyRight"> All rights reserved © 2024 Yogjodi Internet Services. </div>
                        </div>
                    </div>

                <div className="homePage-Mobile">
                    <div className="bgImageMb">
                        <header className="header-container">
                            <Link className="yogjodi-logo--Mobile" to="/">
                                <img height="100%" width="100%"  src={YogJodiLogo} alt=""/>
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
                                    <div className="benifit-title">MORE THAN 20 YEARS OF</div>
                                    <div className="benifit-title2">Bringing People <span>Together</span> </div>
                                </div>
                                <div>
                                    <div className=" d-flex mt-3">
                                        <div className="imgInfo">
                                            <img width="60px" height="40px" src={New_Benefits} alt=""/>
                                            
                                        </div>
                                        <div className="infoText">
                                            <div className="">100% Manually Screened Profiles</div>
                                            <div className="textmore">Search by location, community, profession & more from lakhs of active profiles</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="imgInfo">
                                            <img width="60px" height="40px" src={New_Benefits2} alt=""/>
                                        </div>
                                        
                                        <div className="infoText">
                                            <div className="">Verification by Personal Visit</div>                                        
                                            <div className="textmore">Special listing of profiles verified by our agents through personal visits</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="imgInfo ml-n">
                                            <img width="60px" height="40px" src={New_Benefits3} alt=""/>
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
                                            <h5 className="benifit-title">Meet From Home</h5>
                                            <h2 className="benifit-title2">Impress them Over the <span>Distance</span></h2>
                                        </header>
                                        <div className="featuresSection-dflex">
                                            <div className="featuresSection-Card">
                                                <div className="featuresSectionImages ">
                                                    <img width="100%" height="100%" src={MatchImage} alt=""/>
                                                </div>
                                                <div className="underline3"></div>
                                                <h3>Yogjodi Match Hour</h3>
                                                <p>Register to join an online event to connect with members of your community in a short time</p>
                                                
                                            </div>
                                            <div className="featuresSection-Card">
                                                <div className="featuresSectionImages ">
                                                    <img width="100%" height="100%" src={VideoImage} alt=""/>
                                                </div>
                                                <div className="underline3"></div>
                                                <h3>Voice & Video Calling</h3>
                                                <p>Enjoy secure conversations using our voice & video calling services without revealing your number</p>
                                                
                                            </div>
                                            <div className="featuresSection-Card">
                                                <div className="featuresSectionImages">
                                                    <img width="100%" height="100%" src={VideoProfile} alt=""/>
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
                                        <div className="benifit-title">THREE SIMPLE STEPS TO</div>
                                        <div className="benifit-title2">Find the <span> One for You</span></div>
                                    </h2>
                                    <div className="featuresSectionContain">
                                        <div className="featuresSections--lists">
                                            <div className="featuresSectionImg">
                                                <div className="carouselImg">
                                                    <img height="100%" src={how_work} alt=""/>
                                                </div>
                                                <p><span>01</span> Define Your Partner Preferences</p>
                                            </div>
                                            <div className="featuresSectionImg">
                                                <div className="carouselImg">
                                                    <img height="100%" src={how_work2} alt=""/>
                                                </div>
                                                <p><span>02</span> Browse Profiles</p>
                                            </div>
                                            <div className="featuresSectionImg">
                                                <div className="carouselImg">
                                                    <img height="100%" src={how_work3} alt=""/>
                                                </div>
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
                                        <div className="benifit-title">UPGRADE YOUR ACCOUNT</div>
                                        <div className="benifit-title2"><span>Membership</span> Plans</div>
                                    </h2>
                                    <div className="membership">
                                        <Membership/>
                                    </div>
                                </div>
                                <div className="bgBlue"></div>

                                <div className="exclusivePad">
                                    <h2 className="text-center">
                                        <div className="benifit-title pb-1">PERSONALISED MATCH-MAKING SERVICE</div>
                                        <div className="benifit-title2">Introducing <span>Exclusive</span></div>
                                    </h2>   
                                    <img className="exclusiveImg" src={ExclusiveBgImg2} alt=""/>         
                                    <div className="exclusiveList">
                                        <ul>  
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
                                                <span>Meet Your Relationship Manager</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                                                <span>Communicate your preferences</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>
                                                <span>Choose from handpicked profiles</span>
                                            </li>
                                        </ul>
                                      
                                    </div>
                                </div>
                                <div className="successStory">
                                   <div className="storyMatched">
                                        <h3 className="m-0">
                                            <div className="benifit-title">LAKHS OF HAPPY COUPLES</div>
                                            <div className="benifit-title2">Matched by <span> Yogjodi</span></div>
                                        </h3>
                                   </div> 
                                   <div className="storySlick">
                                        {successStoryList.map((item,index) => (
                                            <div className="slick-current" key={index}>
                                                <div className="storyList" >
                                                    <img width="100%" height="100%" src={item.img} alt="" />
                                                    <div className="storyDetails">
                                                        <div className="story-Name">{item.name}</div>
                                                        <div className="marriageDate"><span>Marriage Date 01</span>, <span>January 2023</span></div>
                                                    </div>  
                                                </div>  
                                            </div>
                                        ))}
                                   
                                   </div>
                                </div>
                                <div>
                                    <div className="connectApp-Title">
                                        <h3 className="">
                                            <div className="benifit-title">Stay Connected With</div>
                                            <div className="benifit-title2"><span> Yogjodi</span> Apps</div>
                                        </h3>
                                   </div>   
                                    <div className="">
                                        <img className="connectApp" src={MobileView} alt=""/>                                                                                      
                                    </div> 
                                    <p className="connectAppText">Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment.</p>
                                    <div className="connectAppIcon">
                                        <img width="100%" src="https://i.ibb.co/F3RhkY4/Google-Play-Icon.png" alt=""/>
                                    </div>
                                </div>   
                                <div className="matrimonialContainer">
                                    <h3 className="m-0">
                                        <div className="benifit-title">BROWSE</div>
                                        <div className="benifit-title2"><span>Matrimonial</span> Profiles by</div>
                                    </h3>  
                                        <ul className="matrimonial-Browse">
                                            {matrimonial.map((m1,index)=>(
                                                <li key={index} onClick={()=>this.handleShowMb(index)}>
                                                <div className={"border-secondary pt-3 "+(index>0?"border-top":"")}></div>
                                                        {m1} 
                                                    <i className={"fa-solid float-right m-2 "+(showMatrialMb===index?"fa-angle-up":"fa-angle-down")}></i>
                                                    
                                                    <div className={showMatrialMb===index?"d-block":"d-none"}>
                                                        {showMatrialMb===0?(
                                                            <div className="row">
                                                                {motherTongue.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===1?(
                                                            <div className="row">
                                                                {castes.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===2?(
                                                            <div className="row">
                                                                {religion.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===3?(
                                                            <div className="row">
                                                                {cities.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===4?(
                                                            <div className="row">
                                                                {occupation.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===5?(
                                                            <div className="row">
                                                                {states.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===6?(
                                                            <div className="row">
                                                                {NRI.map((m1,index)=>(
                                                                    <div className="col-5 py-2 px-0" key={index}><div className="py-1">{m1.name}</div><div className="py-1 text-secondary">{m1.name} Brides</div><div className="text-secondary">{m1.name} Grooms</div></div>
                                                                ))}
                                                            </div>
                                                        ):
                                                        showMatrialMb===7?(
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
