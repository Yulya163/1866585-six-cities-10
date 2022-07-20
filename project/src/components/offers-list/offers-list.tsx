import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {useState} from 'react';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}: OffersListProps): JSX.Element {

  const [activePlaceCardId, setActivePlaceCard] = useState({id: 1});

  const handlePlaceCardMouseOver = (id: number) => {
    setActivePlaceCard({...activePlaceCardId, id: id});
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          placeCardMouseOverHandle={handlePlaceCardMouseOver}
        />
      ))}
    </div>
  );
}
export default OffersList;
