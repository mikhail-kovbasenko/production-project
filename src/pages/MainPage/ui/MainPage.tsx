import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
// import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Page } from 'widgets/Page';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const handleChange = (val: string) => setValue(val);
  return (
    <Page>
      <BugButton />
      {t('main page')}
      <Input value={value} onChange={handleChange} placeholder="Введите текст" />
      {/* <Counter /> */}
    </Page>
  );
}

export default MainPage;
