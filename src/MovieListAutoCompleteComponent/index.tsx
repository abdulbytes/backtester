import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid, TextField } from "@material-ui/core";
import {
  getArrayOneList,
  getArrayTwoList,
  getArrayThreeList,
} from "./service/movie.apis";
import { Movie } from "../models/movie";

const MovieListAutoCompleteComponent = () => {
  const [optionForInputOne, setOptionForInputOne] = useState<Movie[]>([]);
  const [optionForInputTwo, setOptionForInputTwo] = useState<Movie[]>([]);
  const [optionForInputThree, setOptionForInputThree] = useState<Movie[]>([]);

  useEffect(() => {
    setOptionForInputOne(getArrayOneList());
    setOptionForInputTwo(getArrayTwoList());
    setOptionForInputThree(getArrayThreeList());
  }, []);

  const handleOnChange = (
    type: string,
    event: React.ChangeEvent<{}>,
    value: Movie | null
  ) => {
    switch (type) {
      case "input-one":
        console.log("Input One Value changed to : " + value?.title);
        break;
      case "input-two":
        console.log("Input two Value changed to : " + value?.title);
        break;
      case "input-three":
        console.log("Input three Value changed to : " + value?.title);
        break;
      default:
        console.log(value?.title);
    }
  };

  return (
    <Grid container spacing={2}>
       <Grid item xs={12}>
        <Autocomplete
          id="input-one"
          options={optionForInputOne}
          getOptionLabel={(option) => option.title}
          onChange={(event, value) => handleOnChange("input-one", event, value)}
          renderInput={(params) => (
            <TextField {...params} label="Input One" variant="outlined" />
          )}
        />
       </Grid>
       <Grid item xs={12}>
        <Autocomplete
          id="input-two"
          options={optionForInputTwo}
          getOptionLabel={(option) => option.title}
          onChange={(event, value) => handleOnChange("input-two", event, value)}
          renderInput={(params) => (
            <TextField {...params} label="Input Two" variant="outlined" />
          )}
        />
       </Grid>
       <Grid item xs={12}>  
        <Autocomplete
          id="input-three"
          options={optionForInputThree}
          getOptionLabel={(option) => option.title}
          onChange={(event, value) => handleOnChange("input-three", event, value)}
          renderInput={(params) => (
            <TextField {...params} label="Input Three" variant="outlined" />
          )}
        />
       </Grid>
    </Grid>
  );
};

export default MovieListAutoCompleteComponent;
