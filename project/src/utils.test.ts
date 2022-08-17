import {isCheckedAuth, calcRatingWidth, humanizeDate} from './utils';
import {AuthorizationStatus} from './consts';

describe('Function: isCheckedAuth', () => {
  it('should return "true" when authorizationStatus is UNKNOWN', () => {
    const authorizationStatus = AuthorizationStatus.Unknown;

    expect(isCheckedAuth(authorizationStatus))
      .toBe(true);
  });

  it('should return "false" when authorizationStatus is not AUTH', () => {
    const authorizationStatus = AuthorizationStatus.Auth;

    expect(isCheckedAuth(authorizationStatus))
      .toBe(false);
  });

  it('should return "false" when authorizationStatus is not NO_AUTH', () => {
    const authorizationStatus = AuthorizationStatus.NoAuth;

    expect(isCheckedAuth(authorizationStatus))
      .toBe(false);
  });
});

describe('Function: calcRatingWidth', () => {
  it('should return string', () => {
    const number = 4;
    expect(calcRatingWidth(number))
      .toBe('80%');
  });
});

describe('Function: humanizeDate', () => {
  it('should return date string', () => {
    const date = '2022-06-23T12:25:36.939Z';
    expect(humanizeDate(date))
      .toBe('June 2022');
  });
});
