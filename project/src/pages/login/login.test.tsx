import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import Login from './login';

const mockStore = configureMockStore();

describe('Component: Login', () => {
  it('should render "Login" when user navigate to "login" url', async () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Login />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'keks');
    await userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
