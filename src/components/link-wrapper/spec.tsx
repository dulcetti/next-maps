import { render, screen } from '@testing-library/react';

import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/some-link">Whatever</LinkWrapper>);

    const children = screen.getByRole('link', { name: /whatever/i });
    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/some-link');
  });
});
