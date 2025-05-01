import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/RatingCard';
import { Page } from '@/widgets/Page';

function MainPage() {
  const { t } = useTranslation();

  return (
    <Page>
      {t('main page')}
      <RatingCard title="Как вам статья?" feedBackTitle="Оставьте ваш отзыв" hasFeedback />
    </Page>
  );
}

export default MainPage;
