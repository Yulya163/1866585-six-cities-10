import {useState} from 'react';
import {APIRoute} from '../../consts';
import {api} from '../../store';
import {MAX_COMMENT_VALUE_LENGTH, MIN_COMMENT_VALUE_LENGTH} from '../../consts';
import {Comments} from '../../types/comment';

type ReviewFormProps = {
  id: number;
  updateReviews: (data: Comments) => void;
}

function ReviewForm({id, updateReviews}: ReviewFormProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  type FieldEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

  const handleRatingFieldChange = (evt: FieldEvent) => {
    setRating(Number(evt.target.value));
  };

  const handleTextAreaChange = (evt: FieldEvent) => {
    setComment(evt.target.value);
  };

  const resetForm = () => {
    setRating(0);
    setComment('');
  };

  const sendReview = async () => {
    const {data} = await api.post(
      `${APIRoute.Comments}/${id}`,
      {comment, rating}
    );
    await resetForm();
    await updateReviews(data);
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={(evt) => {
        evt.preventDefault();
        sendReview();
      }}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
          checked={rating === 5}
          onChange={handleRatingFieldChange}
        />
        <label htmlFor='5-stars' className='reviews__rating-label form__rating-label' title='perfect'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
          checked={rating === 4}
          onChange={handleRatingFieldChange}
        />
        <label htmlFor='4-stars' className='reviews__rating-label form__rating-label' title='good'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
          checked={rating === 3}
          onChange={handleRatingFieldChange}
        />
        <label htmlFor='3-stars' className='reviews__rating-label form__rating-label' title='not bad'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
          checked={rating === 2}
          onChange={handleRatingFieldChange}
        />
        <label htmlFor='2-stars' className='reviews__rating-label form__rating-label' title='badly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
          checked={rating === 1}
          onChange={handleRatingFieldChange}
        />
        <label htmlFor='1-star' className='reviews__rating-label form__rating-label' title='terribly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={handleTextAreaChange}
        value={comment}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b> and no more then <b className='reviews__text-amount'>300 characters</b>. Now you have entered {comment.length} character.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={
            comment.length < MIN_COMMENT_VALUE_LENGTH ||
            comment.length > MAX_COMMENT_VALUE_LENGTH ||
            rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewForm;
