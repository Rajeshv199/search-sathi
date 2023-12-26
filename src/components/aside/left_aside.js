import { Link, useLocation } from "react-router-dom"

export default function LeftAside(){

    
    const location=useLocation();
    const route=location.pathname;

    return <div className="landing-child" id='one'>
    <div style={{ display: 'flex', justifyContent: "space-around", borderBottom: '1px solid #f0edee' }}>
        <div className='user-icon' >
            <svg viewBox="0 0 600 500" height='55' width='55' fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1 h-full w-full text-white/40"><path d="M14.261 537.722c-2.886-42.898 18.145-71.219 62.132-82.603 32.028-8.33 63.507-17.771 93.198-32.348 13.471-6.525 25.98-14.438 38.214-23.184 11.684-8.33 13.058-20.547 13.883-33.042.413-6.664-.412-13.327-.687-20.13 0-1.666-.138-3.332-1.512-4.443-11.409-9.995-13.471-24.295-17.045-37.761-1.512-5.97-2.749-12.217-3.712-18.326-.824-5.137-1.374-9.718-8.247-10.135-3.712-.277-5.773-3.748-6.323-7.357-2.887-17.771-7.286-35.263-7.561-53.311-.137-5.97-1.374-12.495 7.836-13.189 2.886-.139 1.512-3.193 1.237-5.137-2.2-17.631-3.987-35.401-2.337-53.171 1.375-16.105 3.711-31.792 16.083-43.732 1.374-1.25 1.787-3.61 2.474-5.553 5.086-13.189 14.983-22.49 24.743-31.93.55-.556 1.924-1.39 2.199-1.25 4.949 4.442 7.973-.556 11.272-2.638 23.78-14.716 49.623-17.77 76.702-14.022 14.983 2.082 29.829 4.304 44.812 6.525 2.062.278 4.536-.416 3.162 3.748-.962 3.055 3.024 3.471 5.086 4.582 12.234 6.247 23.231 13.883 30.653 25.961 5.361 8.885 7.286 18.326 4.674 28.46-.825 3.054-.687 5.831.275 8.746 8.11 24.434 10.859 49.563 6.873 75.107-.275 2.083-1.237 4.165 2.062 4.582 5.773.555 6.873 5.136 6.598 9.579-.962 11.523-.962 23.046-3.712 34.43-1.512 6.247-2.886 12.633-3.436 19.019-.55 6.248-3.299 10.69-10.035 10.968-4.398.139-4.123 3.193-4.536 6.247-2.199 15.41-5.498 30.543-11.134 44.981-.825 2.083-1.787 4.304-3.024 6.248-11.959 18.325-7.56 37.345-1.787 56.087 2.062 6.802 9.072 10.134 14.708 14.022 35.19 24.017 74.366 38.455 115.329 48.451 16.357 4.026 32.303 8.608 45.774 19.436 15.945 12.773 25.155 29.016 25.842 49.84.138 5.553 1.65 10.968.688 16.521H20.31c-1.925-.139-3.987-.278-6.048-.278Z" fill="#dadfe5"></path></svg>
        </div>
        <div>
            <h4 style={{fontFamily:'sans-serif'}}>Hi Sunit!</h4>
            <p>UVA537 <a href='#' style={{ color: "red" }}>Edit profile</a></p>
        </div>
    </div>
    <br />
    <div className='left-side'>
        <Link to='/landing'>
            <div className={(route==='/landing')? 'left-side-items text-dark':'left-side-items'} >
                <h6>Matches</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
        </Link>
        <div className='left-side-items'>
            <h6>Activity</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </div>
        <div className='left-side-items'>
            <h6>Search</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </div>
        <div className='left-side-items'>
            <h6>Messanger</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </div>
    </div>
</div>
}