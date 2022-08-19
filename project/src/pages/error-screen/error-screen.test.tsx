import {render, screen} from '@testing-library/react';
import ErrorScreen from './error-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(<ErrorScreen />);

    expect(screen.getByText(/Sorry, server problems. Try again later/i)).toBeInTheDocument();
  });
});
