import {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { classNames, Mods } from '../../../lib/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

function Select(props: SelectProps) {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const handleSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  const optionList = useMemo(() => options?.map((opt) => (
    <option value={opt.value} className={styles.option} key={opt.value}>
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      { label && <span className={styles.label}>{label}</span> }
      <select
        disabled={readonly}
        className={styles.Select}
        value={value}
        onChange={handleSelectChange}
      >
        {optionList}
      </select>
    </div>
  );
}

export default memo(Select);
