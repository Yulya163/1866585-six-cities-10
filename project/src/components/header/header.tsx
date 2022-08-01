import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AuthorizationStatus} from '../../consts';
import {logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>
            {
              authorizationStatus === AuthorizationStatus.Auth ?
                <ul className='header__nav-list'>
                  <li className='header__nav-item user'>
                    <Link className='header__nav-link header__nav-link--profile' to='/favorites'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'>
                      </div>
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                      <span className='header__favorite-count'>3</span>
                    </Link>
                  </li>
                  <li className='header__nav-item'>
                    <Link
                      className='header__nav-link'
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      to='/'
                    >
                      <span className='header__signout'>Sign out</span>
                    </Link>
                  </li>
                </ul> :
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
