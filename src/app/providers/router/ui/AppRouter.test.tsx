import { screen, waitFor } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/config/tests';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

import AppRouter from './AppRouter';

describe('AppRouter', () => {
  test('Страница должна отренедриться', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');

    expect(page).toBeInTheDocument();
  });
  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/blablabla',
    });

    const page = await screen.findByTestId('NotFoundPage');

    expect(page).toBeInTheDocument();
  });
  test('Редирект неавторизованного пользвателя на главную', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');

    expect(page).toBeInTheDocument();
  });
  test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    await waitFor(() => expect(screen.getByTestId('ProfilePage')).toBeInTheDocument());
    // const page = await screen.findByTestId('ProfilePage');

    // expect(page).toBeInTheDocument();
  });
  test('Доступ запрещен (отсутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');

    expect(page).toBeInTheDocument();
  });
  test('Доступ разрешен (присутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');

    expect(page).toBeInTheDocument();
  });
});
