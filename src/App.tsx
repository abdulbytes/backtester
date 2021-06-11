import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import MovieListAutoCompleteComponent from "./MovieListAutoCompleteComponent";
import Header from "./shared/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <MovieListAutoCompleteComponent />
      </Container>
    </>
  );
};

export default App;
