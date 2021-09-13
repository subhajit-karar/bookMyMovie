import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import UpcomingMovies from "./UpcomingMovies";
import CurrentMovies from "./CurrentMovies"
 

export default function Home(){
    return(
    <div className="main-Container">
        <Header />
        <UpcomingMovies />
        <CurrentMovies />

    </div>);
}