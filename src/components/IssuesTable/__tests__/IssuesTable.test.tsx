import { render } from '@testing-library/react';

import { IssuesTable } from '../IssuesTable';

jest.mock('../../../graphql-client/github-issues.query', () => ({
  useGithubIssuesQuery: () => [() => {}],
}));

describe('IssueTable', () => {
  it('should match snapshot', () => {
    const { container } = render(<IssuesTable />);

    expect(container).toMatchSnapshot();
  });
});
