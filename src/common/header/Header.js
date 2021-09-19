import React from "react";
import './Header.css';
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import ModalContainer from "../login/ModalContainer"




export default function Header(props){
    return(
    <div className="header">
        <Link to="/">
            <div className="logo">
                <img src={Logo}  alt="logo"/>
            </div>
        </Link>
        <div className="action">
            
            <ModalContainer {...props} />
        </div>

    </div>);
}