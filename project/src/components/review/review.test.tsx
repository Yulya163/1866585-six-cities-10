import {render, screen} from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';
import Review from './review';

const comment = makeFakeComment();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Review
        review={comment}
      />);

    expect(screen.getByAltText(new RegExp(`${comment.user.name} avatar`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${comment.comment}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${comment.user.name}`, 'i'))).toBeInTheDocument();
  });
});
