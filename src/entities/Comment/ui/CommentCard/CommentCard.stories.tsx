import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommentCard from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    articleId: '1',
    user: {
      id: '1',
      username: 'Admin',
      avatar: 'https://sun9-9.userapi.com/impg/Fqdlfrwzee2yuRWLCjaH4aq25C88Er_fGLyRkA/kRYaaXS-LNg.jpg?size=1024x1280&quality=95&sign=1e13c17cd6867e41a10aafeb337409f8&type=album',
    },
    text: 'Hello, World!',
  },
};
