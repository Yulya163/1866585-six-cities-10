import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import MainEmpty from './main-empty';
import {AuthorizationStatus, AppRoute, Cities} from '../../consts';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {isDataLoaded: false, offers: []},
  OFFER: {selectedCity: Cities.Paris},
});

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<MainEmpty/>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Paris/i)).toBeInTheDocument();
  });

});
