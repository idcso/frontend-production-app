import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'random text 123',
  },
};

export const PrimaryDark: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'random text 123',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
