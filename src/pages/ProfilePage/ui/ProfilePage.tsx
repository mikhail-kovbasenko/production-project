import { classNames } from 'shared/lib/classNames';

import { EditableProfileCard } from 'features/EditableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { VerticalStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';

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
    <Page className={classNames('', {}, [className])}>
      <VerticalStack gap="16" fullWidth>
        <EditableProfileCard id={id} />
      </VerticalStack>
    </Page>

  );
}

export default ProfilePage;
