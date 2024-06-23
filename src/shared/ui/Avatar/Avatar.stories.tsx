import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: AvatarImg,
    alt: 'avatar image',
    size: 150,
  },
};

export const Small: Story = {
  args: {
    src: AvatarImg,
    alt: 'avatar image',
    size: 50,
  },
};
