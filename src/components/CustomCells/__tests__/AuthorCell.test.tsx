import { render, screen } from '@testing-library/react';

import { AuthorCell } from '../AuthorCell';

describe('AuthorCell', () => {
  it('should contains a link', () => {
    const { container } = render(
      // @ts-ignore
      <AuthorCell value={{ login: 'user name', url: 'https://' }} />,
    );

    const link = screen.getByRole('link');

    expect(link).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should handle undefine value without generate link', async () => {
    // @ts-ignore
    const { container } = render(<AuthorCell />);

    const link = screen.queryByRole('link');

    expect(link).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
