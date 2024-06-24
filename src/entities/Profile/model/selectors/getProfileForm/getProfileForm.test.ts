import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/types';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
  test('should return form data', () => {
    const data = {
      first: 'idc',
      lastname: 'so',
      age: 26,
      username: 'admin',
      country: Country.Kazakhstan,
      city: 'Almaty',
      currency: Currency.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: { form: data },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
