import {offerProcess} from './offer-process';
import {Cities, Options} from '../../consts';
import {changeCity, changeOption} from './offer-process';

describe('Reducer: offerProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({selectedCity: Cities.Paris, selectedOption: Options.Popular, error: null});
  });

  it('should change current city by a given value', () => {
    const state = {selectedCity: Cities.Paris, selectedOption: Options.Popular, error: null};
    expect(offerProcess.reducer(state, changeCity(Cities.Paris)))
      .toEqual({selectedCity: Cities.Paris, selectedOption: Options.Popular, error: null});
  });

  it('should change current option by a given value', () => {
    const state = {selectedCity: Cities.Paris, selectedOption: Options.Popular, error: null};
    expect(offerProcess.reducer(state, changeOption(Options.Popular)))
      .toEqual({selectedCity: Cities.Paris, selectedOption: Options.Popular, error: null});
  });
});
