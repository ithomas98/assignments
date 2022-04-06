import { Outlet, Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div id='navbar'>
            <h1 id='title'>Plumbing Company</h1>
            <nav >
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    )
}