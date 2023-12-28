import Footer from './../../footer/footer'
import successBackground from './../../asset/success-bakground.jpg'
import logo from "./.././../asset/logo1.png"
import { Link } from 'react-router-dom'
import userVector from './../../asset/user-vector.png'

export default function SuccessStories() {

    return <div className='success-main'>
        <div className="success-nav" >
            <div className="help-nav-child1">
                <img src={logo} />
            </div>
            <div className="help-nav-child2">
                <Link to={"/landing"}><p>MATCHES</p></Link>
                <p>ACTIVITY</p>
                <p>SEARCH</p>
                <p>UPGREAD</p>
                <Link to={"/features/help"}><p>HELP</p></Link>
            </div>
            <div className="help-nav-child3"  >
                <Link to="/notification">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
                </Link>
                <div >
                    <img src={userVector} height={40} width={40} style={{ border: '1px', borderRadius: '50%' }} />
                </div>
            </div>

        </div>
        <div >
            <div style={{ zIndex: '-1', backgroundColor: 'white', width: '100%' }}>
                <img src={successBackground} width={'100%'} />
            </div>

            <div className='success-header-content'>
                <h2 style={{ fontFamily: "sans-serif Roboto",color:'#d9475c',fontWeight:'350'}}>More than 204,123 Success Stories and counting</h2>
                <br/><br/>
                <p style={{ fontFamily: "sans-serif Roboto"}}>As our numerous success stories prove, marriages are really made at Jeevansathi.com. Here's wishing all our members who found their ideal partner here a lifetime of happiness! If you found your dream match through Jeevansathi.com, we would like to hear your success story too. So, just send in your wedding/ engagement photograph and it will be exclusively featured in our "success stories".</p>
                <br/>
                <button style={{ padding: '10px 20px',backgroundColor:'#d9475c',border:'none',color:'white' }}>Send us your success story</button>
            </div>
        </div>
        <div style={{ height: '700px',display:'flex',justifyContent:'center',alignItems:'center' }}>
            <h1>Render the data from backend</h1>
        </div>
        <Footer />
        <div style={{ width: '100%', height: '40px', backgroundColor: '#e1e4e7' }}>
            <p style={{ textAlign: 'center', paddingTop: '10px' }}>All rights reserved © 2016 Jeevansathi Internet Services.</p>
        </div>
    </div>
}