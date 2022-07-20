import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import {Offers} from '../../types/offer';

type FavoritesProps = {
  favoriteOffers: Offers;
}

const calcRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

function Favorites({favoriteOffers}: FavoritesProps): JSX.Element {
  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>

              {favoriteOffers.map((offer) => {

                const {
                  city,
                  isPremium,
                  previewImage,
                  price,
                  rating,
                  title,
                  type,
                  id
                } = offer;
                const {name} = city;

                return (
                  <li className='favorites__locations-items' key={id}>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <Link className='locations__item-link' to={`/offer/${id}`}>
                          <span>{name}</span>
                        </Link>
                      </div>
                    </div>
                    <div className='favorites__places'>

                      <article className='favorites__card place-card'>

                        {isPremium ?
                          <div className='place-card__mark'>
                            <span>Premium</span>
                          </div> : null}

                        <div className='favorites__image-wrapper place-card__image-wrapper'>
                          <Link to={`/offer/${id}`}>
                            <img className='place-card__image' src={previewImage} width='150' height='110' alt={title} />
                          </Link>
                        </div>
                        <div className='favorites__card-info place-card__info'>
                          <div className='place-card__price-wrapper'>
                            <div className='place-card__price'>
                              <b className='place-card__price-value'>&euro;{price}</b>
                              <span className='place-card__price-text'>&#47;&nbsp;night</span>
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
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <Link className='footer__logo-link' to='/'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </Link>
      </footer>
    </div>
  );

}

export default Favorites;
