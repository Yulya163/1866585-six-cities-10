import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offers} from '../types/offer';
import {loadOffers, setError, Action, setDataLoadedStatus} from './action';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../consts';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  Action.CLEAR_ERROR,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);
