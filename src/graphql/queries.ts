import { gql } from "@apollo/client";

export const GET_REPOSITORIES_QUERY = gql`
  query GetRepositories($first: Int) {
    viewer {
      repositories(first: $first) {
        totalCount
        nodes {
          id
          name
          pushedAt
          description
          pullRequests(first: 10) {
            nodes {
              closed
              title
              changedFiles
              merged
              id
              number
            }
          }
          primaryLanguage {
            color
            id
            name
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
