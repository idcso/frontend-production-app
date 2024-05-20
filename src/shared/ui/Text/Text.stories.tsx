import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title story',
    text: 'Text story',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title story',
    text: 'Text story',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Title story',
    text: 'Text story',
    theme: TextTheme.ERROR,
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Title story',
  },
};

export const TitleOnlyDark: Story = {
  args: {
    title: 'Title story',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextOnly: Story = {
  args: {
    text: 'Text story',
  },
};

export const TextOnlyDark: Story = {
  args: {
    text: 'Text story',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
