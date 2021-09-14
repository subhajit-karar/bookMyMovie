import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import YouTube from "react-youtube";
import "./Details.css";

export default function Details() {
  const [movieDetails, setMoviedetails] = useState([]);

  function loadData() {
    fetch(
      "http://localhost:8086/api/v1/movies/" +
        window.location.pathname.replace(/.*\//, "")
    )
      .then((input) => input.json())
      .then((data) => setMoviedetails(data));
  }
  useEffect(() => {
    loadData();
    
  }, []);
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      //autoplay: 1,
    },
  };
  const youtubeOnReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div className="detailsPage">
      <Header />
      <Typography component="div" className="page-container">
        <div className="breadCrumb">
        <Link to="/">{`< Back to Home`}</Link>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={movieDetails.poster_url} alt={movieDetails.title} />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5" component="h2" gutterBottom>
              {movieDetails.title}
            </Typography>
            <Typography component="p">
              <strong>Genre: </strong>
              {movieDetails.genres ? movieDetails.genres.join() : ""}
            </Typography>
            <Typography component="p">
              <strong>Duration: </strong>
              {movieDetails.duration}
            </Typography>
            <Typography component="p">
              <strong>Release date: </strong>
              {movieDetails.release_date}
            </Typography>
            <Typography component="p">
              <strong>Rating: </strong>
              {movieDetails.rating}
            </Typography>
            <br />
            <Typography component="p">
              <strong>Plot: </strong>
              ({(movieDetails.wiki_url)?<Link to={{ pathname: movieDetails.wiki_url}} target="_blank">Wiki link</Link>:""}){movieDetails.storyline}
            </Typography>
            <br />
            <Typography component="p">
              <strong>Trailer: </strong>
            </Typography>
            <YouTube
              videoId={(movieDetails.trailer_url)?movieDetails.trailer_url.split("?v=")[1]:""}
              opts={opts}
              onReady={youtubeOnReady}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="h3" gutterBottom>
              Rate this movie
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}
