import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="head">
            <div className='main-nav'>
            <h1>Visite Countries</h1>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/ourApps">Our Apps</a>
                <a href="/aboutUs">About us</a>
                <a href="/contactUs">Contact us</a>
            </nav>
        </div>
        </div>
    );
};

export default Header;