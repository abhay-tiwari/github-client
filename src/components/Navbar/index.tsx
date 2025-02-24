import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Github Client
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
