import { useQuery } from '@apollo/client';

import { githubIssueQuery } from '../graphql-client/github-issues.query';

export function IssuesTable() {
  const { loading, data } = useQuery(githubIssueQuery);

  return <p>{!loading && JSON.stringify(data)}</p>;
}
