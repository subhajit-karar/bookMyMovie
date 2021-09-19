import React,{useState, useEffect} from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import UpcomingMovies from "./UpcomingMovies";
import CurrentMovies from "./CurrentMovies"
 

export default function Home(props){
    const [movieList, setMovie] = useState([]);
    //const upcomingMovies = 
    function loadData(){
      fetch(props.baseUrl+"movies/")
                    .then(input=>input.json())
                    .then(data=>setMovie(data.movies));
    }
    useEffect(() => {
      loadData();
     // console.log(movieList);
    }, []);
    return(
    <div className="main-Container">
        <Header {...props} />
        <UpcomingMovies {...props} movies={movieList}/>
        <CurrentMovies {...props} movies={movieList}/>

    </div>);
}