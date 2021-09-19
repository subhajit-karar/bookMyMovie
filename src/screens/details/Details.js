import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import YouTube from "react-youtube";
import Rating from "@material-ui/lab/Rating";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./Details.css";

export default function Details(props) {
  const [movieDetails, setMoviedetails] = useState([]);
  const [starView, setStarValue] = React.useState(0);

  function loadData() {
    fetch(
      props.baseUrl+"movies/" +
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
  const detailsPageContent =  <Grid container spacing={2}>
         
  {/* left part starts here */}
  <Grid item xs={2}>
    <img src={movieDetails.poster_url} alt={movieDetails.title} />
  </Grid>
  {/* left part ends here */}
  {/* middle part starts here */}
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
      <strong>Plot: </strong>(
      {movieDetails.wiki_url ? (
        <Link to={{ pathname: movieDetails.wiki_url }} target="_blank">
          Wiki link
        </Link>
      ) : (
        ""
      )}
      ){movieDetails.storyline}
    </Typography>
    <br />
    <Typography component="p">
      <strong>Trailer: </strong>
    </Typography>
    <YouTube
      videoId={
        movieDetails.trailer_url
          ? movieDetails.trailer_url.split("?v=")[1]
          : ""
      }
      opts={opts}
      onReady={youtubeOnReady}
    />
  </Grid>
  {/* middle part ends here */}
  {/* Right part starts here */}
  <Grid item xs={3}>
    <Typography component="p">
      <strong> Rate this movie: </strong>
    </Typography>
    <Rating
      name="simple-controlled"
      value={starView}
      onChange={(event, newValue) => {
        setStarValue(newValue);
      }}
    />{" "}
    <br />
    <br />
    <Typography component="p">
      <strong> Artists: </strong>
    </Typography>
    <ImageList gap={6} cols={2}>
      {movieDetails.artists && movieDetails.artists.length > 1
        ? movieDetails.artists.map((item) => (
            <ImageListItem key={item.profile_url}>
              <img src={item.profile_url} alt={item.first_name} />
              <ImageListItemBar
                title={item.first_name + ` ` + item.last_name}
              />
            </ImageListItem>
          ))
        : ""}
    </ImageList>
  </Grid>
  {/* Right part ends here */}
</Grid>;

  return (
    <div className="detailsPage">
      <Header {...props} bookShow={movieDetails.id?movieDetails.id:null}/>
      <Typography component="div" className="page-container">
        <div className="breadCrumb">
          <Link to="/">{`< Back to Home`}</Link>
        </div>
        {(movieDetails.id)?detailsPageContent:<h2>No Movie Found, Please proceed to Home Page </h2>}
        
      </Typography>
    </div>
  );
}
