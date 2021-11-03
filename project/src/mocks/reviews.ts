import { Review } from '../types/review';
import { users } from './users';

export const reviews:Review[] = [
  {
    id: 1,
    author: users[1],
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 5,
    date: new Date('10.10.2021'),
  },
  {
    id: 2,
    author: users[3],
    text: 'A surprisingly comfortable and clean room considering the price. I loved the location: we could see the Eiffel tower from the window and visited the main tourist attractions on foot. And the host, Leon, he was absolutely gentle and helpful. We had a nice conversation and he gave as a lot of tips about places we should visit.',
    rating: 5,
    date: new Date('16.10.2021'),
  },
];
