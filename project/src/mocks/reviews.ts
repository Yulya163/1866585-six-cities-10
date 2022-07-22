import {Reviews} from '../types/review';

export const reviews: Reviews = [
  {
    'id': 1,
    'user': {
      'id': 12,
      'isPro': false,
      'name': 'Isaac',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/3.jpg'
    },
    'rating': 4,
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2022-06-13T12:25:36.938Z'
  },
  {
    'id': 2,
    'user': {
      'id': 11,
      'isPro': false,
      'name': 'Jack',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/2.jpg'
    },
    'rating': 3,
    'comment': 'Home is amazing. Its like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    'date': '2022-07-05T12:25:36.939Z'
  },
  {
    'id': 3,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/4.jpg'
    },
    'rating': 2,
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2022-04-05T12:25:36.939Z'
  },
];
