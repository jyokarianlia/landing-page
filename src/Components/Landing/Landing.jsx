import React, { Fragment } from 'react';
import logo from '../../images/logo.svg';
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
        </Fragment>
     );
}
 
export default Landing;