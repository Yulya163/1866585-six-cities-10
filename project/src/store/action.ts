import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_OFFERS_BY_CITY: 'GET_OFFERS_BY_CITY',
  CHANGE_SORTING: 'CHANGE_SORTING',
  SET_OFFERS_BY_OPTION: 'SET_OFFERS_BY_OPTION',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_DATA_LOADED_STATUS: 'SET_DATA_LOADED_STATUS',
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (value) => (
  {
    payload: value,
  }
));

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);

export const changeOptionAction = createAction(Action.CHANGE_SORTING, (value) => (
  {
    payload: value,
  }
));

export const setOffersByOptionAction = createAction(Action.SET_OFFERS_BY_OPTION);

export const loadOffers = createAction<Offers>(Action.LOAD_OFFERS);

export const setDataLoadedStatus = createAction<boolean>(Action.SET_DATA_LOADED_STATUS);

export const setError = createAction<string | null>(Action.SET_ERROR);
