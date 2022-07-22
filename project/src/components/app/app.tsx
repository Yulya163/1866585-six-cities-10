import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import Main from '../../pages/main/main';
import MainEmpty from '../../pages/main-empty/main-empty';
import NotFound from '../../pages/404-not-found/404-not-found';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-rout';
import {Offers, City} from '../../types/offer';

type AppProps = {
  rentalOffersCount: number;
  offers: Offers;
}

const Setting = {
  CURRENT_CITY: 'Amsterdam',
};

const getOffersByCity = (offers: Offers, cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const getCityData = (offers: Offers, cityName: string) => {
  const offersByCity = offers.filter((offer) => offer.city.name === cityName);
  return offersByCity[0].city;
};

function App({rentalOffersCount, offers}: AppProps): JSX.Element {

  const city: City = getCityData(offers, Setting.CURRENT_CITY);
  const offersByCity: Offers = getOffersByCity(offers, Setting.CURRENT_CITY);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            offersByCity.length ?
              <Main
                rentalOffersCount={rentalOffersCount}
                offers={offers}
                city={city}
              /> : <MainEmpty />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites favoriteOffers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <Room
              offers={offers}
              city={city}
            />
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
