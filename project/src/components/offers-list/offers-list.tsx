import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {getSelectedOption} from '../../store/offer-process/selectors';
import {getSortedOffers} from '../../utils';

type OffersListProps = {
  offers: Offers | undefined;
  onPlaceCardMouseOver?: (id: number) => void;
  placeListClass: string;
  placeCardClass: string;
}

function OffersList({offers, onPlaceCardMouseOver, placeListClass, placeCardClass}: OffersListProps): JSX.Element {

  const selectedOption = useAppSelector(getSelectedOption);
  const sortedOffers = getSortedOffers(offers, selectedOption);

  return (
    <div className={placeListClass}>
      {sortedOffers && sortedOffers.map((offer) => (
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
