import {useState} from 'react';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import OffersList from '../../components/offers-list/offers-list';
import {Offer} from '../../types/offer';
import Map from '../../components/map/map';
import {PlaceClasses} from '../../consts';
import {cities} from '../../consts';
import {useAppSelector} from '../../hooks';

function Main(): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const offersByCity = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.selectedCity);

  const onPlaceCardMouseOver = (id: number) => {
    const currentOffer = offersByCity.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className='page page--gray page--main'>
      <Header />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Locations cities={cities}/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersByCity.length} places to stay in {selectedCity}</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref ='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                  <li className='places__option' tabIndex={0}>Price: low to high</li>
                  <li className='places__option' tabIndex={0}>Price: high to low</li>
                  <li className='places__option' tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList
                offers={offersByCity}
                onPlaceCardMouseOver={onPlaceCardMouseOver}
                placeListClass={PlaceClasses.MainPlacesListClass}
                placeCardClass={PlaceClasses.MainPlaceCardClass}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  offers={offersByCity}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

}

export default Main;
