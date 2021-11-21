import { connect, ConnectedProps } from 'react-redux';
import { SortingAction } from '../../types/action';
import { Dispatch, useState } from 'react';
import { sortOffersByDefault, sortOffersByPriceIncrement, sortOffersByPriceDecrement, sortOffersByRatingDecrement } from '../../store/action';
import { Sortings } from '../../constants';
import { menuItems } from './sorting-items';
import { Store } from '../../types/store';

const mapStateToProps = ({cityID}: Store) => ({cityID});

const mapDispatchToProps = (dispatch: Dispatch<SortingAction>) => ({
  onSortByDefault(cityID: number) {
    dispatch(sortOffersByDefault(cityID));
  },
  onSortByPriceIncrement() {
    dispatch(sortOffersByPriceIncrement());
  },
  onSortByPriceDecrement() {
    dispatch(sortOffersByPriceDecrement());
  },
  onSortByRatingDecrement() {
    dispatch(sortOffersByRatingDecrement());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnectedSortingProps = ConnectedProps<typeof connector>

function Sorting({onSortByDefault, onSortByPriceIncrement, onSortByPriceDecrement, onSortByRatingDecrement, cityID}: ConnectedSortingProps): JSX.Element {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeMenuItemID, setActiveMenuItemID] = useState(1);

  const handleMenuClick = (id: number, title: string) => {
    setMenuOpen(false);
    setActiveMenuItemID(id);

    switch (title) {
      case Sortings.Default:
        onSortByDefault(cityID);
        break;
      case Sortings.PriceIncrement:
        onSortByPriceIncrement();
        break;
      case Sortings.PriceDecrement:
        onSortByPriceDecrement();
        break;
      case Sortings.RatingDecrement:
        onSortByRatingDecrement();
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() =>setMenuOpen(!isMenuOpen)}>
        {menuItems.find((item) => item.id === activeMenuItemID)?.title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isMenuOpen ? 'places__options--opened' : ''}`}>
        {menuItems.map(({id, title}) => (
          <li className={`places__option ${activeMenuItemID === id ? 'places__option--active' : ''}`}
            tabIndex={0}
            key={id}
            onClick={() => handleMenuClick(id, title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { Sorting };
export default connector(Sorting);
