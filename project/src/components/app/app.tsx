import Main from '../main/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import { Routes } from '../../constants';

type appProps = {
  offersNum: number
};

function App({offersNum}: appProps): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.Login}>
          <Login />
        </Route>
        <Route exact path={Routes.Favorites}>
          <Favorites />
        </Route>
        <Route exact path={`${Routes.Offer}:id`}>
          <Offer />
        </Route>
        <Route exact path={Routes.Root}>
          <Main offersNum={offersNum} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
