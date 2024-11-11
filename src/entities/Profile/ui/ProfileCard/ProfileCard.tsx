import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { Input } from '../../../../shared/ui/Input';

interface ProfileCardProps {
    className?: string;
}

function ProfileCard(props: ProfileCardProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('my profile')} />
        <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={styles.btn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input value={data?.first} placeholder={t('your firstname')} className={styles.input} />
        <Input value={data?.lastname} placeholder={t('your lastname')} className={styles.input} />
      </div>
    </div>
  );
}

export default ProfileCard;
