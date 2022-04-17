import type { LazyQueryHookOptions } from '@apollo/client';
import { gql, useLazyQuery } from '@apollo/client';

import type { GithubIssues } from './github-client.model';

interface GitQueryVars {
  blockSize?: number;
  afterCursor?: string;
}

const githubIssueQuery = gql`
  query GetGithubIssues($blockSize: Int!, $afterCursor: String) {
    repository(owner: "facebook", name: "react") {
      issues(
        states: OPEN
        orderBy: { field: CREATED_AT, direction: DESC }
        first: $blockSize
        after: $afterCursor
      ) {
        pageInfo {
          endCursor
        }
        totalCount
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

export const useGithubIssuesQuery = (options: LazyQueryHookOptions<GithubIssues, GitQueryVars>) =>
  useLazyQuery<GithubIssues, GitQueryVars>(githubIssueQuery, options);
