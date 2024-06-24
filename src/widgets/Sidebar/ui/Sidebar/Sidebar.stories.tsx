import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
};

export const NoAuth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: {} })],
};
