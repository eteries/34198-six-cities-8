import { Route, Redirect, RouteProps } from 'react-router-dom';
import { Routes } from '../../constants';

type PrivateRouteProps = RouteProps & {
  isAuthorised: boolean
}

function PrivateRoute({isAuthorised, exact, path, children}: PrivateRouteProps): JSX.Element {
  return (
    <Route exact={exact} path={path}>
      {isAuthorised
        ? children
        : <Redirect to={Routes.Login} />}
    </Route>);
}

export default PrivateRoute;
