import { Link } from 'react-router-dom';
import LeftAside from '../../pages/profile_layout/left_aside';
import ProfileHeader from '../../pages/profile_layout/profileHeader';



export default function PhoneBook() {

    return <div className='profile-details'>

        <ProfileHeader/>
        <div className='profile-detail-body'>
            <LeftAside />

            <div className='profile-box p-4'>
                <div className='d-flex'>
                    <Link className='text-dark' to="/profile_edit"><i className="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-auto'>Phonebook</h5>
                </div>
                <div className='block-Info mt-5'>
                    <p>Discover your viewed contacts here</p>
                    <p className='text-secondary mb-4'>Find contact details of your matches & get to know them better with a membership.</p>
                    <Link to="#">Upgrade Membership</Link>
                </div>
            
                
            </div>
        </div>

    </div>
}