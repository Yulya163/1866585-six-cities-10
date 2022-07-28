import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction, changeOptionAction, setOffersByCityAction} from '../../store/action';
import {Cities, Options} from '../../consts';

function Locations(): JSX.Element {

  const selectedCity = useAppSelector((state) => state.selectedCity);

  const dispatch = useAppDispatch();

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Object.values(Cities).map((city) => (
            <li
              className='locations__item'
              key={city}
            >
              <Link
                className={selectedCity === city ?
                  'locations__item-link tabs__item tabs__item--active' :
                  'locations__item-link tabs__item'}
                to='/'
                onClick={() => {
                  dispatch(changeCityAction(city));
                  dispatch(setOffersByCityAction());
                  dispatch(changeOptionAction(Options.Popular));
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
