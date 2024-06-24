import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/types';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
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
      profile: { data },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
