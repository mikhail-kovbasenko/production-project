import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'Something new in JS for 2022?',
  views: 103,
  createdAt: '22.01.2023',
  userId: '1',
  type: [
    'IT',
  ],
  blocks: [],
  // eslint-disable-next-line max-len
  img: 'https://sun9-17.userapi.com/impg/N29uhUg7rirCuolXqWYOASJmZcwTjuFvPM-Bbw/rORyk9zEwz8.jpg?size=1080x1350&quality=96&sign=f6104d9986476d462fed2bf38c1355a9&type=album',
};

export const createArticle = (article?: Article) => cy.request({
  method: 'POST',
  url: 'http://localhost:8000/articles/',
  headers: {
    Authorization: 'fas',
  },
  body: article ?? defaultArticle,
}).then(({ body }) => body);

export const removeArticle = (articleId: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8000/articles/${articleId}`,
  headers: {
    Authorization: 'fas',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
