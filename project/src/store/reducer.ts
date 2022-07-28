import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, setOffersByCityAction, changeOptionAction, setOffersByOptionAction} from './action';
import {offers} from '../mocks/offers';
import {getOffersByCity, sortPriceUp, sortPriceDown, sortTopRatedFirst} from '../utils';
import {Options, Cities} from '../consts';

const initialState = {
  selectedCity: Cities.Paris,
  offers: getOffersByCity(offers, Cities.Paris),
  selectedOption: Options.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(offers, state.selectedCity);
    })
    .addCase(changeOptionAction, (state, action) => {
      state.selectedOption = action.payload;
    })
    .addCase(setOffersByOptionAction, (state) => {
      switch (state.selectedOption) {
        case Options.Popular:
          state.offers = getOffersByCity(offers, state.selectedCity);
          break;
        case Options.LowToHigh:
          state.offers = state.offers.sort(sortPriceUp);
          break;
        case Options.HighToLow:
          state.offers = state.offers.sort(sortPriceDown);
          break;
        case Options.TopRatedFirst:
          state.offers = state.offers.sort(sortTopRatedFirst);
          break;
        default:
          state.offers = getOffersByCity(offers, state.selectedCity);
      }
    });
});

export {reducer};
