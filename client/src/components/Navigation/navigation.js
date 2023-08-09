// import { Link } from 'react-router-dom';
// import './navigation.css'
// // import Logo from './redlogo.png'
// import Logo from './blue-white-transparent.png'


// function Navigation(){
//     return(
//     <header className="header">
//         <img src={Logo} alt="logo"  height="70px" width="auto"/>
//         <nav>
//             <ul>
                // <li><Link to="/home" >Database</Link></li>
                // {/* <li><Link to="/analyze">Analyze</Link></li> */}
                // <li><Link to="/about-us">About Us</Link></li>
                // <li><Link to="/">Log Out</Link></li>
//             </ul>
//         </nav>
//     </header>
//     );
// }

// export default Navigation;



import { Link } from 'react-router-dom';
import './navigation.css'
import Logo from './blue-white-transparent.png'
import React, { useState } from 'react';


function Navigation(){

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };
      
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"  height="60px" width="auto"/>
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li><Link to="/home" >Database</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/">Log Out</Link></li>
                </ul>
            </div>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
    
}

export default Navigation
