import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import { makeStyles, useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
//import FormHelperText from "@material-ui/core/FormHelperText";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField'



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

function Filter(props) {
  // console.log(props);



  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState();
  const [artists, setArtists] = useState();
  const [genrename, setGenrename] = React.useState([]);
  const [personName, setPersonName] = React.useState([]);

  useEffect(() => {
    setMovies(props.movieList);
    let tempGenres = [];
    let tempArtists = [];
    props.movieList.forEach(element => {
        element.genres.forEach(gen=>{
            if(tempGenres.indexOf(gen)===-1){
                tempGenres.push(gen);
            }
        });
        element.artists.forEach(artist=>{
            if(tempArtists.indexOf(artist.first_name+" "+artist.last_name)===-1){
                tempArtists.push(artist.first_name+" "+artist.last_name);
            }
        });
    });
    //console.log(tempArtists);
    setGenres(tempGenres);
    setArtists(tempArtists);

  }, [props]);

  const handlePersonChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleGenreChange = (event) => {
    setGenrename(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };



  return (
    <Card>
      <CardContent>
        <Typography
          className="theme-primary-color text-uppercase"
          gutterBottom={true}
        >
          Find movies by:
        </Typography>
        <br />
        <FormControl className="formControl">
          <InputLabel htmlFor="movieName">Movie Name</InputLabel>
          <Input id="movieName" value="" />
          {/* <FormHelperText >
                <span className="red">Required</span>
              </FormHelperText> */}
        </FormControl>
        <br />
        <br />
        <FormControl className="formControl">
          <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={genrename}
            onChange={handleGenreChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {genres && genres.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={genrename.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl className="formControl">
          <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handlePersonChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {artists && artists.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl className="formControl">
            <TextField
            id="releaseDateStart"
            label="Release Date Start"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
        />
        </FormControl>
        <br />
        <br />
        <FormControl className="formControl">
            <TextField
            id="releaseDateEnd"
            label="Release Date End"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
        />
        </FormControl>
        <br />
        <br />
      </CardContent>
      <CardActions>
        <Button fullWidth={true} variant="contained" color="primary">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}

export default Filter;
