import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Link } from "react-router-dom";

import Filter from "./Filter";

function CurrentMovies(props) {
  //use State for managging filter
  const [movieList, setMovie] = useState([]);
  const [resetMovieList, setResetMovieList] = useState([]);
  useEffect(() => {
    let tempmovies = props.movies.filter((movie) => movie.status === "RELEASED");
    setMovie(tempmovies);
    setResetMovieList(tempmovies);
    //console.log("movielist",movieList);
  }, [props]);

  const handleFilterUpdate = (val) => {
    let tempMovieList = [...movieList];
   // console.log("Before Filter",tempMovieList);
    if(val.movieName.length > 0 || val.genrename.length > 0 || val.personName.length > 0){
      tempMovieList =  tempMovieList.filter((item)=>{
        if(val.movieName.length > 0 && item.title.toLowerCase().indexOf(val.movieName.toLowerCase()) !== -1){
          return item;
        }else if(val.genrename.length > 0 ){
          for (const gen of val.genrename){
            if(item.genres.includes(gen)){
              return item;
            }
          }
        }else if(val.personName.length > 0 ){
          for (const person of val.personName){
            for(const artist of item.artists){
              if(artist.first_name === person.split(" ")[0]){
                return item;
              }
            }
          }
        }
        return false;
      
      });
      
     // console.log("After Filter",tempMovieList);
      setMovie(tempMovieList);
    }else{
      setMovie(resetMovieList)
    }
    
  }

  return (
    <div className="currentContainer">
      <div className="">
        <Grid container className="movielist" spacing={4}>
          <Grid item xs={9}>
            <ImageList gap={12} rowHeight={338} cols={4.2}>
              {movieList.map((item) => (
                <ImageListItem key={item.poster_url}>
                  <Link to={"/movie/" + item.id}>
                    {" "}
                    <img src={item.poster_url} alt={item.title} />
                    <ImageListItemBar 
                      title={item.title} 
                      subtitle={<span>Release Date: {item.release_date}</span>}
                    />
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item xs={3}>
              <Filter movieList={movieList} filterTrigger={handleFilterUpdate}/>
          
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CurrentMovies;
