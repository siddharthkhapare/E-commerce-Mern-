import React from 'react'
import './css/Footer.css'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">COMPANY NAME<span /></h5>
                                <p>About the company, little discription will goes here.. </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Quick Links<span /></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><Link to="/">Home</Link></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><Link to="/">Products</Link></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><Link to="/Aboutus"> Aboutus</Link></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><Link to="/Contactus">Contactus</Link></div>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Opening Hours<span /></h5>
                                <p ><CloseIcon />Sunday : <span>closed </span></p>
                                <p ><DoneIcon />Mon - Sat : <span>8am - 8pm</span></p>                                                            
                            </div>
                            
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Contact Us<span /></h5>
                                <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                                <ul className="social-footer2">
                                    <li ><Link title="youtube"  to="https://www.youtube.com/"><YouTubeIcon /></Link></li>
                                    <li ><Link to="https://www.facebook.com/"  title="Facebook"><FacebookIcon /></Link></li>
                                    <li ><Link to="https://twitter.com"  title="Twitter"><TwitterIcon /></Link></li>
                                    <li ><Link title="instagram"  to="https://www.instagram.com/"><InstagramIcon /></Link></li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
                
            </div>
            <div className="copyright px-3 text-left text-sm-center"> 
                <p >Copyright Company Name © 2016. All rights reserved.</p>
            </div>
            
        </footer>

    );
}
export default Footer