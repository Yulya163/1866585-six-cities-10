export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type City = {
  name: string;
  location: Location;
}

export type Offer = {
  id: number;
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
};

export type Offers = Offer[];
