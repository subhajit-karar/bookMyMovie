import React from "react";
import './Header.css';
import Logo from '../../assets/logo.svg';

import Button from '@material-ui/core/Button';


export default function Header(){
    return(
    <div className="header">
        <div className="logo">
            <img src={Logo}  alt="logo"/>
        </div>
        <div className="action">
            <Button variant="contained" color="primary">
                Book Show
            </Button>
            <Button variant="contained">Login</Button>
        </div>

    </div>);
}