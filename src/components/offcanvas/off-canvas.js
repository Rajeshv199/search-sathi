import { Link } from "react-router-dom"


export default function OffCanvas() {




    return <div className="offcanvas-body" >
        <div>
            <div className="text-dark" style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                <h6>Partner Preferencs</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
            <div className="text-dark" style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                <h6>Blocked/Ignored Profiles</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
            <Link to='/features/phone-book'>
                <div className="text-dark" style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                    <h6>Phonebook</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </Link>
            <Link to="/settings">
                <div className="text-dark" style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                    <h6>Account & Setting</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </Link>
            <Link to="/features/help">
                <div className="text-dark" style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                    <h6>Help & Support</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </Link>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                <h6>Success Stories</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 15px" }}>
                <h6>Video tour</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
        </div>
        <br />
        <p onClick={() => { }}>Logout</p>
    </div>
}