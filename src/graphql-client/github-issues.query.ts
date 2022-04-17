import { gql } from '@apollo/client';

export const githubIssueQuery = gql`
  query {
    viewer {
      login
    }
  }
`;
