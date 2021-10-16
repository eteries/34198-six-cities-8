import { Review } from '../types/review';

export const reviews:Review[] = [
  {
    id: 1,
    authorId: 2,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 5,
    date: new Date('10.10.2021'),
  },
  {
    id: 2,
    authorId: 4,
    text: 'A surprisingly comfortable and clean room considering the price. I loved the location: we could see the Eiffel tower from the window and visited the main tourist attractions on foot. And the host, Leon, he was absolutely gentle and helpful. We had a nice conversation and he gave as a lot of tips about places we should visit.',
    rating: 5,
    date: new Date('16.10.2021'),
  },
];
