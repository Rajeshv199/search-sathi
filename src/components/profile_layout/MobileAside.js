import { Link } from "react-router-dom"


export default function MobileAside() {




    return <div className='mobile-aside'>
        <Link to='/landing' className="mobile-aside-child text-dark">
            <svg viewBox="0 0 24 24" height='24' width='24' fill="none" xmlns="http://www.w3.org/2000/svg" class="block h-5 w-5 text-primary-500 lg:hidden"><path d="M16.19 3.197A6.29 6.29 0 0 1 20.16 5a6.27 6.27 0 0 1-.08 8.89l-6 6.05a3 3 0 0 1-4.24 0l-6-6.05A6.27 6.27 0 0 1 12 4.41a6.29 6.29 0 0 1 4.19-1.213Z" fill="red"></path></svg>
            <p>Matches</p>
        </Link>
        <div className="mobile-aside-child">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="block h-5 w-5 lg:hidden"><path d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>
            <p>Activity</p>
        </div>
        <div className="mobile-aside-child">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="block h-5 w-5 lg:hidden"><path d="M21.07,16.83,19,14.71a3.08,3.08,0,0,0-3.4-.57l-.9-.9a7,7,0,1,0-1.41,1.41l.89.89A3,3,0,0,0,14.71,19l2.12,2.12a3,3,0,0,0,4.24,0A3,3,0,0,0,21.07,16.83Zm-8.48-4.24a5,5,0,1,1,0-7.08A5,5,0,0,1,12.59,12.59Zm7.07,7.07a1,1,0,0,1-1.42,0l-2.12-2.12a1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0l2.12,2.12A1,1,0,0,1,19.66,19.66Z"></path></svg>
            <p>Search</p>
        </div>
        <div className="mobile-aside-child">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="block h-5 w-5 lg:hidden"><path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
            <p>Messanger</p>
        </div>
        <div className="mobile-aside-child">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="block h-5 lg:hidden"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5a1 1 0 0 1 .832.445l3.395 5.093 4.148-3.319a1 1 0 0 1 1.606.977l-2 10A1 1 0 0 1 19 19H5a1 1 0 0 1-.98-.804l-2-10a1 1 0 0 1 1.605-.977l4.148 3.319 3.395-5.093A1 1 0 0 1 12 5Zm0 2.803-3.168 4.752a1 1 0 0 1-1.457.226L4.52 10.496 5.819 17H18.18l1.301-6.504-2.856 2.285a1 1 0 0 1-1.457-.226L12 7.803Z" fill="#98A3AF"></path></svg>
            <p>Upgrade</p>
        </div>
    </div>
}