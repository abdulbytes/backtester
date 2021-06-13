import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movies</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
};

export default Header;
