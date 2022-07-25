import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, setOffersByCityAction} from './action';
import {offers} from '../mocks/offers';
import {getOffersByCity} from '../utils';

const CURRENT_CITY = 'Paris';

const initialState = {
  selectedCity: CURRENT_CITY,
  offers: getOffersByCity(offers, CURRENT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(offers, state.selectedCity);
    });
});

export {reducer};
