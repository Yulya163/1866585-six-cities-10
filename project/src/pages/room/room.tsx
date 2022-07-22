import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {Offers, Offer, City} from '../../types/offer';
import {reviews} from '../../mocks/reviews';
import {calcRatingWidth} from '../../utils';
import Map from '../../components/map/map';

type RoomProps = {
  offers: Offers;
  city: City;
}

function Room({offers, city}: RoomProps): JSX.Element {
  const location = useLocation();

  const urlId = Number(location.pathname.split('/').slice(-1));

  const offer: Offer | undefined = offers.find((item) => item.id === urlId);

  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {offer !== undefined && offer.images.map((image) => (
                <div className='property__image-wrapper' key={image}>
                  <img className='property__image' src={image} alt={offer.title} />
                </div>
              ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {offer !== undefined && offer.isPremium ?
                <div className='property__mark'>
                  <span>Premium</span>
                </div> : null}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {offer !== undefined && offer.title}
                </h1>
                <button className='property__bookmark-button button' type='button'>
                  <svg className='property__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{'width': calcRatingWidth(offer !== undefined ? offer.rating : 0)}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>{offer !== undefined ? offer.rating : 0}</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {offer !== undefined && offer.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {offer !== undefined && offer.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {offer !== undefined && offer.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer !== undefined && offer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {offer !== undefined && offer.goods.map((good, index) => (
                    <li className='property__inside-item' key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={offer !== undefined ? offer.host.avatarUrl : ''}
                      width='74'
                      height='74'
                      alt={offer !== undefined ? offer.title : ''}
                    />
                  </div>
                  <span className='property__user-name'>
                    {offer !== undefined && offer.host.name}
                  </span>
                  <span className='property__user-status'>
                    {offer !== undefined && offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {offer !== undefined && offer.description}
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <Map
              city={city}
              offers={offers}
            />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <Link to='/'>
                    <img className='place-card__image' src='img/room.jpg' width='260' height='200' alt='Place image' />
                  </Link>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;80</b>
                      <span className='place-card__price-text'>&47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>In bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{'width': '80%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <Link to='/'>Wood and stone place</Link>
                  </h2>
                  <p className='place-card__type'>Private room</p>
                </div>
              </article>

              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <Link to='/'>
                    <img className='place-card__image' src='img/apartment-02.jpg' width='260' height='200' alt='Place image' />
                  </Link>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;132</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{'width': '80%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <Link to='/'>Canal View Prinsengracht</Link>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>

              <article className='near-places__card place-card'>
                <div className='place-card__mark'>
                  <span>Premium</span>
                </div>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <Link to='/'>
                    <img className='place-card__image' src='img/apartment-03.jpg' width='260' height='200' alt='Place image' />
                  </Link>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;180</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{'width': '100%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <Link to='/'>Nice, cozy, warm big bed apartment</Link>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

}

export default Room;
