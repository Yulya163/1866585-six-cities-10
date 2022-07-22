import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  handlePlaceCardMouseOver?: (id: number) => void;
  placeListClass: string;
  placeCardClass: string;
}

function OffersList({offers, handlePlaceCardMouseOver, placeListClass, placeCardClass}: OffersListProps): JSX.Element {

  return (
    <div className={placeListClass}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handlePlaceCardMouseOver={handlePlaceCardMouseOver && handlePlaceCardMouseOver}
          placeCardClass={placeCardClass}
        />
      ))}
    </div>
  );
}
export default OffersList;
