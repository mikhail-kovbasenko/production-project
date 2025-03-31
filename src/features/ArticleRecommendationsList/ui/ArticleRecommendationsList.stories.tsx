import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRecommendationsList from './ArticleRecommendationsList';
import { StoreDecorator } from '../../../shared/config/storybook';
import { Article } from '../../../entities/Article';

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
  img: '',
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
