//import {music, system, name, internet} from 'faker';
import {Offer, Offers} from '../types/offer';
import {Comment} from '../types/comment';

export const makeFakeOffer = (): Offer => ({
  'city': {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  },
  'previewImage': 'https://10.react.pages.academy/static/hotel/18.jpg',
  'images': [
    'https://10.react.pages.academy/static/hotel/8.jpg',
    'https://10.react.pages.academy/static/hotel/6.jpg',
    'https://10.react.pages.academy/static/hotel/5.jpg',
    'https://10.react.pages.academy/static/hotel/14.jpg',
    'https://10.react.pages.academy/static/hotel/1.jpg',
    'https://10.react.pages.academy/static/hotel/4.jpg',
    'https://10.react.pages.academy/static/hotel/7.jpg',
    'https://10.react.pages.academy/static/hotel/12.jpg',
    'https://10.react.pages.academy/static/hotel/13.jpg',
    'https://10.react.pages.academy/static/hotel/10.jpg',
    'https://10.react.pages.academy/static/hotel/3.jpg',
    'https://10.react.pages.academy/static/hotel/20.jpg',
    'https://10.react.pages.academy/static/hotel/15.jpg',
    'https://10.react.pages.academy/static/hotel/19.jpg'
  ],
  'title': 'Penthouse, 4-5 rooms + 5 balconies',
  'isFavorite': false,
  'isPremium': false,
  'rating': 4.1,
  'type': 'hotel',
  'bedrooms': 2,
  'maxAdults': 5,
  'price': 393,
  'goods': [
    'Laptop friendly workspace',
    'Washer',
    'Breakfast',
    'Air conditioning'
  ],
  'host': {
    'id': 25,
    'name': 'Angelina',
    'isPro': true,
    'avatarUrl': 'img/avatar-angelina.jpg'
  },
  'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
  'location': {
    'latitude': 51.210402,
    'longitude': 6.798314,
    'zoom': 16
  },
  'id': 1
} as Offer);

export const makeFakeOffers = (): Offers => Array.from({length: 5}, () => makeFakeOffer());

export const makeFakeComment = (): Comment => ({
  'id': 1,
  'user': {
    'id': 11,
    'isPro': false,
    'name': 'Jack',
    'avatarUrl': 'https://10.react.pages.academy/static/avatar/2.jpg'
  },
  'rating': 3,
  'comment': 'Home is amazing. Its like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
  'date': '2022-06-05T12:25:36.939Z'
} as Comment);
