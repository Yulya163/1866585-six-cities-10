import {isCheckedAuth, calcRatingWidth, humanizeDate, sortDayDown, sortPriceUp, sortPriceDown, sortTopRatedFirst, getSortedOffers, getRandomCity} from './utils';
import {AuthorizationStatus} from './consts';
import {makeFakeOffer, makeFakeOffers, makeFakeComment} from './utils/mocks';

const fakeOffer = makeFakeOffer();
const fakeOffers = makeFakeOffers();
const fakeComment = makeFakeComment();
const selectedOption = 'Popular';

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

describe('Function: getSortedOffers', () => {
  it('should return offers', () => {
    expect(getSortedOffers(fakeOffers, selectedOption))
      .toBe(fakeOffers);
  });
});

describe('Function with dayjs', () => {
  it('humanizeDate should return date string', () => {
    const date = '2022-06-23T12:25:36.939Z';
    expect(humanizeDate(date))
      .toBe('June 2022');
  });
  it('sortDayDown should return date string', () => {
    expect(sortDayDown(fakeComment, fakeComment))
      .toBe(0);
  });
});

describe('get weight for sorting', () => {
  it('sortPriceUp return difference of values', () => {
    expect(sortPriceUp(fakeOffer, fakeOffer))
      .toBe(0);
  });
  it('sortPriceDown return difference of values', () => {
    expect(sortPriceDown(fakeOffer, fakeOffer))
      .toBe(0);
  });
  it('sortTopRatedFirst return difference of values', () => {
    expect(sortTopRatedFirst(fakeOffer, fakeOffer))
      .toBe(0);
  });

  describe('Function: getRandomCity', () => {
    it('should return random city', () => {
      const fakeCities = ['Paris'];
      expect(getRandomCity(fakeCities))
        .toBe('Paris');
    });
  });
});
