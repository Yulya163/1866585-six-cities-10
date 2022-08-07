import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {calcRatingWidth} from '../../utils';

type PlaceCardProps = {
  offer: Offer;
  onPlaceCardMouseOver?: (id: number) => void;
  placeCardClass: string;
}


function PlaceCard({offer, onPlaceCardMouseOver, placeCardClass}: PlaceCardProps): JSX.Element {
  const {
    price,
    previewImage,
    title,
    isPremium,
    rating,
    type,
    id
  } = offer;

  return (
    <article
      className={placeCardClass}
      onMouseOver={() => onPlaceCardMouseOver && onPlaceCardMouseOver(id)}
    >
      {isPremium ?
        <div className='place-card__mark'>
          <span>Premium</span>
        </div> : null}

      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt={title} />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref ='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{'width': calcRatingWidth(rating)}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
export default PlaceCard;
