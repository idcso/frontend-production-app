import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

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

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: '' } },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
