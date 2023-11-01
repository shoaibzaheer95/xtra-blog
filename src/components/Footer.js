import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <footer className="row tm-row">
                <hr className="col-12"></hr>
                <div className="col-md-6 col-12 tm-color-gray">
                    Qucikly: <Link to="/about"  className="tm-external-link">About Xtra </Link>  |    
                    <Link to="/contact" className="tm-external-link"> Contact Us</Link>
                </div>
                <div className="col-md-6 col-12 tm-color-gray tm-copyright">
                    Copyright 2020 Xtra Blog Company Co. Ltd.
                </div>
            </footer>
     );
}
 
export default Footer;