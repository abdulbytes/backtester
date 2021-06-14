import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
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
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Autocomplete
        id="input-one"
        options={optionForInputOne}
        getOptionLabel={(option) => option.title}
        style={{ width: 300, margin: 10 }}
        onChange={(event, value) => handleOnChange("input-one", event, value)}
        renderInput={(params) => (
          <TextField {...params} label="Input One" variant="outlined" />
        )}
      />
      <Autocomplete
        id="input-two"
        options={optionForInputTwo}
        getOptionLabel={(option) => option.title}
        style={{ width: 300, margin: 10 }}
        onChange={(event, value) => handleOnChange("input-two", event, value)}
        renderInput={(params) => (
          <TextField {...params} label="Input Two" variant="outlined" />
        )}
      />
      <Autocomplete
        id="input-three"
        options={optionForInputThree}
        getOptionLabel={(option) => option.title}
        style={{ width: 300, margin: 10 }}
        onChange={(event, value) => handleOnChange("input-three", event, value)}
        renderInput={(params) => (
          <TextField {...params} label="Input Three" variant="outlined" />
        )}
      />
    </div>
  );
};

export default MovieListAutoCompleteComponent;
