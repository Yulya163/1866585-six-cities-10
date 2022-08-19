import dayjs from 'dayjs';
import {Offers, Offer} from './types/offer';
import {AuthorizationStatus} from './consts';
import {Comment} from './types/comment';
import {Options} from './consts';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const calcRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const humanizeDate = (dueDate: string) => dayjs(dueDate).format('MMMM YYYY');

const getOffersByCity = (offers: Offers | undefined, cityName: string) => offers && offers.filter((offer) => offer.city.name === cityName);

const getCityData = (offers: Offers | undefined, cityName: string) => {
  if (offers) {
    const offersByCity = offers.filter((offer) => offer.city.name === cityName);
    return offersByCity.length && offersByCity[0].city;
  }
};

const getWeightForPriceUp = (priceA: number, priceB: number) => priceA - priceB;
const getWeightForPriceDown = (priceA: number, priceB: number) => priceB - priceA;
const getWeightForTopRatedFirst = (ratedA: number, ratedB: number) => ratedB - ratedA;

const sortPriceUp = (offerA: Offer, offerB: Offer) => getWeightForPriceUp(offerA.price, offerB.price);
const sortPriceDown = (offerA: Offer, offerB: Offer) => getWeightForPriceDown(offerA.price, offerB.price);
const sortTopRatedFirst = (offerA: Offer, offerB: Offer) => getWeightForTopRatedFirst(offerA.rating, offerB.rating);

const sortDayDown = (reviewA: Comment, reviewB: Comment) => dayjs(reviewB.date).diff(dayjs(reviewA.date));

const getSortedOffers = (offers: Offers | undefined, selectedOption: string) => {
  switch (selectedOption) {
    case Options.Popular:
      return offers;
    case Options.LowToHigh:
      return offers && offers.slice().sort(sortPriceUp);
    case Options.HighToLow:
      return offers && offers.slice().sort(sortPriceDown);
    case Options.TopRatedFirst:
      return offers && offers.slice().sort(sortTopRatedFirst);
    default:
      return offers;
  }
};

const getRandomCity = (cities: string[]) => {
  const rand = Math.floor(Math.random() * cities.length);
  return cities[rand];
};

export {
  isCheckedAuth,
  calcRatingWidth,
  humanizeDate,
  getOffersByCity,
  getCityData,
  sortPriceUp,
  sortPriceDown,
  sortDayDown,
  sortTopRatedFirst,
  getSortedOffers,
  getRandomCity
};
