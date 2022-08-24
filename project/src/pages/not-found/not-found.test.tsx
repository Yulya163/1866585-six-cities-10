import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRoute from '../../components/history-route/history-route';
import NotFound from './not-found';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRoute history={history}>
        <NotFound />
      </HistoryRoute>,
    );

    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});

