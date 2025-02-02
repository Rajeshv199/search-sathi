import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amex from "../../assets/images/amex.jpg";
import maestro from "../../assets/images/maestro.png";
import rupay from "../../assets/images/rupay.png";
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
               <div className="footer-container2">
                    <div className="footer-List d-flex">
                        <div className="foterLive">
                            <span>1-800-419-6299 (Toll Free)</span>
                            <span> | </span>
                            <span>Live Chat</span>
                        </div>
                        <div>
                            <ul className="footerCard d-flex">
                                <li className="headfoots visa"></li> 
                                <li className="headfoots mcard"></li>
                                <li className=""><img src={amex} alt="amex" /></li>
                                <li><img src={maestro} alt="" /></li>
                                <li><img src={rupay} alt="" /></li>
                            </ul>
                        </div>
                        <div className="ml-5">
                            <ul className="footerCard d-flex">
                                <li className="headfoots facebok"></li>
                                <li className="headfoots twiter"></li>
                                <li className="headfoots linkin"></li>
                                <li className="headfoots goglep"></li>
                            </ul>
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
                <div className="copyRight"> All rights reserved © 2024 Yogjodi Internet Services. </div>
            </div>
        );
    }

}
export default footer;