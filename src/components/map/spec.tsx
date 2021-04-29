import Map from './';
import { render, screen } from '@testing-library/react';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    );
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Rio de Janeiro',
      slug: 'rio-de-janeiro',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const secondPlace = {
      id: '2',
      name: 'Irlanda',
      slug: 'ireland',
      location: {
        latitude: 45,
        longitude: -20,
      },
    };
    render(<Map places={[place, secondPlace]} />);
    expect(screen.getByTitle(/rio de janeiro/i)).toBeInTheDocument();
    expect(screen.getByTitle(/irlanda/i)).toBeInTheDocument();
  });
});
