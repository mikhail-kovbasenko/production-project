import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deserunt recusandae possimus nemo modi unde fuga, quod numquam
        architecto vitae sapiente! Maiores quidem molestiae, voluptatem
        error placeat culpa quis ratione dolorem.`,
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Deserunt recusandae possimus nemo modi unde fuga, quod numquam
        architecto vitae sapiente! Maiores quidem molestiae, voluptatem
        error placeat culpa quis ratione dolorem.`,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
