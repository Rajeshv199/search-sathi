import './style.css'
import logo from "./.././../asset/logo1.png"
import { Link } from 'react-router-dom';
import LeftAside from './left_aside';
import ProfileHeader from './profileHeader';



export default function Notification() {

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
                    <h5 className='text-center m-auto'>What's New?</h5>
                </div>
                
            </div>
        </div>

    </div>
}