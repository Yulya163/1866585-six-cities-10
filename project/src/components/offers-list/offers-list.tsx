import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  onPlaceCardMouseOver?: (id: number) => void;
  placeListClass: string;
  placeCardClass: string;
}

function OffersList({offers, onPlaceCardMouseOver, placeListClass, placeCardClass}: OffersListProps): JSX.Element {

  return (
    <div className={placeListClass}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onPlaceCardMouseOver={onPlaceCardMouseOver}
          placeCardClass={placeCardClass}
        />
      ))}
    </div>
  );
}
export default OffersList;
