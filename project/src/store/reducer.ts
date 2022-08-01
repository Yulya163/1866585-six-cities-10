import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, setOffersByCityAction, changeOptionAction, setOffersByOptionAction, loadOffers, requireAuthorization, setDataLoadedStatus, setError} from './action';
import {getOffersByCity, sortPriceUp, sortPriceDown, sortTopRatedFirst} from '../utils';
import {Options, Cities, AuthorizationStatus} from '../consts';
import {Offers} from '../types/offer';

type InitalState = {
  selectedCity: string,
  selectedOption: string,
  offers: Offers | undefined,
  offersByCity: Offers | undefined,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null,
}

const initialState: InitalState = {
  selectedCity: Cities.Paris,
  selectedOption: Options.Popular,
  offers: [],
  offersByCity: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = getOffersByCity(action.payload, Cities.Paris);
    })
    .addCase(changeCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.selectedCity);
    })
    .addCase(changeOptionAction, (state, action) => {
      state.selectedOption = action.payload;
    })
    .addCase(setOffersByOptionAction, (state) => {
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
