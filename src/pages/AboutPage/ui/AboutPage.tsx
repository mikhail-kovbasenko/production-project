import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AboutPage() {
  const { t } = useTranslation('about');

  return <Page>{t('about page')}</Page>;
}

export default AboutPage;
