import {offerData} from './offer-data';
import {makeFakeOffers} from '../../utils/mocks';
import {fetchOfferAction, fetchFavoriteOffersAction} from '../api-actions';

const offers = makeFakeOffers();
const favoriteOffers = makeFakeOffers();

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offers: [], favoriteOffers: [], isDataLoaded: false});
  });

  it('should update offers by load offers', () => {
    const state = {offers: [], favoriteOffers: [], isDataLoaded: false};
    expect(offerData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: offers}))
      .toEqual({offers, favoriteOffers: [], isDataLoaded: false});
  });

  it('should update favoriteOffers by load favoriteOffers', () => {
    const state = {offers: [], favoriteOffers: [], isDataLoaded: false};
    expect(offerData.reducer(state, {type: fetchFavoriteOffersAction.fulfilled.type, payload: favoriteOffers}))
      .toEqual({offers: [], favoriteOffers, isDataLoaded: false});
  });
});
