import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import Main from './main';
import {AppRoute, Cities} from '../../consts';
import {makeFakeOffers} from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});
const offersByCity = makeFakeOffers();
const selectedCity = Cities.Paris;

describe('Component: Main', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<Main/>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(`${offersByCity.length} places to stay in ${selectedCity}`, 'i'))).toBeInTheDocument();
  });

  it('should redirect to /offer/:id when user clicked to button', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<Main />}
            />
            <Route
              path={AppRoute.Room}
              element={<h1>This is Room</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByText(/This is Room/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('Link'));

    expect(screen.getByText(/This is Room/i)).toBeInTheDocument();

  });
});
