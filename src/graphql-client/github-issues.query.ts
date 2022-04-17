import { gql, useQuery } from '@apollo/client';

import type { GithubIssues } from './github-client.model';

const githubIssueQuery = gql`
  {
    repository(owner: "facebook", name: "react") {
      issues(states: OPEN, first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          createdAt
          title
          author {
            login
            url
          }
          state
          url
        }
      }
    }
  }
`;

export const useGithubIssuesQuery = () => useQuery<GithubIssues>(githubIssueQuery);
