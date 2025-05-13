import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/RatingCard';
import { Page } from '@/widgets/Page';

function MainPage() {
  const { t } = useTranslation();

  return (
    <Page>
      {t('main page')}
    </Page>
  );
}

export default MainPage;
