import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { Fragment, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './ProfilePageHeader.module.scss';
import { getUserAuthData } from '../../../../entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

function ProfilePageHeader(props: ProfilePageHeaderProps) {
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
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('my profile')} />
      {
        canEdit && (
          <div className={styles.btnsWrapper}>
            {
            readonly
              ? (
                <Button
                  theme={ButtonTheme.BACKGROUND_INVERTED}
                  className={styles.btn}
                  onClick={handleEdit}
                >
                  {t('Edit')}
                </Button>
              )
              : (
                <Fragment>
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    className={styles.btn}
                    onClick={handleCancelEdit}
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    className={styles.saveBtn}
                    onClick={handleSave}
                  >
                    {t('save')}
                  </Button>
                </Fragment>
              )
          }
          </div>
        )
      }

    </div>
  );
}

export default ProfilePageHeader;
