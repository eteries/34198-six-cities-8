import { CITIES } from '../../mocks/cities';
import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Store } from '../../types/store';
import { Action } from '../../types/action';
import { switchCity } from '../../store/action';

const mapStateToProps = ({cityID}: Store) => ({cityID});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onSwitchCity(id: number) {
    dispatch(switchCity(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnectedCitiesProps = ConnectedProps<typeof connector>

function Cities({cityID, onSwitchCity}: ConnectedCitiesProps): JSX.Element {
  const handleClick = (evt: MouseEvent, id: number): void => {
    evt.preventDefault();
    onSwitchCity(id);
  };

  const getClassName = (isActive: boolean): string => (
    isActive
      ? 'locations__item-link tabs__item tabs__item--active'
      : 'locations__item-link tabs__item'
  );

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map(({name, id}) => (
              <li className="locations__item" key={id}>
                <a className={getClassName(cityID === id)}
                  href="#"
                  onClick={(evt) => handleClick(evt as unknown as MouseEvent, id)}
                >
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export { Cities };
export default connector(Cities);
