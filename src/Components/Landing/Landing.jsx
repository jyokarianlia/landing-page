import React, { Fragment } from 'react';
import logo from '../../images/logo.svg';
import iconFacebook from '../../images/icon-facebook.svg';
import iconYoutube from '../../images/icon-youtube.svg';
import iconTwiter from '../../images/icon-twitter.svg';
import iconPinterest from '../../images/icon-pinterest.svg';
import iconInstagram from '../../images/icon-instagram.svg';
import './landing.css';

const Landing = () => {
    return ( 
        <Fragment>
            <div className="header">
                <div className="logo">
                    <img src={ logo } alt=""/>
                </div>
                <div className="menu">
                    <div></div>
                    <div className='li'><a href="http://">Home</a></div>
                    <div className='li'><a href="http://">About</a></div>
                    <div className='li'><a href="http://">Contact</a></div>
                    <div className='li'><a href="http://">Blog</a></div>
                    <div className='li'><a href="http://">Careers</a></div>
                </div>
                <div>
                    <button className='btnRequest'>Request Invite</button>
                </div>
            </div>
            
            <div className='fondo-claro'>
                <div className='fondo-oscuro'></div>
            </div>

            <div className='footer'>
                <div></div>
                <div>
                    <img src={ iconFacebook } alt=""/>
                    <img src={ iconYoutube } alt=""/>
                    <img src={ iconTwiter } alt=""/>
                    <img src={ iconPinterest } alt=""/>
                    <img src={ iconInstagram } alt=""/>
                </div>
                <div>
                    <a href="http://">About Us</a>
                    <a href="http://">Contact</a>
                    <a href="http://">Blog</a>
                </div>
                <div>
                    <a href="http://">Careers</a>
                    <a href="http://">Support</a>
                    <a href="http://">Privacy Policy</a>
                </div>
                <div></div>
                <div className='bo'>
                    <button className='btnRequest'>Request Invite</button>
                    <label htmlFor="">&copy; Easebank. All Rights Reserved</label>
                </div>
                <div></div>
            </div>
        </Fragment>
     );
}
 
export default Landing;