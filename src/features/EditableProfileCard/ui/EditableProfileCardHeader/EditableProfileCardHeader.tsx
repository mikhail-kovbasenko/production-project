import { Fragment, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HorizontalStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
  className?: string;
}

function EditableProfileCardHeader(props: ProfilePageHeaderProps) {
  const { className } = props;

  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    if (profileData?.id) {
      dispatch(updateProfileData(profileData?.id));
    }
    // dispatch(profileActions.setReadonly(true));
  }, [dispatch, profileData]);

  return (
    <HorizontalStack justify="between" className={classNames('', {}, [className])} fullWidth>
      <Text title={t('my profile')} />
      {
        canEdit && (
          <Fragment>
            {
            readonly
              ? (
                <Button
                  theme={ButtonTheme.BACKGROUND_INVERTED}
                  onClick={handleEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Edit')}
                </Button>
              )
              : (
                <HorizontalStack gap="8">
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={handleCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('save')}
                  </Button>
                </HorizontalStack>
              )
          }
          </Fragment>
        )
      }

    </HorizontalStack>
  );
}

export default EditableProfileCardHeader;
