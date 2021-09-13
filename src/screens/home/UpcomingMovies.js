import React from "react";
import Grid from "@material-ui/core/Grid";

function UpcomingMovies() {
  // use state for ucoming movies... each grid will carry single movie
  return (
    <div className="upComingContainer">
      <div className="promoBar">Upcoming Movies</div>
      <div className="upcomingMovieList">
        <Grid container className="movielist" spacing={2}>
          <Grid item xs={2}>
            Hi
          </Grid>
          <Grid item xs={2}>
            hello
          </Grid>
          <Grid item xs={2}>
            hoo
          </Grid>
          <Grid item xs={2}>
            hii
          </Grid>
          <Grid item xs={2}>
            Hi
          </Grid>
          <Grid item xs={2}>
            hello
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UpcomingMovies;
