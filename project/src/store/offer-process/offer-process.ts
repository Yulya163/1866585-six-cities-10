import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, Cities, Options} from '../../consts';
import {OfferProcess} from '../../types/state';

const initialState: OfferProcess = {
  selectedCity: Cities.Paris,
  selectedOption: Options.Popular,
  error: null,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    changeOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const {changeCity, changeOption} = offerProcess.actions;
