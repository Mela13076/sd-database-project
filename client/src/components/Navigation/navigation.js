import { Link } from 'react-router-dom';
import './navigation.css'


function Navigation(){
    return(
    <header className="header">
        <h2 className="logo">Logo</h2>
        <nav>
            <ul>
                <li><Link to="/" >Database</Link></li>
                <li><Link to="/login">Login Page</Link></li>
                <li><Link to="/about-us">About Us Page</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Navigation;