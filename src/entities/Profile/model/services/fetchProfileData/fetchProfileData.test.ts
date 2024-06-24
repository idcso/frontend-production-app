import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
