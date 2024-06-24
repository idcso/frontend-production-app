import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './ProfilePage.module.scss';
import { Currency } from 'entities/Currency';
import {
  ProfileCard,
  ValidateProfileErrors,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
      'First name and last name are required'
    ),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileErrors.INCORRECT_USERNAME]: t('Username is required'),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileErrors.INCORRECT_CITY]: t('Incorrect city'),
    [ValidateProfileErrors.INCORRECT_CURRENCY]: t('Incorrect currency'),
    [ValidateProfileErrors.INCORRECT_AVATAR_LINK]: t('Incorrect avatar link'),
    [ValidateProfileErrors.NO_DATA]: t('Data not specified'),
    [ValidateProfileErrors.SERVER_ERROR]: t('Server error on saving'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      if (isNaN(Number(value))) return;

      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfilePageHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[err]}
            key={err}
          />
        ))}
      <div className={classNames('', {}, [className])}>
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
