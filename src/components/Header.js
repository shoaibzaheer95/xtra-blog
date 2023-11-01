import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 

        <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="tm-site-header">
                <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
                <h1 className="text-center">Xtra Blog</h1>
            </div>
            <nav className="tm-nav" id="tm-nav">            
                <ul>
                    <li className="tm-nav-item active">
                    
                    <Link to="/" className="tm-nav-link">Home <i className="fas fa-home"></i></Link>
                    </li>
                   
                    <li className="tm-nav-item">
                            <Link to="/about"  className="tm-nav-link">About Xtra <i className="fas fa-users"></i></Link>
                   </li>
                    <li className="tm-nav-item">
                        <Link to="/contact" className="tm-nav-link"> Contact Us <i className="far fa-comments"></i></Link>
                    </li>
                </ul>
            </nav>
            <div className="tm-mb-65">
                <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                    <i className="fab fa-facebook tm-social-icon"></i>
                </a>
                <a href="https://twitter.com" className="tm-social-link">
                    <i className="fab fa-twitter tm-social-icon"></i>
                </a>
                <a href="https://instagram.com" className="tm-social-link">
                    <i className="fab fa-instagram tm-social-icon"></i>
                </a>
                <a href="https://linkedin.com" className="tm-social-link">
                    <i className="fab fa-linkedin tm-social-icon"></i>
                </a>
            </div>
            
        </div>
    </header>

     );
}
 
export default Header;