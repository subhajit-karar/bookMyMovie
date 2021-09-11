import React from "react";
import './Header.css';
import Logo from '../../assets/logo.svg';

export default function Header(){
    return(
    <div className="header">
        <div className="logo">
            <img src={Logo}  alt="logo"/>
        </div>
        
    </div>);
}