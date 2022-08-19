import {store} from '../store/index';
import {Offers} from './offer';
import {AuthorizationStatus} from '../consts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type OfferData = {
  offers: Offers | undefined,
  favoriteOffers: Offers | undefined,
  isDataLoaded: boolean,
  isServerError: boolean,
};

export type OfferProcess = {
  selectedCity: string,
  selectedOption: string,
  error: string | null,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
