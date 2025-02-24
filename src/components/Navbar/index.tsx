import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
