import dayjs from 'dayjs';
import {Offers} from './types/offer';

const calcRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const humanizeDate = (dueDate: string) => dayjs(dueDate).format('MMMM YYYY');

const getOffersByCity = (offers: Offers, cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const getCityData = (offers: Offers, cityName: string) => {
  const offersByCity = offers.filter((offer) => offer.city.name === cityName);
  return offersByCity[0].city;
};

export {calcRatingWidth, humanizeDate, getOffersByCity, getCityData};
