import React, {Component} from "react";
import {Link} from "react-router-dom";

class MatrimonialFilter extends Component{
    state={
        
    }
    render(){
        const {name,index} = this.props;
        return(
            <React.Fragment >
                {index>0?<li className="sub-h" key={index}>|</li>:""}
                <li>
                    <Link to="#" >{name}</Link>
                    <div className="subhobver">
                        <div className="materialIcons UpArrow"></div>
                        <div className="subhobver-pos">
                            <div className="lineHeight"></div>
                            <div className="hobverbg">
                                <Link className="materLink" to="#">{name} Brides</Link>
                                <span className="materLink">|</span>
                                <Link className="materLink" to="#">{name} Grooms</Link>
                            </div>
                        </div>
                    </div>
                </li>
            </React.Fragment>
              
        );
    }

}
export default MatrimonialFilter;