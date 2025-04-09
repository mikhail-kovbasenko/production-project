import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../model/types/types';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const currencyOptions = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
];

function CurrencySelect(props: CurrencySelectProps) {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      onChange={handleChange}
      value={value}
      items={currencyOptions}
      defaultValue={t('currency')}
      className={classNames('', {}, [className])}
      readonly={readonly}
      direction="top right"
      label={t('currency')}
    />
  );
}

export default memo(CurrencySelect);
