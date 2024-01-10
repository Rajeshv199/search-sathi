import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

class BrowseContent extends Component{
    state={
        motherTongue:[{name:"Bihari",link:"#"},{name:"Bengali",link:"#"},{name:"Hindi Delhi",link:"#"},{name:"Hindi",link:"#"},{name:"Gujarati",link:"#"},{name:"Kannada",link:"#"},{name:"Malayalam",link:"#"},{name:"Marathi",link:"#"},{name:"Oriya",link:"#"},{name:"Punjabi",link:"#"},{name:"Rajasthani",link:"#"},{name:"Tamil",link:"#"},{name:"Telugu",link:"#"},{name:"Hindi",link:"#"},{name:"Hindi MP",link:"#"},{name:"Konkani",link:"#"},{name:"Himachali",link:"#"},{name:"Haryanvi",link:"#"},{name:"Assamese",link:"#"},{name:"Kashmiri",link:"#"},{name:"Sikkim Nepali",link:"#"},{name:"Tulu",link:"#"}],
        castes:[{name:"Aggarwal",link:"#"}, {name:"Kanyakubj Brahmin",link:"#"}, {name:"Gaur Brahmin",link:"#"}, {name:"Brahmin",link:"#"}, {name:"Jat",link:"#"}, {name:"Kayastha",link:"#"}, {name:"Khatri",link:"#"},{name:"Kshatriya",link:"#"}, {name:"Maratha",link:"#"}, {name:"Rajput",link:"#"}, {name:"Sindhi",link:"#"}, {name:"Sunni",link:"#"}, {name:"Arora",link:"#"},{name:"Shwetamber",link:"#"}, {name:"Yadava",link:"#"}, {name:"Bania",link:"#"},{name:"Scheduled Caste",link:"#"}, {name:"Digamber",link:"#"}, {name:"Sikh Jat",link:"#"},{name:"Gupta",link:"#"}, {name:"Teli",link:"#"}, {name:"Vaishnav",link:"#"}, {name:"Kurmi kshatriya",link:"#"}],
        religion:[{name:"Hindu",link:"#"},{name:"Muslim",link:"#"},{name:"Christian",link:"#"},{name:"Sikh",link:"#"},{name:"Buddhist",link:"#"},{name:"Jain",link:"#"},{name:"Bahai",link:"#"}],
        cities:[ {name:"New Delhi",link:"#"}, {name:"Seattle",link:"#"}, {name:"Panvel",link:"#"}, {name:"Navi Mumbai",link:"#"}, {name:"Los Angeles",link:"#"}, {name:"Illinois",link:"#"}, {name:"Denver",link:"#"}, {name:"Delhi",link:"#"},{name:"Mumbai",link:"#"}, {name:"Kolkata",link:"#"},{name:"Chennai",link:"#"}, {name:"Bangalore",link:"#"}, {name:"Pune",link:"#"}, {name:"Ahmedabad",link:"#"}, {name:"Hyderabad",link:"#"}, {name:"Lucknow",link:"#"}, {name:"Chandigarh",link:"#"}, {name:"Nagpur",link:"#"}, {name:"Jaipur",link:"#"}, {name:"Noida",link:"#"}, {name:"Indore",link:"#"}],
        occupation:[ {name:"IT Software",link:"#"}, {name:"Teacher",link:"#"}, {name:"CA Accountant",link:"#"}, {name:"Businessman",link:"#"}, {name:"Doctors Nurse",link:"#"}, {name:"Govt. Services",link:"#"} , {name:"Lawyers",link:"#"}, {name:"Defence",link:"#"}, {name:"IAS",link:"#"}, {name:"Cyber Network Security",link:"#"} , {name:"Engineers",link:"#"}, {name:"Hotels Hospitality Professional",link:"#"}, {name:"NGO Social Services",link:"#"}, {name:"Nurse",link:"#"}, {name:"Police",link:"#"} ],
        states:[ {name:"Maharashtra",link:"#"}, {name:"Uttar Pradesh",link:"#"}, {name:"Karnataka",link:"#"}, {name:"Andhra Pradesh",link:"#"}, {name:"Tamil Nadu",link:"#"}, {name:"West Bengal",link:"#"}, {name:"Madhya Pradesh",link:"#"}, {name:"Gujarat",link:"#"}, {name:"Haryana",link:"#"}, {name:"Bihar",link:"#"}, {name:"Kerala",link:"#"}, {name:"Rajasthan",link:"#"}, {name:"Punjab",link:"#"}, {name:"Orissa",link:"#"},{name: "Assam",link:"#"},{name:"jammu & Kashmir",link:"#"} , {name:"Himachal Pradesh",link:"#"}, {name:"Jharkhand",link:"#"}, {name:"Chhattisgarh",link:"#"}, {name:"Uttarakhand",link:"#"}, {name:"Lakshadweep",link:"#"}],
        NRI:[{name:"NRI",link:"#"}, {name:"United States",link:"#"}, {name:"Canada",link:"#"} , {name:"United Kingdom",link:"#"}, {name:"Australia",link:"#"}, {name:"France",link:"#"}, {name:"Italy",link:"#"}, {name:"Netherlands",link:"#"}, {name:"Saudi Arabia",link:"#"}, {name:"Spain",link:"#"}, {name:"Sweden",link:"#"}, {name:"Switzerland",link:"#"}],
        // colleges:[ {name:"ICAI",link:"#"}, {name:"NIT",link:"#"}, {name:"ISB",link:"#"}, {name:"IIIT",link:"#"}, {name:"IIM",link:"#"}, {name:"IIT",link:"#"}],
    }

    render(){
        const {motherTongue,castes,religion,cities,occupation,states,NRI,colleges} = this.state;
        const {showList} = this.props;
        return(
            <React.Fragment >
                {showList==1?(
                    <div className="row ">
                        {motherTongue.map((m1,index)=>(
                            <div className="col-4 list-element" key={index}><Link to={m1.link}>{m1.name}</Link></div>
                        ))}
                    </div>
                ):showList==2?(
                    <div className="row ">
                    {castes.map((c1,index)=>(
                        <div className="col-4 list-element" key={index}><Link to={c1.link}>{c1.name}</Link></div>
                    ))}
                    </div>
                ):showList==3?(
                    <div className="row ">
                    {religion.map((c1,index)=>(
                        <div className="col-4 list-element" key={index}><Link to={c1.link}>{c1.name}</Link></div>
                    ))}
                    </div>
                ):showList==4?(
                    <div className="row ">
                    {cities.map((c1,index)=>(
                        <div className="col-4 list-element" key={index}><Link to={c1.link}>{c1.name}</Link></div>
                    ))}
                    </div>
                ):showList==5?(
                    <div className="row ">
                    {occupation.map((c1,index)=>(
                        <div className="col-4 list-element" key={index}><Link to={c1.link}>{c1.name}</Link></div>
                    ))}
                    </div>
                ):showList==6?(
                    <div className="row ">
                    {states.map((c1,index)=>(
                        <div className="col-4 list-element" key={index}><Link to={c1.link}>{c1.name}</Link></div>
                    ))}
                    </div>
                ):showList==7?(
                    <div className="row ">
                    {NRI.map((c1,index)=>(
                        <div className="col-4 list-element" key={index}><Link to={c1.link}>{c1.name}</Link></div>
                    ))}
                    </div>
                ):""}
                                                                   
            </React.Fragment>
        );
    }

}
export default BrowseContent;