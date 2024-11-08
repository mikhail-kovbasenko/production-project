import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { profileReducer } from '../../../entities/Profile';

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

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterOnMount>
      <div className={classNames('', {}, [className])}>
        {t('Profile')}
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
