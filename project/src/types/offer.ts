import { City } from './city';
import { User } from './user';
import { Review } from './review';
import { Location } from './location';
import { Housing } from './housing';

export type Offer = {
  id: number,
  title: string,
  description: string,
  isPremium: boolean,
  previewImage: string,
  images: string[],
  price: number,
  rating: number,
  type: Housing,
  city: City,
  host: User,
  equipment: string[],
  rooms: number,
  guests: number,
  reviews: Review[],
  location: Location,
}
