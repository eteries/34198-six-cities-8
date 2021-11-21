import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Logo from '../Logo';
import UserMenu from '../user-menu/user-menu';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Cities from '../cities/cities';
import { CITIES } from '../../mocks/cities';
import { Store } from '../../types/store';
import { City } from '../../types/city';
import Sorting from '../sorting/sorting';

type mainProps = {
  offersNum: number
};

const mapStateToProps = ({offers, cityID}: Store) => ({offers, cityID});

const connector = connect(mapStateToProps);

type connectedMainProps = mainProps & ConnectedProps<typeof connector>

function Main({offersNum, offers, cityID}: connectedMainProps): JSX.Element {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points = offers.map(({location, id}) => ({location, id}));
  const currentCity = CITIES.find(({id}) => id === cityID) as City;

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
              <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
              <Sorting />
              <OffersList offersNum={offersNum} offers={offers} onActiveOfferChange={setActivePoint} />
            </section>
            <div className="cities__right-section">
              <Map area={currentCity} points={points} activePointID={activePoint} className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
