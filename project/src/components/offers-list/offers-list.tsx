import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  handlePlaceCardMouseOver: (id: number) => void;
}

function OffersList({offers, handlePlaceCardMouseOver}: OffersListProps): JSX.Element {

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handlePlaceCardMouseOver={handlePlaceCardMouseOver}
        />
      ))}
    </div>
  );
}
export default OffersList;
