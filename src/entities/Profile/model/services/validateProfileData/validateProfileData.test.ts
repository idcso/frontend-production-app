import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test('without username', async () => {
    const result = validateProfileData({ ...data, username: '' });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USERNAME]);
  });

  test('with incorrect city', async () => {
    const result = validateProfileData({ ...data, city: '' });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });

  test('with incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test('with incorrect avatar', async () => {
    const result = validateProfileData({ ...data, avatar: '' });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AVATAR_LINK]);
  });

  test('with incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  test('with incorrect currency', async () => {
    const result = validateProfileData({ ...data, currency: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CURRENCY]);
  });

  test('with incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_USERNAME,
      ValidateProfileErrors.INCORRECT_CITY,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
      ValidateProfileErrors.INCORRECT_CURRENCY,
      ValidateProfileErrors.INCORRECT_AVATAR_LINK,
    ]);
  });
});
