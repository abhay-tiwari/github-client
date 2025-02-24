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
          pullRequests(first: 100) {
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

export const CREATE_REPOSITORY = gql`
  mutation CreateRepository(
    $name: String!
    $description: String
    $visibility: RepositoryVisibility!
  ) {
    createRepository(
      input: { name: $name, description: $description, visibility: $visibility }
    ) {
      repository {
        id
        name
        owner {
          login
        }
        url
      }
    }
  }
`;
