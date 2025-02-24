import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES_QUERY } from "../../graphql/queries";
import { Repository } from "./types";

export const useRepositoriesPage = () => {
  const { loading, error, data } = useQuery<any>(GET_REPOSITORIES_QUERY, {
    variables: {
      first: 100,
    },
  });

  const repositories: Repository[] = data?.viewer.repositories.nodes || [];

  return {
    loading,
    error,
    data,
    repositories,
  };
};
