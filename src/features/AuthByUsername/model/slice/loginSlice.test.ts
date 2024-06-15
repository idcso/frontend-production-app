import { DeepPartial } from 'shared/lib/types/types';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('admin'))
    ).toEqual({ username: 'admin' });
  });

  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('321'))
    ).toEqual({ password: '321' });
  });
});
