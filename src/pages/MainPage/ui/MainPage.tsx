import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t('main page')}
    </div>
  );
}

export default MainPage;
