import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import ArticleRecommendationsList from './ArticleRecommendationsList';
import { Article } from '../../../entities/Article';
import { StoreDecorator } from '../../../shared/config/storybook';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
  id: '1',
  img: 'https://sun9-17.userapi.com/impg/N29uhUg7rirCuolXqWYOASJmZcwTjuFvPM-Bbw/rORyk9zEwz8.jpg?size=1080x1350&quality=96&sign=f6104d9986476d462fed2bf38c1355a9&type=album',
  createdAt: '',
  views: 21,
  user: { id: '1', username: '12f' },
  blocks: [],
  type: [],
  title: '25',
  subtitle: 'asd',
};

export const Normal = Template.bind({});
Normal.args = {

};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=2`,
      method: 'GET',
      status: 200,
      response: [{
        ...article,
        id: '1',
      },
      {
        ...article,
        id: '2',
      }],
    },
  ],
};
Normal.decorators = [StoreDecorator({})];
