import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_REPOSITORY } from "../../graphql/queries";

export type CreateRepoFormValues = {
  name?: string;
  description?: string;
};

export type CreateRepoFormErrors = {
  name?: string;
  description?: string;
};

const useCreateRepositoryForm = () => {
  const [formValues, setFormValues] = useState<CreateRepoFormValues>();
  const [formErrors, setFormErrors] = useState<CreateRepoFormErrors>();
  const [createRep, { data, loading, error }] = useMutation(CREATE_REPOSITORY);

  const validate = (): boolean => {
    const errors: CreateRepoFormErrors = {};

    if (!formValues?.name) {
      errors.name = "Repository Name is required";
    }
    if (!formValues?.description) {
      errors.description = "Repository Description is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      createRepository();
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const createRepository = async () => {
    try {
      const response = await createRep({
        variables: {
          name: formValues?.name,
          description: formValues?.description,
          visibility: "PUBLIC",
        },
      });
      console.log(
        "Repository created successfully:",
        response.data.createRepository.repository,
      );
    } catch (err) {
      console.error("Error creating repository:", err);
    }
  };

  return {
    formValues,
    formErrors,
    handleSubmit,
    handleInputChange,
    data,
    loading,
    error,
  };
};

export default useCreateRepositoryForm;
