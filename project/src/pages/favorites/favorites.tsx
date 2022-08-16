import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Bookmark from '../../components/bookmark/bookmark';
import {Offers, Offer} from '../../types/offer';
import {calcRatingWidth} from '../../utils';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/offer-data/selectors';
import FavoritesEmpty from '../../pages/favorites-empty/favorites-empty';
import {fetchFavoriteOffersAction} from '../../store/api-actions';

store.dispatch(fetchFavoriteOffersAction());

function Favorites(): JSX.Element {

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const cities: {
    [city: string]: Offers,
  } = {};
  favoriteOffers && favoriteOffers.forEach((offer) => {
    const city = offer.city.name;
    if(!cities[city]) {
      cities[city] = [offer];
    } else {
      cities[city].push(offer);
    }
  });

  const citiesOffers: [string, Offers][] = Object.entries(cities);

  let keyValue = 0;

  return (
    favoriteOffers?.length ?
      <div className='page'>
        <Header />

        <main className='page__main page__main--favorites'>
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>

                {citiesOffers.map((cityOffers) => {

                  keyValue++;

                  return (
                    <li className='favorites__locations-items' key={keyValue}>
                      <div className='favorites__locations locations locations--current'>
                        <div className='locations__item'>
                          <Link className='locations__item-link' to={`/offer/${keyValue}`}>
                            <span>{cityOffers[0]}</span>
                          </Link>
                        </div>
                      </div>
                      <div className='favorites__places'>

                        {cityOffers[1].map((offer: Offer) => {
                          const {
                            isPremium,
                            previewImage,
                            price,
                            rating,
                            title,
                            type,
                            isFavorite,
                            id
                          } = offer;

                          return (
                            <article className='favorites__card place-card' key={id}>

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
                                  <Bookmark
                                    isFavorite={isFavorite}
                                    id={id}
                                  />
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
                        })}
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
      </div> :
      <FavoritesEmpty />
  );

}

export default Favorites;
