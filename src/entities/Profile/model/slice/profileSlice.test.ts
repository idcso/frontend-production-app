import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { DeepPartial } from 'shared/lib/types/types';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  first: 'idc',
  lastname: 'so',
  age: 26,
  username: 'admin',
  country: Country.Kazakhstan,
  city: 'Almaty',
  currency: Currency.USD,
  avatar: 'avatarLink',
};

describe('profileSlice.test', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test('updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '1234' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '4321' })
      )
    ).toEqual({ form: { username: '4321' } });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, data, form: data, validateErrors: undefined });
  });

  test('updateProfileData service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending(''))
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('updateProfileData service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      data,
      form: data,
      readonly: true,
    });
  });
});
