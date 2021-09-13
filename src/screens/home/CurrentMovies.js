import React from "react";
import Grid from "@material-ui/core/Grid";

function CurrentMovies() {
  //use State for managginf filter
  return (
    <div className="currentContainer">
      <div className="">
        <Grid container className="movielist" spacing={2}>
          <Grid item xs={9}>
            Current Movie list will come here
          </Grid>
          <Grid item xs={3}>
            Filter Section
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CurrentMovies;
