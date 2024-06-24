import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/types';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileErrors.INCORRECT_AGE,
          ValidateProfileErrors.INCORRECT_USER_DATA,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
