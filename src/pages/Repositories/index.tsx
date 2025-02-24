import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Alert } from "@material-ui/lab";
import { useRepositoriesPage } from "./operations";
import { useStyles } from "./styles";
import RepositoriesList from "../../components/RepositoryList";

const RepositoriesPage = () => {
  const { error, loading, repositories } = useRepositoriesPage();

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Repositories
      </Typography>
      {loading && <CircularProgress />}
      {error && (
        <Alert severity="error" color="error">
          Error loading Repository
        </Alert>
      )}

      {!loading && !error && (
        <Box marginTop={4}>
          <RepositoriesList repositories={repositories} />
        </Box>
      )}
    </Container>
  );
};

export default RepositoriesPage;
