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
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="request">
                    <button className='btnRequest'>Request Invite</button>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Landing;