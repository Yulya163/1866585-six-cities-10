import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Main from '../../pages/main/main';
import MainEmpty from '../../pages/main-empty/main-empty';
import NotFound from '../../pages/not-found/not-found';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import PrivateLoginRoute from '../private-login-route/private-login-route';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
//import HistoryRouter from '../history-route/history-route';
import {isCheckedAuth} from '../../utils';
//import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getLoadedDataStatus, getOffers} from '../../store/offer-data/selectors';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const offers = useAppSelector(getOffers);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={offers && offers.length ? <Main /> : <MainEmpty />}
      />
      <Route
        path={AppRoute.Login}
        element={
          <PrivateLoginRoute authorizationStatus={authorizationStatus}>
            <Login />
          </PrivateLoginRoute>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Room}
        element={
          <Room />
        }
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
