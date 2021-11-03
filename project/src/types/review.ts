import { User } from './user';

export type Review = {
  id: number,
  author: User,
  text: string,
  rating: number,
  date: Date
};
