import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../model/types/types';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryOptions = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Georgia, content: Country.Georgia },
  { value: Country.Armeina, content: Country.Armeina },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Belarus, content: Country.Belarus },
];

function CountrySelect(props: CountrySelectProps) {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      items={countryOptions}
      value={value}
      defaultValue={t('country')}
      label={t('country')}
      readonly={readonly}
      onChange={handleChange}
    />
  );
}

export default memo(CountrySelect);
