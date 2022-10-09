/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // see https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303

import userEvent from '@testing-library/user-event';
import AppRoutes from '../AppRoutes';
import ROUTES from '../AppRouteNames';
import App from '../App';

const mockStore = configureStore([]);

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe('App (router) tests', () => {
  test('Is accessible', async () => {
    const { container } = renderWithRouter(<AppRoutes />, {
      route: ROUTES.HOME,
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(screen.getByTestId('homePageContainer')).toBeInTheDocument();
  });

  test('404 is shown for /cannnotFindPage', () => {
    renderWithRouter(<AppRoutes />, { route: '/cannnotFindPage' });
    expect(screen.queryByTestId('homePageContainer')).not.toBeInTheDocument();
    expect(screen.getByTestId('404PageContainer')).toBeInTheDocument();
  });
});

describe('App renders correctly', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore({
      dinos: {
        data: [
          { id: 'a', text: 'MyDino', selected: true },
          { id: 'b', text: 'MyOtherDino', selected: true },
          { id: 'c', text: 'MyThirdDino', selected: false },
        ],
      },
      FeatureFlags: { features: [], persist: false },
    });
  });
  test('App is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
