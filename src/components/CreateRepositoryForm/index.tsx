import React from "react";
import { Box, Button, Input, TextareaAutosize } from "@material-ui/core";
import useCreateRepositoryForm from "./operations";
import { Alert } from "@material-ui/lab";

const CreateRepositoryForm = () => {
  const {
    formValues,
    formErrors,
    handleSubmit,
    handleInputChange,
    data,
    error,
  } = useCreateRepositoryForm();
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {data && (
          <Alert variant="filled" severity="success">
            Repository is Created.
          </Alert>
        )}
        {error && (
          <Alert variant="filled" severity="error">
            Error Creating Repository.
          </Alert>
        )}
        <Box marginY={5}>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Repository Name"
            value={formValues?.name}
            onChange={handleInputChange}
            fullWidth
          />
          {formErrors?.name && <Box>{formErrors?.name}</Box>}
        </Box>

        <Box marginY={5}>
          <TextareaAutosize
            minRows={5}
            name="description"
            placeholder="Description"
            value={formValues?.description}
            onChange={handleInputChange}
            style={{
              outline: "none",
              width: "100%",
              border: "1px solid #ccc",
              padding: "0.25rem",
              borderRadius: "0.25rem",
              fontSize: "1rem",
            }}
          />

          {formErrors?.description && <Box>{formErrors?.description}</Box>}
        </Box>

        <Box>
          <Button variant="contained" color="primary" type="submit">
            Create Repository
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateRepositoryForm;
