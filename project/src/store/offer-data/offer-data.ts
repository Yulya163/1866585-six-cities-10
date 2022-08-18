import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {OfferData} from '../../types/state';
import {fetchOfferAction, fetchFavoriteOffersAction} from '../api-actions';

const initialState: OfferData = {
  offers: [],
  favoriteOffers: [],
  isDataLoaded: false,
  isServerError: false,
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
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isServerError = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
  }
});
