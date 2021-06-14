import React, { useState } from "react";
import MovieListAutoCompleteComponent from "./MovieListAutoCompleteComponent";
import Header from "./shared/Header";
import RadioGroupsComponent from "./RadioGroupsComponent";
import { Container } from "@material-ui/core";

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleRadioSelect = (value: number) => {
    setSelectedNumber(value);
  };

  return (
    <>
      <Header />
      <Container>
        <RadioGroupsComponent handleRadioSelect={handleRadioSelect} />
        {Array.from({ length: selectedNumber }, (v, i) => (
          <MovieListAutoCompleteComponent />
        ))}
      </Container>
    </>
  );
};

export default App;
