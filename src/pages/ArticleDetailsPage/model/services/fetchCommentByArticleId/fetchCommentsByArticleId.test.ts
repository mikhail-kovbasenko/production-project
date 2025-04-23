import { TestAsyncThunk } from '@/shared/config/tests';
import { fetchCommentsArticleById } from './fetchCommentsByArticleId';

const comments = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '111',
      role: 'ADMIN',
      avatar: 'https://sun9-80.userapi.com/s/v1/if1/Irrse1EK1TI1q2hbq1LtCdkgEhQZcF7pFWj9YrJTHrZ5rr1CCQFT1sQzfWMTesvC9m6zeLSz.jpg?quality=96&as=32x32,48x49,72x73,108x109,160x162,240x243,360x364,480x485,540x546,640x647,720x728,918x928&from=bu&u=c0IOIUnEgGwnt91Cev6pMndIEWstJl6DdndicIGLWcc&cs=200x202',
    },
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '111',
      role: 'ADMIN',
      avatar: 'https://sun9-80.userapi.com/s/v1/if1/Irrse1EK1TI1q2hbq1LtCdkgEhQZcF7pFWj9YrJTHrZ5rr1CCQFT1sQzfWMTesvC9m6zeLSz.jpg?quality=96&as=32x32,48x49,72x73,108x109,160x162,240x243,360x364,480x485,540x546,640x647,720x728,918x928&from=bu&u=c0IOIUnEgGwnt91Cev6pMndIEWstJl6DdndicIGLWcc&cs=200x202',
    },
  },
  {
    id: '3',
    text: 'some comment 3',
    articleId: '1',
    userId: '2',
    user: {
      id: '2',
      username: 'user',
      password: '111',
      role: 'USER',
      avatar: 'https://sun9-56.userapi.com/s/v1/if2/g2Vp1KS5ElTWNARB7V58ZeIjgv5HxH_utCMgdGeTSkQopXlEOXoQPXSUR8Mid3l7VPYk4tahhOe8bI8niK1whB3L.jpg?quality=96&as=32x18,48x27,72x40,108x60,160x89,240x133,360x200,480x267,540x300,604x336&from=bu&u=otIwtHv8rc10DNAoH3hvD2YwSOejJ7BcwT4Klyr2cQQ&cs=320x213',
    },
  },
];

describe('fetchCommentsByArticleId', () => {
  test('fetch comments success', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

    const result = await thunk.callThunk('1');

    expect(result.payload).toEqual(comments);
  });
});
