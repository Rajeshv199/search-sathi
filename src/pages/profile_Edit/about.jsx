import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function About() {
    const[aboutFeild,setAboutFeild] = useState({about:"Surprise Visits: If possible, surprise your partner with a visit. Even short, unexpected visits can be incredibly special and memorable."});
    const history = useHistory()
    
    function handleChange(e){
        const {currentTarget: input} = e;
        let aboutFeild1 = {...aboutFeild}
        aboutFeild1[input.name] = input.value;
        setAboutFeild(aboutFeild1);
    }
    
    function handleSubmit(){
        history.push("/view/profile")
    }


    const{about} = aboutFeild;
    return (
    <div className='profile-details'>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/view/profile"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>About Me</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>
                    <div className='custom-textarea mt-5 px-3'>
                        <label>About Me</label>
                        <textarea name="about" value={about} className='w-100' rows="8" onChange={handleChange}></textarea>
                        <div className={'wordCont '+(about.length>=100?"text-success":"")}>{about.length}/100</div>
                    </div>
                    
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}