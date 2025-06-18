import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames';
import { VerticalStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import ProfileRating from '../../../features/ProfileRating/ui/ProfileRating';

interface ProfilePageProps {
    className?: string;
}

function ProfilePage(props: ProfilePageProps) {
  const {
    className,
  } = props;

  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation('profile');

  if (!id) {
    return <Text text={t('Error')} />;
  }

  return (
    <Page className={classNames('', {}, [className])} data-testid="ProfilePage">
      <VerticalStack gap="16" fullWidth>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VerticalStack>
    </Page>

  );
}

export default ProfilePage;
