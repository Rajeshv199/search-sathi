import './style.css'
import logo from "./.././../asset/logo1.png"
import { Link } from 'react-router-dom';
import OffCanvas from '../offcanvas/off-canvas';
import LeftAside from './left_aside';
import RightAside from './right_aside';
import ProfileHeader from './profileHeader';



export default function Notification() {

    function goBack() {
        window.history.back();
    }



    return <div className='profile-details'>

        <ProfileHeader/>
        <div className='profile-detail-body'>

            <LeftAside />
            <div className='noti-main' >
                <div id="notification">
                    <div style={{ display: 'inline' }} onClick={(e) => { e.preventDefault(); goBack() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 text-neutral-800"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"></path></svg>
                    </div>
                    <h4 style={{ display: 'inline', marginLeft: '35%' }}>What's New?</h4>
                </div>
            </div>
            <RightAside />

        </div>

    </div>
}