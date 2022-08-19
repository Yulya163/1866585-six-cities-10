import {render, screen} from '@testing-library/react';
import ReviewForm from './review-form';

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    render(
      <ReviewForm
        id={1}
        updateReviews={jest.fn()}
      />);

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
