import {createAction} from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_OFFERS_BY_CITY: 'GET_OFFERS_BY_CITY',
  CHANGE_SORTING: 'CHANGE_SORTING',
  SET_OFFERS_BY_OPTION: 'SET_OFFERS_BY_OPTION',
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
