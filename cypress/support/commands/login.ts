import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localeStorage';

export const login = (username: string = 'testuser', password: string = '333') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
  });
};
