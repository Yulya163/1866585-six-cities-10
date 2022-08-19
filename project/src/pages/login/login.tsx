import {useRef, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/offer-process/offer-process';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import Logo from '../../components/logo/logo';
import {saveUserName} from '../../services/userName';
import {getRandomCity} from '../../utils';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [isDisabled, setIsDisabled] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    saveUserName(authData.login);
  };

  const onChange = () => {
    const minOneLetterAndNumberReg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    if (passwordRef.current && minOneLetterAndNumberReg.test(passwordRef.current.value)) {
      setIsDisabled(false);
      setMessage('');
    } else {
      setIsDisabled(true);
      setMessage('Please enter at least one letter and number without spaces');
    }
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      handleSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const randomCity = getRandomCity(cities);

  return (
    <div className='page page--gray page--login'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              action='#'
              method='post'
              onSubmit={onSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden' htmlFor='email'>E-mail</label>
                <input
                  ref={loginRef}
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  id='email'
                  data-testid='login'
                  required
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden' htmlFor='password'>Password</label>
                <input
                  ref={passwordRef}
                  className='login__input form__input'
                  type='password'
                  name='password'
                  onChange={onChange}
                  placeholder='Password'
                  id='password'
                  data-testid='password'
                  required
                />
                <p>{message}</p>
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
                disabled={isDisabled}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link
                className='locations__item-link'
                to='/'
                onClick={() => {
                  dispatch(changeCity(randomCity));
                }}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

}

export default Login;
