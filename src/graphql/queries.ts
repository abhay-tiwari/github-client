import { gql } from "@apollo/client";

export const GET_REPOSITORIES_QUERY = gql`
  query GetRepositories($first: Int) {
    viewer {
      repositories(first: $first) {
        totalCount
        nodes {
          id
          name
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
