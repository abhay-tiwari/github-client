import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  Alert,
} from "@mui/material";
import React from "react";
import { useRepositoriesPage } from "./operations";
import RepositoriesList from "../../components/RepositoryList";
import CustomDialog from "../../components/Dialog";
import CreateRepositoryForm from "../../components/CreateRepositoryForm";

const RepositoriesPage = () => {
  const {
    error,
    loading,
    repositories,
    openCreateRepoDialog,
    isCreateRepoOpen,
    closeCreateRepoDialog,
  } = useRepositoriesPage();

  return (
    <Container maxWidth="lg" sx={{ marginTop: "1.5rem" }}>
      <Box display="flex">
        <Box>
          <Typography variant="h5" gutterBottom>
            Repositories
          </Typography>
        </Box>
        <Box marginLeft="auto">
          <Button
            variant="contained"
            color="primary"
            onClick={openCreateRepoDialog}
          >
            Create Repository
          </Button>
        </Box>
      </Box>
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
      {
        <CustomDialog
          title="Create Repository"
          open={isCreateRepoOpen}
          handleCloseDialog={() => closeCreateRepoDialog()}
        >
          <CreateRepositoryForm />
        </CustomDialog>
      }
    </Container>
  );
};

export default RepositoriesPage;
