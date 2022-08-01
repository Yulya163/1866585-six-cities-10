import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Main from '../../pages/main/main';
import MainEmpty from '../../pages/main-empty/main-empty';
import NotFound from '../../pages/404-not-found/404-not-found';
import Favorites from '../../pages/favorites/favorites';
import FavoritesEmpty from '../../pages/favorites-empty/favorites-empty';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-rout';
import {Reviews} from '../../types/review';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import {isCheckedAuth} from '../../utils';
import browserHistory from '../../browser-history';

type AppProps = {
  reviews: Reviews;
}

function App({reviews}: AppProps): JSX.Element {

  const {authorizationStatus, isDataLoaded, offersByCity} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={offersByCity && offersByCity.length ? <Main /> : <MainEmpty />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              {offersByCity && offersByCity.length ?
                <Favorites favoriteOffers={offersByCity}/> :
                <FavoritesEmpty />}
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <Room
              offers={offersByCity}
              reviews={reviews}
            />
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
