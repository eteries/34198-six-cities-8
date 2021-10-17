import { users } from './users';
import { reviews } from './reviews';
import { cities } from './cities';
import { Offer } from '../types/offer';

export const offers:Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    price: 120,
    rating: 4.8,
    type: 'apartment',
    city: cities[0],
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
      'Fridge',
    ],
    rooms: 3,
    guests: 4,
    reviews: [
      reviews[0],
    ],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  {
    id: 2,
    title: 'Wood and stone place',
    description: 'A truly romantic studio in the center of Amsterdam. It\'s affordable for any tourist, but gives the same level of comfort as any luxurious place with stone and wood.',
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    images: [
      'img/studio-01.jpg',
      'img/studio-photos.jpg',
    ],
    price: 80,
    rating: 4.7,
    type: 'studio',
    city: cities[0],
    host: users[0],
    equipment: [
      'Fireplace',
      'Wi-fi',
      'Towels',
      'Heating',
      'Air conditioner',
      'Kitchen',
      'Cable TV',
      'Fridge',
    ],
    rooms: 1,
    guests: 2,
    reviews: [],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  {
    id: 3,
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A grand apartment with all necessary furniture and equipment, situated near a subway station. It is warm, cozy and very bright. A big king-size bed will give you the best sleep you have ever had.',
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    price: 180,
    rating: 4.2,
    type: 'apartment',
    city: cities[0],
    host: users[2],
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
      'Fridge',
    ],
    rooms: 4,
    guests: 5,
    reviews: [
      reviews[0],
    ],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  {
    id: 4,
    title: 'Une jolie chambre juste à coté de la tour Eiffel',
    description: 'A really nice private room, situated in the proximity of the Eiffel Tower in 7rd neighborhood of Paris. The room has all you need to spend a nice week-end in the Paris\' centre-ville. The host is friendly and speaks English and French. Bon voyage!',
    isPremium: true,
    previewImage: 'img/room-small.jpg',
    images: [
      'img/room.jpg',
    ],
    price: 150,
    rating: 5,
    type: 'private room',
    city: cities[1],
    host: users[3],
    equipment: [
      'Wi-Fi',
      'Coffee machine',
      'Kitchen',
      'Fridge',
    ],
    rooms: 4,
    guests: 5,
    reviews: [
      reviews[0],
    ],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
];
