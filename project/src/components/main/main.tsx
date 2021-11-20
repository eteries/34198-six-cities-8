import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Logo from '../Logo';
import UserMenu from '../user-menu/user-menu';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Cities from '../cities/cities';
import { CITIES } from '../../mocks/cities';
import { Store } from '../../types/store';

type mainProps = {
  offersNum: number
};

const mapStateToProps = ({offers}: Store) => ({offers});

const connector = connect(mapStateToProps);

type connectedMainProps = mainProps & ConnectedProps<typeof connector>

function Main({offersNum, offers}: connectedMainProps): JSX.Element {
  const points = offers.map(({location, id}) => ({location, id}));
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <Cities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offersNum={offersNum} offers={offers} onActiveOfferChange={setActivePoint} />
            </section>
            <div className="cities__right-section">
              <Map area={CITIES[0]} points={points} activePointID={activePoint} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
