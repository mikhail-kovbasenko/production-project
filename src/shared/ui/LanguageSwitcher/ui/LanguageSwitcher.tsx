import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo } from 'react';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const toggle = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.LangSwitcher, {
        [styles.collapsed]: short,
      }, [className])}
    >
      {t(short ? 'Short' : 'language')}
    </Button>
  );
}

export default memo(LanguageSwitcher);
