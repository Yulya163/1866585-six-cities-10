export const MAX_REVIEWS_NUMBER = 10;

export const MAX_COMMENT_VALUE_LENGTH = 300;
export const MIN_COMMENT_VALUE_LENGTH = 50;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum PlaceClasses {
  MainPlacesListClass = 'cities__places-list places__list tabs__content',
  NeighbourhoodPlacesListClass = 'near-places__list places__list',
  MainPlaceCardClass = 'cities__card place-card',
  NeighbourhoodPlaceCardClass = 'near-places__card place-card',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum Options {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}
