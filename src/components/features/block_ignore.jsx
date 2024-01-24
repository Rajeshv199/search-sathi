import './style.css';
import { Link } from 'react-router-dom';
import LeftAside from '../profile_layout/left_aside';
import ProfileHeader from '../profile_layout/profileHeader';



export default function Block() {

    function goBack() {
        window.history.back();
    }



    return <div className='profile-details'>

        <ProfileHeader/>
        <div className='profile-detail-body'>
            <div>
                
            </div>

            <LeftAside />

            <div className='profile-box p-4'>
                <div className='d-flex'>
                    <Link className='text-dark' to="/profile_edit"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h6 className='px-3'>Blocked/Ignored Members</h6>
                </div>
                <div className='block-Info mt-5'>
                    <p>Review all your blocked profiles here!</p>
                    <p className='text-secondary mb-4'>Blocking profiles that you dislike would mean that they no longer see you on YogJodi.</p>
                    <Link to="/profile_details">View Matches</Link>
                </div>
            
                
            </div>
        </div>

    </div>
}