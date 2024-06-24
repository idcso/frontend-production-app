import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          first: 'idc',
          lastname: 'so',
          age: 26,
          username: 'admin',
          country: Country.Kazakhstan,
          city: 'Almaty',
          currency: Currency.USD,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          first: 'idc',
          lastname: 'so',
          age: 26,
          username: 'admin',
          country: Country.Kazakhstan,
          city: 'Almaty',
          currency: Currency.USD,
        },
      },
    }),
  ],
};
