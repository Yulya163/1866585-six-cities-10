import ReviewComment from '../review/review';
import {Reviews} from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <ReviewComment
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}
export default ReviewsList;
