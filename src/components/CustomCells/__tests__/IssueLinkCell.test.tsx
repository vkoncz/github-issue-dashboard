import { render, screen } from '@testing-library/react';

import { IssueLinkCell } from '../IssueLinkCell';

describe('IssueLinkCell', () => {
  it('should contains a link', () => {
    const { container } = render(
      // @ts-ignore
      <IssueLinkCell value="https://" />,
    );

    const link = screen.getByRole('link');

    expect(link).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should handle undefine value without generate link', async () => {
    // @ts-ignore
    const { container } = render(<IssueLinkCell />);

    const link = screen.queryByRole('link');

    expect(link).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
