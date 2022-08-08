import ReviewComment from '../review/review';
import {Comments} from '../../types/comment';

type ReviewsListProps = {
  reviews: Comments;
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
