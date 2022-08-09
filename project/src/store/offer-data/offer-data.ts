import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {OfferData} from '../../types/state';
import {fetchOfferAction} from '../api-actions';

const initialState: OfferData = {
  offers: [],
  isDataLoaded:false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      });
  }
});
