import {NameSpace} from '../../consts';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';
import {createSelector} from '@reduxjs/toolkit';
import {getSelectedCity} from '../offer-process/selectors';
import {getOffersByCity} from '../../utils';

export const getOffers = (state: State): Offers | undefined => state[NameSpace.Data].offers;
export const getFavoriteOffers = (state: State): Offers | undefined => state[NameSpace.Data].favoriteOffers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getServerErrorStatus = (state: State): boolean => state[NameSpace.Data].isServerError;

export const filterOffers = createSelector(
  [getOffers, getSelectedCity],
  (offers, selectedCity) => getOffersByCity(offers, selectedCity)
);
