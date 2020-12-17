import react, { Fragment } from 'react';
import phone from '../../images/image-mockups.png'
import logo from '../../images/logo.svg'
import fond from '../../images/bg-intro-mobile.svg'
import menu from '../../images/icon-hamburger.svg'
import imgFacebook from '../../images/icon-facebook.svg'
import imgInstagram from '../../images/icon-instagram.svg'
import imgPinterest from '../../images/icon-pinterest.svg'
import imgTwitter from '../../images/icon-twitter.svg'
import imgYoutube from '../../images/icon-youtube.svg'
import './landing.css'

const Landing = () => {
    return ( 
        <Fragment>
            <div className="header">
                <div>
                    <img src={ logo } alt=""/>
                </div>
                <div>
                    <img src={ menu } alt=""/>
                </div>
            </div>
            <div className='contenedor-fondo'>
                <img className='img-mobile' src={ fond } alt=""/>
            </div>
            <div className="contenedor-mobile">
                <img src={ phone } alt=""/>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            </div>
        </Fragment>
     );
}
 
export default Landing;