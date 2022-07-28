import {useState} from 'react';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import OffersList from '../../components/offers-list/offers-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import {Offer} from '../../types/offer';
import Map from '../../components/map/map';
import {PlaceClasses} from '../../consts';
import {useAppSelector} from '../../hooks';

function Main(): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const offers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.selectedCity);

  const onPlaceCardMouseOver = (id: number) => {
    const currentOffer = offers.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className='page page--gray page--main'>
      <Header />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Locations/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offers.length} places to stay in {selectedCity}</b>
              <SortingOptions />
              <OffersList
                offers={offers}
                onPlaceCardMouseOver={onPlaceCardMouseOver}
                placeListClass={PlaceClasses.MainPlacesListClass}
                placeCardClass={PlaceClasses.MainPlaceCardClass}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
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
