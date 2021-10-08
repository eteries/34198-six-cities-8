import { Redirect } from 'react-router-dom';
import { Routes } from '../../constants';

type PrivateRouteProps = {
  isAuthorised: boolean,
  children: JSX.Element
}

function PrivateRoute({isAuthorised, children}: PrivateRouteProps): JSX.Element {
  return (isAuthorised
    ? children
    : <Redirect to={Routes.Login} />);
}

export default PrivateRoute;
