import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
