import {createAction} from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_OFFERS_BY_CITY: 'GET_OFFERS_BY_CITY',
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (value) => (
  {
    payload: value,
  }
));

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);
