import { Fragment } from 'react';
import phone from '../../images/image-mockups.png'
import logo from '../../images/logo.svg'
import fond from '../../images/bg-intro-mobile.svg'
import menu from '../../images/icon-hamburger.svg'
import img1 from '../../images/icon-online.svg'
import img2 from '../../images/icon-budgeting.svg'
import img3 from '../../images/icon-onboarding.svg'
import img4 from '../../images/icon-api.svg'
import img5 from '../../images/image-currency.jpg'
import img6 from '../../images/image-restaurant.jpg'
import img7 from '../../images/image-plane.jpg'
import img8 from '../../images/image-confetti.jpg'
import imgFacebook from '../../images/icon-facebook.svg'
import imgYoutube from '../../images/icon-youtube.svg'
import imgTwitter from '../../images/icon-twitter.svg'
import imgPinterest from '../../images/icon-pinterest.svg'
import imgInstagram from '../../images/icon-instagram.svg'
import './landing.css'

const Landing = () => {
    return ( 
        <Fragment>
            <div className='contenedor-fondo'>
                <img className='img-mobile' src={ fond } alt=""/>
            </div>

            <div className="contenedor-mobile">
                <img src={ phone } alt=""/>
            </div>
            
            <div className="header">
                <img src={ logo } alt=""/>
            </div>

            <label htmlFor="check-menu">
                <img src={ menu } alt=""/>
            </label>
            <input type='checkbox' id='check-menu' />
            
            <ul className="menu">
                <li><a href='http://'>Home</a></li>
                <li><a href='http://'>About</a></li>
                <li><a href='http://'>Contact</a></li>
                <li><a href='http://'>Blog</a></li>
                <li><a href='http://'>Careers</a></li>
            </ul>

            <div className='section1'>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgetin, investing, and much more.</p>
                <button className='btn'>Request Invite</button>
            </div>

            <div className='section2'>
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to your bank account into your financial hub. Control your finances like never before.</p>
                <div>
                    <img src={ img1 } alt=""/>
                    <h3>Online Bankink</h3>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>

                    <img src={ img2 } alt=""/>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly your goes each month. Receive notifications when you're close to your hitting limits.</p>

                    <img src={ img3 } alt=""/>
                    <h3>Fast Onboarding</h3>
                    <p>We don't do branches. Open your account in minutes online and star taking control of ypur finances right away.</p>

                    <img src={ img4 } alt=""/>
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>

            <div className='section3'>
                <h2>Lastest Articles</h2>
                <img src={ img5 } alt=""/>
                <p className='autor'>By Claire Robinson</p>
                <h3>Receive money in any currency with no fees</h3>
                <p>The world is getting smaller amd we're becoming more mobile. So why should you be forced to only receive money in a single.</p>

                <img className='pt-4' src={ img6 } alt=""/>
                <p className='autor'>By Wilson Hutton</p>
                <h3>Treat yourself whithout worrying about money</h3>
                <p>Our simple budgeting feature allows you to separeta-out your spending and set realistic limits each month. That means you...</p>

                <img className='pt-4' src={ img7 } alt=""/>
                <p className='autor'>By Wilson Hutton</p>
                <h3>Take your Easybank card wherever you go</h3>
                <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. Well even show you...</p>

                <img className='pt-4' src={ img8 } alt=""/>
                <p className='autor'>By Claire Robinson</p>
                <h3>Our invite-only Beta accounts are now live!</h3>
                <p>After a lot of hard work by thewhole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
            </div>

            <footer>
                <img src={ logo } alt=""/>
                <div className="red-social">
                    <img src={ imgFacebook } alt=""/>
                    <img src={ imgYoutube } alt=""/>
                    <img src={ imgTwitter } alt=""/>
                    <img src={ imgPinterest } alt=""/>
                    <img src={ imgInstagram } alt=""/>
                </div>

                <ul>
                    <li><a href="https://">About Us</a></li>
                    <li><a href="https://">Contact</a></li>
                    <li><a href="https://">Blog</a></li>
                    <li><a href="https://">Careers</a></li>
                    <li><a href="https://">Support</a></li>
                    <li><a href="https://">Privacy Policy</a></li>
                </ul>

                <button className='btn'>Request Invite</button>

                <p>&copy; Easebank. All Rights Reserved</p>
            </footer>
        </Fragment>
     );
}
 
export default Landing;