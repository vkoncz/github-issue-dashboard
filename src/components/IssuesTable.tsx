import { useGithubIssuesQuery } from '../graphql-client/github-issues.query';

export function IssuesTable() {
  const { loading, data } = useGithubIssuesQuery();

  return <p>{!loading && JSON.stringify(data)}</p>;
}
