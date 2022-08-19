import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeOffers} from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import {AuthorizationStatus, AppRoute} from '../../consts';
import App from './app';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {isDataLoaded: false},
  OFFER: {offers: makeFakeOffers()},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {

  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={'/'}
              element={<h1>Main Route</h1>}
            />
            <Route
              path={'/'}
              element={<h1>MainEmpty Route</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Main Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/MainEmpty Route/i)).not.toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    const newfakeApp = (
      <Provider
        store={
          mockStore({
            USER: {authorizationStatus: AuthorizationStatus.NoAuth},
            DATA: {isDataLoaded: false},
            OFFER: {offers: makeFakeOffers()},
          })
        }
      >
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    history.push(AppRoute.Login);

    render(newfakeApp);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render "Room" when user navigate to "/offer/:id"', () => {
    history.push(AppRoute.Room);

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
