import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {offerData} from './offer-data/offer-data';
import {offerProcess} from './offer-process/offer-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
