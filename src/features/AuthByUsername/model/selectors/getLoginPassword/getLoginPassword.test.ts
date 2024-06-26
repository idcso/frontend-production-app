import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/types';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '12345',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('12345');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
