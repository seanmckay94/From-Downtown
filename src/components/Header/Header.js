import React from 'react';
import './Header.css'
import logo from '../../assets/NBAlogos/NBALogo.gif';
import '../../assets/fonts/LmsILoveThisGame.ttf';

export default function Header() {

    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} alt="NBA logo" className="main-logo"></img>
            </div>
            <div className="header">
                <h1 className="header-text">From Downtown</h1>
            </div>
        </div>
    )
}