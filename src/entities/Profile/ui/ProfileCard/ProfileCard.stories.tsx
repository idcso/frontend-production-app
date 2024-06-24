import type { Meta, StoryObj } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/tests/storybook.png';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      first: 'idc',
      lastname: 'so',
      age: 26,
      username: 'admin',
      country: Country.Kazakhstan,
      city: 'Almaty',
      currency: Currency.USD,
      avatar,
    },
  },
};

export const WithError: Story = {
  args: { error: 'error' },
};

export const Loading: Story = {
  args: { isLoading: true },
};
