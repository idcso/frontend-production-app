import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const { first, lastname, username, age, city, country, currency, avatar } =
    profile;
  const errors: ValidateProfileErrors[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!username) {
    errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
  }

  if (!city) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  if (!currency) {
    errors.push(ValidateProfileErrors.INCORRECT_CURRENCY);
  }

  if (!avatar) {
    errors.push(ValidateProfileErrors.INCORRECT_AVATAR_LINK);
  }

  return errors;
};
