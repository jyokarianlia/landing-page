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
                    <span className='li'><a href="http://">Home</a></span>
                    <span className='li'><a href="http://">About</a></span>
                    <span className='li'><a href="http://">Contact</a></span>
                    <span className='li'><a href="http://">Blog</a></span>
                    <span className='li'><a href="http://">Careers</a></span>
                </div>
                <div className="request">
                    <button className='btnRequest'>Request Invite</button>
                </div>
            </div>
            
            <div></div>
            <div></div>
            <div></div>
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
                    <a href="">About Us</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>
                </div>
                <div>
                    <a href="">Careers</a>
                    <a href="">Support</a>
                    <a href="">Provaci Policy</a>
                </div>
                <div></div>
                <div>
                    <button className='btn-format'>Request Invite</button>
                    <label htmlFor="">Easebank. All Rights Reserved</label>
                </div>
                <div></div>
            </div>
        </Fragment>
     );
}
 
export default Landing;