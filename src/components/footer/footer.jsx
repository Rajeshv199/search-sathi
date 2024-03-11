import React, {Component} from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class footer extends Component{
    state={}
    
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 1000,
          };
        return(
        
            <div>
               <div className="footer-container">
                    <div className="footer-List">
                        <div className="pt-3 d-flex">
                            <div className="footerWid">
                                <ul className="list-inline ">
                                    <li className="footerWid-Title">Explore</li>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Advanced search</Link></li>
                                    <li><Link to="#">Success stories</Link></li>
                                    <li><Link to="#">Sitemap</Link></li>
                                    <li><Link to="#">Create Horoscope</Link></li>
                                </ul>
                            </div>
                            <div className="footerWid">
                                <ul className="list-inline ">
                                    <li className="footerWid-Title">Services</li>
                                    <li><Link to="#">Membership Options</Link></li>
                                    <li><Link to="#">Yogjodi Careers</Link></li>
                                </ul>
                            </div>
                            <div className="footerWid">
                                <ul className="list-inline ">
                                    <li className="footerWid-Title">Help</li>
                                    <li><Link to="#">Contact us</Link></li>
                                    <li><Link to="#">Yogjodi centers (32)</Link></li>
                                </ul>
                                            </div>
                            <div className="footerWid">
                                <ul className="list-inline ">
                                    <li className="footerWid-Title">Legal</li>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Fraud Alert</Link></li>
                                    <li><Link to="#">Terms of use</Link></li>
                                    <li><Link to="#">3rd party terms of use</Link></li>
                                    <li><Link to="#">Privacy policy</Link></li>
                                    <li><Link to="#">Cookie policy</Link></li>
                                    <li><Link to="#">Privacy Features</Link></li>
                                    <li><Link to="#">Summons/Notices</Link></li>
                                    <li><Link to="#">Grievances</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AppFollow">
                    <div className="AppFollow-List">
                        <div className="footerWid">
                            <div className="pb-2"> App available on </div>
                            <Link to="#" className="footerIcon iconPostion"></Link>
                            <Link to="#" className="footerIcon iconPostion2"></Link>
                        </div>
                        <div className="footerWid">
                            <div className="pb-2"> Follow us on </div>
                            <Link to="#" className="footerIcon iconPostion3"></Link>
                            <Link to="#" className="footerIcon iconPostion4"></Link>
                            <Link to="#" className="footerIcon iconPostion5"></Link>
                            <Link to="#"><i class="fa-brands fa-youtube fa-xm px-2"></i></Link>
                            <Link to="#"><i class="fa-brands fa-linkedin-in fa-xm"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="footer-List">
                        <div className="partnerList">
                            <div className="partnerSite">Partner Sites</div>
                            <div className="footerContainer">
                                <Slider {...settings}>
                                        <div className="headfoots acre"></div>
                                        <div className="headfoots nc"></div>
                                        <div className="headfoots ng"></div>
                                        <div className="headfoots shiksha"></div>
                                        <div className="headfoots mydala"></div>
                                        <div className="headfoots pb"></div>
                                        <div className="headfoots zomato"></div>
                                        <div className="headfoots meritn"></div>
                                        <div className="headfoots ambitionbox"></div>
                                </Slider>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default footer;