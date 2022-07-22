import {useState} from 'react';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import OffersList from '../../components/offers-list/offers-list';
import {Offers, Offer, City} from '../../types/offer';
import Map from '../../components/map/map';

type MainProps = {
  rentalOffersCount: number;
  offers: Offers;
  city: City;
}

function Main({rentalOffersCount, offers, city}: MainProps): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const handlePlaceCardMouseOver = (id: number) => {
    const currentOffer = offers.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className='page page--gray page--main'>
      <Header />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Locations />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{rentalOffersCount} places to stay in Amsterdam</b>
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
                offers={offers}
                handlePlaceCardMouseOver={handlePlaceCardMouseOver}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  city={city}
                  offers={offers}
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
