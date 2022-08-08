import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffersByCity, changeOption, setOffersByOption, loadOffers, requireAuthorization, setDataLoadedStatus, setError} from './action';
import {getOffersByCity, sortPriceUp, sortPriceDown, sortTopRatedFirst} from '../utils';
import {Options, Cities, AuthorizationStatus} from '../consts';
import {Offers, Offer} from '../types/offer';

type InitalState = {
  selectedCity: string,
  selectedOption: string,
  offers: Offers | undefined,
  offer: Offer | undefined,
  offersNearby: Offers | undefined,
  offersByCity: Offers | undefined,
  authorizationStatus: AuthorizationStatus,
  userName: string | null,
  isDataLoaded: boolean,
  error: string | null,
}

const initialState: InitalState = {
  selectedCity: Cities.Paris,
  selectedOption: Options.Popular,
  offers: [],
  offer: undefined,
  offersNearby: [],
  offersByCity: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: null,
  isDataLoaded: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = getOffersByCity(action.payload, Cities.Paris);
    })
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCity, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.selectedCity);
    })
    .addCase(changeOption, (state, action) => {
      state.selectedOption = action.payload;
    })
    .addCase(setOffersByOption, (state) => {
      switch (state.selectedOption) {
        case Options.Popular:
          state.offersByCity = getOffersByCity(state.offers, state.selectedCity);
          break;
        case Options.LowToHigh:
          state.offersByCity = state.offersByCity && state.offersByCity.sort(sortPriceUp);
          break;
        case Options.HighToLow:
          state.offersByCity = state.offersByCity && state.offersByCity.sort(sortPriceDown);
          break;
        case Options.TopRatedFirst:
          state.offersByCity = state.offersByCity && state.offersByCity.sort(sortTopRatedFirst);
          break;
        default:
          state.offersByCity = getOffersByCity(state.offers, state.selectedCity);
      }
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
