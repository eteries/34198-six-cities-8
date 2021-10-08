import { Link } from 'react-router-dom';
import { Routes } from '../constants';

function Logo(): JSX.Element {
  return (
    <Link to={Routes.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
