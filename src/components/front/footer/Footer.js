import React from "react";
import './Footer.css';
import logo from '../header/logo.png'

const Footer = () => {
    return(
        <footer>
            <img src={logo} alt='logo' className='logo' />
            <div className='footerDiv'>
                <p>Copyright Ⓒ The Cereal Factory - 2022</p>
            </div>
        </footer>
    )
}

export default Footer; 