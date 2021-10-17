import Main from '../main/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import { Routes } from '../../constants';
import PrivateRoute from '../private-route/private-route';
import { Offer as OfferType } from '../../types/offer';

type appProps = {
  offersNum: number,
  offers: OfferType[]
};

function App({offersNum, offers}: appProps): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.Login}>
          <Login />
        </Route>
        <Route exact path={Routes.Favorites}>
          <PrivateRoute isAuthorised>
            <Favorites offers={offers} />
          </PrivateRoute>
        </Route>
        <Route exact path={Routes.OfferId}>
          <Offer />
        </Route>
        <Route exact path={Routes.Root}>
          <Main offersNum={offersNum} offers={offers} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
