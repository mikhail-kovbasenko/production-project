import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { KeyboardEvent, useCallback, useEffect } from 'react';

import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { validKeyboardKeys } from 'shared/const/commons';
import { CurrencyType } from 'entities/Currency';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import { CountryType } from '../../../entities/Country';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

function ProfilePage(props: ProfilePageProps) {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);

  const handleChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      first: value,
    }));
  }, [dispatch]);

  const handleChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value,
    }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value),
    }));
  }, [dispatch]);

  const handleKeyDownAge = useCallback((e: KeyboardEvent) => {
    if (
      !/[0-9]/.test(e.key)
      && !(Object.values(validKeyboardKeys).some((v) => v === e.key))
    ) {
      e.preventDefault();
    }
  }, []);

  const handleChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      city: value,
    }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      username: value,
    }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value,
    }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((currency: CurrencyType) => {
    dispatch(profileActions.updateProfile({
      currency,
    }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((country: CountryType) => {
    dispatch(profileActions.updateProfile({
      country,
    }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterOnMount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={handleChangeFirstname}
          onChangeLastname={handleChangeLastname}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onKeyDownAge={handleKeyDownAge}
          onChangeUsername={handleChangeUsername}
          onChangeAvatar={handleChangeAvatar}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
