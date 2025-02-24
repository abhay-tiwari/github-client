import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES_QUERY } from "../../graphql/queries";
import { Repository } from "./types";
import { useState } from "react";

export const useRepositoriesPage = () => {
  const [isCreateRepoOpen, setIsCreateRepoOpen] = useState<boolean>();
  const { loading, error, data } = useQuery<any>(GET_REPOSITORIES_QUERY, {
    variables: {
      first: 100,
    },
  });

  const repositories: Repository[] = data?.viewer.repositories.nodes || [];

  const openCreateRepoDialog = () => {
    setIsCreateRepoOpen(true);
  };

  const closeCreateRepoDialog = () => {
    setIsCreateRepoOpen(false);
  };

  return {
    loading,
    error,
    data,
    repositories,
    isCreateRepoOpen,
    openCreateRepoDialog,
    closeCreateRepoDialog,
  };
};
