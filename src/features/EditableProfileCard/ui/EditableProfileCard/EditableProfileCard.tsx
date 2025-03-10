import { CountryType } from 'entities/Country';
import { CurrencyType } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { validKeyboardKeys } from 'shared/const/commons';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/types';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

function EditableProfileCard(props: EditableProfileCardProps) {
  const {
    className,
    id,
  } = props;

  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('server error'),
    [ValidateProfileError.INCORRECT_AGE]: t('age error'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('contry error'),
    [ValidateProfileError.NO_DATA]: t('data error'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('userdata error'),
  };

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

  const handleKeyDownAge = useCallback((e) => {
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

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <EditableProfileCardHeader />
      {validateErrors?.length && validateErrors.map((error: ValidateProfileError) => (
        <Text
          theme={TextTheme.ERROR}
          text={validateErrorTranslates[error]}
          key={error}
        />
      ))}
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
    </DynamicModuleLoader>
  );
}

export default EditableProfileCard;
