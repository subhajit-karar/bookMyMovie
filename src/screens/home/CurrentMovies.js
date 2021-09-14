import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Link } from "react-router-dom";

function CurrentMovies(props) {
  //use State for managging filter
  const [movieList, setMovie] = useState([]);
  useEffect(() => {
    let tempmovies = props.movies.filter((movie) => movie.status === "RELEASED");
    setMovie(tempmovies);
    //console.log("movielist",movieList);
  }, [props]);

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
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CurrentMovies;
