import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../consts';

export const changeCityAction = createAction('city/changeCity', (value) => (
  {
    payload: value,
  }
));

export const setOffersByCityAction = createAction('city/setOffersByCity');

export const changeOptionAction = createAction('city/changeOption', (value) => (
  {
    payload: value,
  }
));

export const setOffersByOptionAction = createAction('city/setOffersByOption');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('city/setError');

export const redirectToRoute = createAction<AppRoute>('city/redirectToRoute');
