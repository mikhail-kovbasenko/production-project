import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
// import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Page } from 'widgets/Page';
import { HorizontalStack } from '../../../shared/ui/Stack';
import { ListBox } from '../../../shared/ui/ListBox';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const handleChange = (val: string) => setValue(val);
  return (
    <Page>
      <BugButton />
      {t('main page')}
      <Input value={value} onChange={handleChange} placeholder="Введите текст" />
      <div>sadsad</div>
      <div>sadsad</div>
      <HorizontalStack>
        <ListBox
          defaultValue="Выберите значние"
          onChange={(val: string) => {}}
          value={undefined}
          items={[
            { value: '1', content: '21313' },
            { value: '2', content: 'fdfsd' },
            { value: '3', content: '213sdfds13', disabled: true },
            { value: '4', content: '21sdfdsfsdfds313' },
          ]}
        />
      </HorizontalStack>
      <div>sadsad</div>
      {/* <Counter /> */}
    </Page>
  );
}

export default MainPage;
