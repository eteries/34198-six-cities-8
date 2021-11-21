import { Sorting as SortingItem } from '../../types/sorting';
import { Sortings } from '../../constants';

export const menuItems: SortingItem[] = [
  {
    id: 1,
    title: Sortings.Default,
  },
  {
    id: 2,
    title: Sortings.PriceIncrement,
  },
  {
    id: 3,
    title: Sortings.PriceDecrement,
  },
  {
    id: 4,
    title: Sortings.RatingDecrement,
  },
];
