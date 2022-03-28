import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../header/logo.png'

const Header = () => {
    return(
        <header>
            <div>
                <h1>
                    <Link to='/'><img src={logo} alt='logo' className='logo' /></Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>
                            <i className="fa fa-home"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <i className="fa fa-user"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cart'>
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header; 