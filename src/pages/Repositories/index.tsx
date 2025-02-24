import { CircularProgress, Container, Typography } from "@material-ui/core";
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

      {!loading && !error && <RepositoriesList repositories={repositories} />}
    </Container>
  );
};

export default RepositoriesPage;
