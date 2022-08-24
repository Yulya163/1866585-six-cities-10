import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRoute from '../history-route/history-route';
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateLoginRoute from './private-login-route';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('should render component for public route, when user authorized', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<h1>Public Route</h1>}
            />
            <Route
              path='/private'
              element={
                <PrivateLoginRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <h1>Private Route</h1>
                </PrivateLoginRoute>
              }
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user not authorized', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NoAuth},
    });

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<h1>Public Route</h1>}
            />
            <Route
              path='/private'
              element={
                <PrivateLoginRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}
                >
                  <h1>Private Route</h1>
                </PrivateLoginRoute>
              }
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
