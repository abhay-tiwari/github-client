import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Github Client
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
