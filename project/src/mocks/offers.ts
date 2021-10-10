import { users } from './users';
import { reviews } from './reviews';

export const offers = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: '<p>A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.</p><p></p>',
    isPremium: true,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    price: 120,
    rating: 80,
    type: 'apartment',
    city: 1,
    host: users[0],
    equipment: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge'
    ],
    rooms: 3,
    guests: 4,
    reviews: [
      reviews[0]
    ]
  }
];
